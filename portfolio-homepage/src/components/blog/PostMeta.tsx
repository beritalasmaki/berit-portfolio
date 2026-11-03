import { formatPostDate, readingMinutes, type BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { fmt } from "@/i18n/format";

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M10 5.5 V10 L13 12" />
      </g>
    </svg>
  );
}

/** "31 Oct 2026 · ~6 min read", the date a real <time>. */
export default function PostMeta({
  post,
  locale,
  copy,
  className = "",
}: {
  post: BlogPost;
  locale: Locale;
  copy: Dictionary["blog"];
  className?: string;
}) {
  return (
    <p className={`m-0 flex flex-wrap items-center gap-x-4 gap-y-2 text-body-sm text-muted ${className}`}>
      <time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-2">
        <ClockIcon />
        {fmt(copy.readingTime, { min: readingMinutes(post, locale) })}
      </span>
      {post.updated && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            {copy.updated} <time dateTime={post.updated}>{formatPostDate(post.updated, locale)}</time>
          </span>
        </>
      )}
    </p>
  );
}
