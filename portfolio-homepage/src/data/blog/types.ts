// Shared blog post content shape. A new post is a new file in this folder
// that satisfies `BlogPost`, plus one line added to `index.ts` — a content
// task, not a layout task (same pattern as `data/case-studies/`).
// Writing and adding a post, step by step: BLOG-GUIDE.md in the project root.

import type { Finding } from "@/data/case-studies";

/**
 * One piece of a post's body, rendered in array order. Kept to a small set
 * of block types so every post reads with the same typography as the case
 * studies, and so the table of contents can be built from the `heading`
 * blocks alone.
 *
 * Text fields (paragraphs, list items, quotes, finding bodies) accept a tiny
 * inline syntax: `**bold**`, `*italic*` and `[label](href)` — see
 * `components/blog/InlineText.tsx`.
 */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  /** A smaller h3 inside a `heading` section; not listed in the TOC. */
  | { type: "subheading"; text: string }
  | {
      type: "heading";
      /** Anchor id, unique within the post; the TOC links to it. */
      id: string;
      text: string;
      /** Shorter stand-in for `text` in the 280px-wide TOC. Falls back to `text`. */
      navLabel?: string;
    }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      /** Intrinsic pixel dimensions, for next/image's layout-shift-free sizing. */
      width: number;
      height: number;
    }
  /** Numbered lead-in + explanation list, the same as in the case studies. */
  | { type: "findings"; items: Finding[] }
  /** A worked OKR example drawn as a diagram in the site's own styles
   * (`components/blog/OkrDiagram.tsx`) rather than a picture of one, so
   * its text reflows on a phone and reads out to a screen reader. */
  | ({ type: "okr" } & OkrExample)
  /** A login view built in four stages, drawn as four mini mock-ups. */
  | ({ type: "steps" } & StepsExample)
  /** Rows of "pill → box → box → pill" flows, one highlighted. */
  | ({ type: "flow" } & FlowExample)
  /** Three rungs of rising height; the last is the goal. */
  | ({ type: "ladder" } & LadderExample);

export type StepsExample = {
  title: string;
  /** Labels used inside the four mock-ups. */
  mock: { email: string; password: string; button: string; typed: string; wrongEmail: string; error: string };
  /** Always four, in order: layout, states, validation, phone. */
  steps: { name: string; heading: string; text: string }[];
  tip?: { label: string; text: string };
};

export type FlowNode = { eyebrow: string; heading: string; text: string; highlight?: boolean };
export type FlowRow = {
  eyebrow: string;
  heading: string;
  text: string;
  start: string;
  nodes: FlowNode[];
  end: string;
};
export type FlowExample = {
  title: string;
  rows: FlowRow[];
  quote?: { text: string; cite: string };
};

export type LadderExample = {
  title: string;
  eyebrow?: string;
  /** Lowest to highest. */
  rungs: { name: string; text: string; badge?: string }[];
  source?: string;
};

export type OkrExample = {
  title: string;
  subtitle?: string;
  objective: string;
  /** `value` is the big figure ("70%", "3.1 → 3.8"); `label` what it counts. */
  keyResults: { value: string; label: string }[];
  initiatives: string[];
  /** One closing line under the diagram, e.g. how often it's reviewed. */
  note?: string;
};

export type BlogPost = {
  /** URL segment: /blog/<slug> in English, /fi/blogi/<slug> in Finnish.
   * Lowercase, hyphenated, ASCII; a Finnish post has a Finnish slug. */
  slug: string;
  /** For a translation: the `slug` of the English post it translates. Links
   * the two language versions for the language switcher and `hreflang`. The
   * English originals leave it unset. */
  translationOf?: string;
  /** The post page's <h1> and the card headline. */
  title: string;
  /** Browser tab title, when `title` doesn't read well before
   * "| By Berit Alasmäki". Defaults to `title`. */
  tabTitle?: string;
  /** One or two sentences: card copy, the hero's lead and the meta
   * description. */
  excerpt: string;
  /** Publication date, ISO `YYYY-MM-DD`. Posts are listed newest first. */
  date: string;
  /** Last meaningful edit, ISO `YYYY-MM-DD`, shown as "Updated …" when set. */
  updated?: string;
  /** Topic tags, in display order, e.g. ["Design systems", "Research"].
   * The blog index's filter is built from every post's tags. */
  tags: string[];
  /**
   * When the post is one part of a series: every part names the same
   * `name`. The hero shows "Part 1 of 2", and the post ends with links to
   * the series' other parts.
   */
  series?: { name: string; part: number; subtitle?: string };
  /** Optional lead image, shown under the hero. */
  cover?: { src: string; alt: string; width: number; height: number };
  body: BlogBlock[];
};
