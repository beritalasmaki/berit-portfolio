import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import TableOfContents, { type TocItem } from "@/components/case-study/TableOfContents";
import BlogBody from "@/components/blog/BlogBody";
import { plainText } from "@/components/blog/InlineText";
import PostCard from "@/components/blog/PostCard";
import PostMeta from "@/components/blog/PostMeta";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareLinks from "@/components/blog/ShareLinks";
import { TagList } from "@/components/blog/TagPill";
import { getPost, getPosts, getRelatedPosts, getSeriesParts, getTranslation } from "@/data/blog";
import { siteUrl } from "@/data/site";
import { fmt } from "@/i18n/format";
import { htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { absoluteUrl, blogPath, homePath, postPath } from "@/i18n/paths";
import { JsonLd, breadcrumbJsonLd, personNode } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getPosts(locale).map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return {};
  const t = getDictionary(locale);
  const translation = getTranslation(locale, post);
  // Only the languages this post exists in: an untranslated post gets no
  // `hreflang` for the other language.
  const paths: Partial<Record<Locale, string>> = { [locale]: postPath(locale, post.slug) };
  if (translation) paths[locale === "en" ? "fi" : "en"] = postPath(locale === "en" ? "fi" : "en", translation.slug);
  return {
    ...pageMetadata({
      locale,
      title: `${post.tabTitle ?? post.title} | ${t.meta.titleSuffix}`,
      description: plainText(post.excerpt),
      paths,
      type: "article",
      article: {
        publishedTime: post.date,
        modifiedTime: post.updated,
        authors: [t.site.name],
        tags: post.tags,
      },
      siteName: t.site.name,
    }),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const post = getPost(locale, slug);
  if (!post) notFound();
  const t = getDictionary(locale);
  const b = t.blog;
  const other: Locale = locale === "en" ? "fi" : "en";
  const translation = getTranslation(locale, post);

  const series = getSeriesParts(locale, post);
  const related = getRelatedPosts(locale, post.slug, 2);

  // Built from the headings the body actually has, so the TOC can never
  // offer a link to a section that isn't there.
  const tocItems: TocItem[] = [
    { id: "post-intro", label: b.intro_toc },
    ...post.body.flatMap((block) =>
      block.type === "heading" ? [{ id: block.id, label: block.navLabel ?? block.text }] : []
    ),
    ...(related.length > 0 ? [{ id: "other", label: b.keepReading }] : []),
    { id: "back-to-blog", label: b.backToAll, href: blogPath(locale) },
  ];

  return (
    <>
      <ReadingProgress targetId="post-article" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: plainText(post.excerpt),
              inLanguage: htmlLang[locale],
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              keywords: post.tags.join(", "),
              url: absoluteUrl(siteUrl, postPath(locale, post.slug)),
              mainEntityOfPage: absoluteUrl(siteUrl, postPath(locale, post.slug)),
              author: { "@id": `${siteUrl}/#person` },
              publisher: { "@id": `${siteUrl}/#person` },
              image: `${siteUrl}/og/og-${locale}.png`,
            },
            personNode(locale, t),
            breadcrumbJsonLd([
              { name: t.site.name, path: homePath(locale) },
              { name: b.eyebrow, path: blogPath(locale) },
              { name: post.title, path: postPath(locale, post.slug) },
            ]),
          ],
        }}
      />
      <Header
        locale={locale}
        copy={{ header: t.header, common: t.common, site: t.site }}
        switchHref={translation ? postPath(other, translation.slug) : blogPath(other)}
        backHref={blogPath(locale)}
        backLabel={t.header.backToBlog}
      />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-16">
          <TableOfContents items={tocItems} title={t.caseStudy.onThisPage} navigateLabel={t.caseStudy.navigateTo} />

          <div className="min-w-0 flex flex-col gap-[clamp(48px,5vw,64px)]">
            <article id="post-article" aria-labelledby="post-title" className="flex flex-col gap-[clamp(48px,5vw,64px)]">
              <Reveal>
                <header id="post-intro" className="border-t border-rule pt-[clamp(32px,4vw,48px)] flex flex-col gap-6">
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">
                    <Link href={blogPath(locale)} data-sound="back" className="hover:text-ink focus-visible:text-ink">
                      {b.eyebrow}
                    </Link>
                    {post.series && (
                      <>
                        {" · "}
                        {post.series.name} · {fmt(b.seriesPartOf, { part: post.series.part, total: series.length })}
                      </>
                    )}
                  </p>
                  <h1 id="post-title" className="m-0 text-hero max-w-[18em] text-balance">
                    {post.title}
                  </h1>
                  {post.series?.subtitle && (
                    <p className="m-0 text-sub-h4 text-accent-dark">{post.series.subtitle}</p>
                  )}
                  <PostMeta post={post} locale={locale} copy={b} />
                  <p className="m-0 max-w-prose-cs text-lead text-body">{post.excerpt}</p>
                  <TagList tags={post.tags} label={b.topics} />
                  <ShareLinks title={post.title} copy={b} />
                </header>
              </Reveal>

              <Reveal>
                <div className="rounded-card glass p-card-pad">
                  <BlogBody blocks={post.body} copy={b} />
                </div>
              </Reveal>

              {series.length > 1 && (
                <Reveal>
                  <nav aria-labelledby="series-heading" className="rounded-card glass p-card-pad">
                    <p className="font-mono-label text-mono-label uppercase text-muted m-0">{b.series}</p>
                    <h2 id="series-heading" className="mt-4 m-0 text-card-h3 text-ink">
                      {post.series?.name}
                    </h2>
                    <ol className="mt-6 mb-0 p-0 list-none flex flex-col">
                      {series.map((part) => {
                        const current = part.slug === post.slug;
                        return (
                          <li key={part.slug} className="flex gap-4 border-t border-rule py-4">
                            <span aria-hidden="true" className="shrink-0 font-mono-label text-mono-label uppercase text-muted pt-1">
                              {String(part.series?.part ?? 0).padStart(2, "0")}
                            </span>
                            {current ? (
                              <span aria-current="page" className="text-body-em font-semibold text-accent-dark">
                                {part.title} <span className="font-normal text-muted">{b.youAreHere}</span>
                              </span>
                            ) : (
                              <Link
                                href={postPath(locale, part.slug)}
                                data-sound="open"
                                className="text-body-em font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-dark focus-visible:decoration-accent-dark"
                              >
                                {part.title}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </nav>
                </Reveal>
              )}

              <Reveal>
                <div className="border-t border-rule pt-8">
                  <ShareLinks title={post.title} copy={b} />
                </div>
              </Reveal>
            </article>

            {related.length > 0 && (
              <Reveal>
                <section id="other" aria-labelledby="other-heading">
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">{b.keepReading}</p>
                  <h2 id="other-heading" className="mt-4 m-0 text-section-h2 text-ink">
                    {b.moreFromBlog}
                  </h2>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-grid-gap items-stretch">
                    {related.map((more) => (
                      <PostCard key={more.slug} post={more} locale={locale} copy={b} headingLevel="h3" />
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>
        </div>
      </main>
      <Footer copy={{ footer: t.footer, site: t.site }} />
      <BackToTop label={t.common.backToTop} />
    </>
  );
}
