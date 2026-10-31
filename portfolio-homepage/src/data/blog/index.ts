import { aiAdoptionStrategy } from "./ai-adoption-starts-with-strategy";
import { aiPilotToEverydayPractice } from "./from-ai-pilot-to-everyday-practice";
import type { BlogBlock, BlogPost } from "./types";

export type { BlogBlock, BlogPost, OkrExample } from "./types";

// Every post, in any order — `posts` below sorts them newest first. Add a
// new post by importing its file here.
const registry: BlogPost[] = [aiAdoptionStrategy, aiPilotToEverydayPractice];

/** All posts, newest first (a series' later part first on the same day):
 * the display order everywhere. */
export const posts: BlogPost[] = [...registry].sort(
  (a, b) => b.date.localeCompare(a.date) || (b.series?.part ?? 0) - (a.series?.part ?? 0)
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Every part of `post`'s series in part order (empty when it isn't in one). */
export function getSeriesParts(post: BlogPost): BlogPost[] {
  if (!post.series) return [];
  const name = post.series.name;
  return posts
    .filter((other) => other.series?.name === name)
    .sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0));
}

/** Every tag in use, most-used first, then alphabetically. */
export function getAllTags(): string[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

/** Up to `limit` other posts: those sharing the most tags first, then the
 * newest, so "Keep reading" offers something related when there is one. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  const tags = new Set(current?.tags ?? []);
  return posts
    .filter((post) => post.slug !== slug)
    .map((post, order) => ({ post, order, shared: post.tags.filter((tag) => tags.has(tag)).length }))
    .sort((a, b) => b.shared - a.shared || a.order - b.order)
    .slice(0, limit)
    .map(({ post }) => post);
}

function blockText(block: BlogBlock): string {
  switch (block.type) {
    case "paragraph":
    case "subheading":
    case "heading":
    case "quote":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "findings":
      return block.items.map((item) => `${item.title} ${item.body}`).join(" ");
    case "image":
      return block.caption ?? "";
    case "okr":
      return [
        block.objective,
        ...block.keyResults.map((kr) => `${kr.value} ${kr.label}`),
        ...block.initiatives,
      ].join(" ");
  }
}

/** Reading time in whole minutes at ~200 words a minute, from the real copy
 * (so it can't drift as the text changes). Never less than 1. */
export function readingMinutes(post: BlogPost): number {
  const text = [post.excerpt, ...post.body.map(blockText)].join(" ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 200));
}

/** "12 Oct 2026" — fixed locale and UTC, so the server and browser agree. */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
