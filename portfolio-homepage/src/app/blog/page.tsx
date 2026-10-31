import type { Metadata } from "next";
import { Suspense } from "react";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import PostList, { PostGrid } from "@/components/blog/PostList";
import { getAllTags, posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | By Berit Alasmäki",
  description:
    "Writing on UX, product design and bringing AI into organizations — notes from ten years of design work.",
};

export default function BlogIndexPage() {
  const tags = getAllTags();
  return (
    <>
      <Header />
      <main className="px-gutter pt-6 pb-24">
        <div className="flex flex-col gap-[clamp(48px,5vw,64px)]">
          <Reveal>
            <section aria-labelledby="blog-title" className="border-t border-rule pt-[clamp(32px,4vw,48px)]">
              <p className="font-mono-label text-mono-label uppercase text-muted m-0">Blog</p>
              <h1 id="blog-title" className="mt-4 m-0 text-hero max-w-[18em]">
                Notes on design & <span className="text-accent-hero">change</span>
              </h1>
              <p className="mt-6 mb-0 max-w-prose-cs text-lead text-body">
                Writing on UX, product design and bringing AI into organizations, drawn from the
                projects I&apos;ve worked on.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Posts">
              {/* `useSearchParams` (the topic filter) opts out of static
                  rendering below the nearest Suspense boundary; the fallback
                  is the unfiltered list, so the page never renders empty. */}
              <Suspense fallback={<PostGrid posts={posts} />}>
                <PostList posts={posts} tags={tags} />
              </Suspense>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

