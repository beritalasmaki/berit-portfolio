"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { fmt } from "@/i18n/format";
import PostCard from "./PostCard";

/**
 * The blog index: a row of topic filters and the matching posts. The chosen
 * topic lives in the URL (`?tag=`), so a filtered list can be shared and the
 * back button undoes a filter.
 */
export default function PostList({
  posts,
  tags,
  locale,
  copy,
}: {
  posts: BlogPost[];
  tags: string[];
  locale: Locale;
  copy: Dictionary["blog"];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const requested = params.get("tag");
  const active = requested && tags.includes(requested) ? requested : null;
  const shown = active ? posts.filter((post) => post.tags.includes(active)) : posts;

  function choose(tag: string | null) {
    router.replace(tag ? `${pathname}?tag=${encodeURIComponent(tag)}` : pathname, { scroll: false });
  }

  const pill = (pressed: boolean) =>
    `inline-flex items-center font-mono-label text-mono-label-em font-medium uppercase rounded-pill h-11 px-4 whitespace-nowrap transition-colors duration-150 ease-out ${
      pressed ? "glass-button-ink text-white" : "glass-button text-body hover:text-ink focus-visible:text-ink"
    }`;

  return (
    <div className="flex flex-col gap-8">
      {tags.length > 0 && (
        <div role="group" aria-label={copy.filterLabel} className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={active === null} onClick={() => choose(null)} data-sound="pop" className={pill(active === null)}>
            {copy.allPosts}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={active === tag}
              onClick={() => choose(active === tag ? null : tag)}
              data-sound="pop"
              className={pill(active === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <p role="status" aria-live="polite" className="sr-only">
        {active
          ? fmt(copy.countTopic, { count: shown.length, topic: active })
          : fmt(copy.countAll, { count: shown.length })}
      </p>

      <PostGrid posts={shown} locale={locale} copy={copy} />
    </div>
  );
}

/** The cards alone, without the filter — also the server-rendered stand-in
 * while the filter (which reads the URL) loads. */
export function PostGrid({
  posts,
  locale,
  copy,
}: {
  posts: BlogPost[];
  locale: Locale;
  copy: Dictionary["blog"];
}) {
  return posts.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gap items-stretch">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} locale={locale} copy={copy} />
      ))}
    </div>
  ) : (
    <p className="m-0 text-body-lg text-body">{copy.noPosts}</p>
  );
}
