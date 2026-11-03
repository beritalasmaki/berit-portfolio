import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import PostList, { PostGrid } from "@/components/blog/PostList";
import { getAllTags, getPosts } from "@/data/blog";
import { siteUrl } from "@/data/site";
import { htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { absoluteUrl, blogPath, homePath, postPath } from "@/i18n/paths";
import { JsonLd, breadcrumbJsonLd, personNode } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: `${t.meta.blog.title} | ${t.meta.titleSuffix}`,
    description: t.meta.blog.description,
    paths: { en: blogPath("en"), fi: blogPath("fi") },
    siteName: t.site.name,
  });
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale);
  const other: Locale = locale === "en" ? "fi" : "en";
  const posts = getPosts(locale);
  const tags = getAllTags(locale);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              name: t.meta.jsonLd.blogName,
              description: t.meta.blog.description,
              inLanguage: htmlLang[locale],
              url: absoluteUrl(siteUrl, blogPath(locale)),
              author: { "@id": `${siteUrl}/#person` },
              blogPost: posts.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                url: absoluteUrl(siteUrl, postPath(locale, post.slug)),
                datePublished: post.date,
              })),
            },
            personNode(locale, t),
            breadcrumbJsonLd([
              { name: t.site.name, path: homePath(locale) },
              { name: t.blog.eyebrow, path: blogPath(locale) },
            ]),
          ],
        }}
      />
      <Header
        locale={locale}
        copy={{ header: t.header, common: t.common, site: t.site }}
        switchHref={blogPath(other)}
      />
      <main className="px-gutter pt-6 pb-24">
        <div className="flex flex-col gap-[clamp(48px,5vw,64px)]">
          <Reveal>
            <section aria-labelledby="blog-title" className="border-t border-rule pt-[clamp(32px,4vw,48px)]">
              <p className="font-mono-label text-mono-label uppercase text-muted m-0">{t.blog.eyebrow}</p>
              <h1 id="blog-title" className="mt-4 m-0 text-hero max-w-[18em]">
                {t.blog.heading[0]}
                <span className="text-accent-hero">{t.blog.heading[1]}</span>
              </h1>
              <p className="mt-6 mb-0 max-w-prose-cs text-lead text-body">{t.blog.intro}</p>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label={t.blog.postsLabel}>
              {/* `PostList` reads the `?tag=` filter from the URL
                  (`useSearchParams`), which bails the page out of static
                  rendering below the nearest Suspense boundary; the fallback
                  is the unfiltered list, so the page never renders empty. */}
              <Suspense fallback={<PostGrid posts={posts} locale={locale} copy={t.blog} />}>
                <PostList posts={posts} tags={tags} locale={locale} copy={t.blog} />
              </Suspense>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer copy={{ footer: t.footer, site: t.site }} />
      <BackToTop label={t.common.backToTop} />
    </>
  );
}
