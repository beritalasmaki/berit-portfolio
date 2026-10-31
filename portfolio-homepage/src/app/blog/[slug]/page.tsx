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
import { getPost, getRelatedPosts, getSeriesParts, posts } from "@/data/blog";
import { siteUrl } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const description = plainText(post.excerpt);
  return {
    title: `${post.tabTitle ?? post.title} | By Berit Alasmäki`,
    description,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: ["Berit Alasmäki"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const series = getSeriesParts(post);
  const related = getRelatedPosts(post.slug, 2);

  // Built from the headings the body actually has, so the TOC can never
  // offer a link to a section that isn't there.
  const tocItems: TocItem[] = [
    { id: "post-intro", label: "Introduction" },
    ...post.body.flatMap((block) =>
      block.type === "heading" ? [{ id: block.id, label: block.navLabel ?? block.text }] : []
    ),
    ...(related.length > 0 ? [{ id: "other", label: "Keep reading" }] : []),
    { id: "back-to-blog", label: "Back to all posts", href: "/blog" },
  ];

  return (
    <>
      <ReadingProgress targetId="post-article" />
      <Header backHref="/blog" backLabel="Back to blog" />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-16">
          <TableOfContents items={tocItems} />

          <div className="min-w-0 flex flex-col gap-[clamp(48px,5vw,64px)]">
            <article id="post-article" aria-labelledby="post-title" className="flex flex-col gap-[clamp(48px,5vw,64px)]">
              <Reveal>
                <header id="post-intro" className="border-t border-rule pt-[clamp(32px,4vw,48px)] flex flex-col gap-6">
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">
                    <Link href="/blog" className="hover:text-ink focus-visible:text-ink">
                      Blog
                    </Link>
                    {post.series && (
                      <>
                        {" · "}
                        {post.series.name} · Part {post.series.part} of {series.length}
                      </>
                    )}
                  </p>
                  <h1 id="post-title" className="m-0 text-hero max-w-[18em] text-balance">
                    {post.title}
                  </h1>
                  {post.series?.subtitle && (
                    <p className="m-0 text-sub-h4 text-accent-dark">{post.series.subtitle}</p>
                  )}
                  <PostMeta post={post} />
                  <p className="m-0 max-w-prose-cs text-lead text-body">{post.excerpt}</p>
                  <TagList tags={post.tags} />
                  <ShareLinks title={post.title} />
                </header>
              </Reveal>

              <Reveal>
                <div className="rounded-card glass p-card-pad">
                  <BlogBody blocks={post.body} />
                </div>
              </Reveal>

              {series.length > 1 && (
                <Reveal>
                  <nav aria-labelledby="series-heading" className="rounded-card glass p-card-pad">
                    <p className="font-mono-label text-mono-label uppercase text-muted m-0">Series</p>
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
                                {part.title} <span className="font-normal text-muted">(you are here)</span>
                              </span>
                            ) : (
                              <Link
                                href={`/blog/${part.slug}`}
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
                  <ShareLinks title={post.title} />
                </div>
              </Reveal>
            </article>

            {related.length > 0 && (
              <Reveal>
                <section id="other" aria-labelledby="other-heading">
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">Keep reading</p>
                  <h2 id="other-heading" className="mt-4 m-0 text-section-h2 text-ink">
                    More from the blog
                  </h2>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-grid-gap items-stretch">
                    {related.map((other) => (
                      <PostCard key={other.slug} post={other} headingLevel="h3" />
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
