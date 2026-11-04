import type { Locale } from "@/i18n/config";
import { aiAdoptionStrategy } from "./ai-adoption-starts-with-strategy";
import { aiPilotToEverydayPractice } from "./from-ai-pilot-to-everyday-practice";
import { designEngineering } from "./design-engineering";
import { designEngineeringFi } from "./fi/design-engineering";
import { aiAdoptionStrategyFi } from "./fi/ai-adoption-starts-with-strategy";
import { aiPilotToEverydayPracticeFi } from "./fi/from-ai-pilot-to-everyday-practice";
import type { BlogBlock, BlogPost } from "./types";

export type { BlogBlock, BlogPost, FlowExample, FlowNode, FlowRow, LadderExample, OkrExample, StepsExample } from "./types";

const sortNewestFirst = (registry: BlogPost[]): BlogPost[] =>
  [...registry].sort((a, b) => b.date.localeCompare(a.date) || (b.series?.part ?? 0) - (a.series?.part ?? 0));

// Each language has its own list: a translation is a post of its own, with its
// own slug, title and excerpt (written for that language's readers, not
// machine-mirrored). Finnish posts name their English original in
// `translationOf`. To publish a post in one language only, add it to just
// that language's list.
const registries: Record<Locale, BlogPost[]> = {
  en: sortNewestFirst([aiAdoptionStrategy, aiPilotToEverydayPractice, designEngineering]),
  fi: sortNewestFirst([aiAdoptionStrategyFi, aiPilotToEverydayPracticeFi, designEngineeringFi]),
};

export function getPosts(locale: Locale): BlogPost[] {
  return registries[locale];
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return registries[locale].find((post) => post.slug === slug);
}

/**
 * The same post in the other language, if it has been translated. A Finnish
 * post points at its English original through `translationOf`; for an English
 * post the Finnish version is whichever Finnish post names it.
 */
export function getTranslation(locale: Locale, post: BlogPost): BlogPost | undefined {
  if (locale === "fi") return registries.en.find((other) => other.slug === post.translationOf);
  return registries.fi.find((other) => other.translationOf === post.slug);
}

export function getSeriesParts(locale: Locale, post: BlogPost): BlogPost[] {
  if (!post.series) return [];
  const name = post.series.name;
  return registries[locale]
    .filter((other) => other.series?.name === name)
    .sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0));
}

export function getAllTags(locale: Locale): string[] {
  const counts = new Map<string, number>();
  for (const post of registries[locale]) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

export function getRelatedPosts(locale: Locale, slug: string, limit = 3): BlogPost[] {
  const current = getPost(locale, slug);
  const tags = new Set(current?.tags ?? []);
  return registries[locale]
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
    case "steps":
      return [
        block.title,
        ...block.steps.map((step) => `${step.heading} ${step.text}`),
        block.tip?.text ?? "",
      ].join(" ");
    case "flow":
      return [
        block.title,
        ...block.rows.flatMap((row) => [
          row.heading,
          row.text,
          ...row.nodes.map((node) => `${node.heading} ${node.text}`),
        ]),
        block.quote?.text ?? "",
      ].join(" ");
    case "ladder":
      return [block.title, ...block.rungs.map((rung) => `${rung.name} ${rung.text}`)].join(" ");
  }
}

/** Words per minute used for reading-time estimates. Finnish words are long
 * (compounds, inflection), so a Finnish reader gets through fewer of them. */
export const wordsPerMinute: Record<Locale, number> = { en: 200, fi: 150 };

export function readingMinutes(post: BlogPost, locale: Locale): number {
  const text = [post.excerpt, ...post.body.map(blockText)].join(" ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / wordsPerMinute[locale]));
}

const dateLocale: Record<Locale, string> = { en: "en-GB", fi: "fi-FI" };

export function formatPostDate(iso: string, locale: Locale): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(dateLocale[locale], {
    day: "numeric",
    month: locale === "fi" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
