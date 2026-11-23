// Shared case-study content shape. A new case study is a new file in this
// folder that satisfies `CaseStudy`, plus one line added to `registry.ts` —
// a content task, not a layout task.
//
// Only the Summary fields are required. A case study with nothing more than
// that renders the minimal /usecases/[slug] template (hero + "other case
// studies") instead of 404ing — handy for a project still in progress. All
// four current case studies have full content.

import type { CaseStudySlug } from "./slugs";

export type { CaseStudySlug };

/** The subset of a case study's content used by homepage/summary cards. */
export type CaseStudySummary = {
  slug: CaseStudySlug;
  /** Full project title, used as the detail page's <h1>. */
  title: string;
  /** Browser tab title, when `title` doesn't read well before
   * "| By Berit Alasmäki". Defaults to `title`. */
  tabTitle?: string;
  /** Mono eyebrow label, e.g. "INDUSTRIAL DATA TOOLS · 2020–2023". */
  label: string;
  /**
   * How many projects the engagement covered, as text so it can say "5+".
   * The homepage card appends it to the label: "… · 2 PROJECTS" ("1 PROJECT"
   * when exactly "1").
   */
  projectCount: string;
  /** Homepage card headline. Use "\n" for an intentional line break. */
  headline: string;
  /** Homepage card body copy. */
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  ctaLabel: string;
  /**
   * Body copy for this study's card in *other* case studies' "Other case
   * studies" cross-link section — deliberately separate copy from the
   * homepage card `description` (shorter, written for that context).
   */
  otherCaseStudyDescription: string;
  /**
   * Short pill label overlaid on the thumbnail's top-left corner: the
   * industry the project was for, in one to three words (e.g. "Higher
   * education"). Every case study carries one. Not the same as
   * `categoryTag`, which names the kind of product on the detail page.
   */
  industry: string;
  /**
   * When set, the thumbnail area renders this text in a dashed placeholder
   * box instead of the `thumbnail` image — for a project still in progress
   * with no screenshot to show yet. `thumbnail`/`thumbnailAlt` are unused
   * (but still required) while this is set.
   */
  placeholderLabel?: string;
  /** Optional external link to a live/deployed version of the project. */
  liveUrl?: string;
  /**
   * Body copy for the detail page's hero, when it should differ from the
   * homepage card's `description` — one paragraph per entry. A card has room
   * for one tight paragraph; the page it links to can afford two and a line
   * that sets up what follows. Falls back to `description` when unset, so the
   * other studies are unaffected.
   */
  heroIntro?: string[];
};

export type ImpactCard = {
  number: string;
  title: string;
  body: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic pixel dimensions, for next/image's layout-shift-free sizing. */
  width: number;
  height: number;
};

export type ChallengeSubsection = {
  number: string;
  title: string;
  body: string;
};

/**
 * One numbered item in a scannable findings list: a bold lead-in claim plus
 * the explanation behind it. Lighter than `ChallengeSubsection`, which gets a
 * `card-h3` heading and its own rule — these are meant to be read down
 * quickly as a set, not treated as sub-sections.
 */
export type Finding = {
  title: string;
  body: string;
  /** Optional labelled facts, each value shown as a tag, shown between the title and the body, e.g. skill and artefact names. */
  meta?: { label: string; values: string[] }[];
};

/**
 * A case-study section written entirely as content: prose, an optional
 * numbered `Finding` list, then closing prose — the same body shape as
 * "How it started". Rendered as a collapsed accordion after the fixed
 * sections, so a study can keep going past the standard outline without the
 * route growing a branch per section.
 */
export type ProseSection = {
  /** Anchor id; also what the TOC dispatches to open the accordion. */
  id: string;
  /** Mono eyebrow above the heading. Must say something the heading doesn't. */
  label: string;
  heading: string;
  /** Shorter stand-in for `heading` in the table of contents. The sidebar is
   * 280px wide, so a heading with a subtitle after a colon needs a stand-in
   * that fits on one or two lines. Falls back to `heading`. */
  navLabel?: string;
  /** Opening paragraphs, in order. */
  paragraphs: string[];
  findings?: Finding[];
  /** Paragraphs after `findings`. */
  closing?: string[];
};

/** A "sneak peek" skill/contribution pill — short label plus a one-line
 * elaboration (used as the pill's `title` tooltip, not shown inline). */
export type SkillTag = {
  label: string;
  description: string;
};

/**
 * The four things a recruiter should find in the first few seconds, shown as
 * an "At a glance" block right under the hero. Written from the case study's
 * own facts: what was wrong, what the designer's part was, what they decided,
 * and what came of it. No invented numbers: where there is no metric, say what
 * changed.
 */
export type CaseGlance = {
  /** The problem, in one or two sentences, before any detail. */
  problem: string;
  /** What *I* did: role, scope and period, in the first person. */
  role: string;
  /** The decisions made, one short line each (three to four). `**Lead-in:**`
   * markup bolds a lead-in. */
  decisions: string[];
  /** Replaces the block's "Decisions" label, e.g. "Solution and delivery". */
  decisionsLabel?: string;
  /** Replaces the block's "Outcome" label, e.g. "Outcome and impact". */
  outcomeLabel?: string;
  /** The outcome, with evidence where there is any. */
  outcome: string;
};

/**
 * The story layout: a case study told as a narrative, problem → process →
 * what shipped → impact, with screenshots placed next to the step they are
 * evidence for instead of in one gallery block. A study with `story` set is
 * rendered by this layout; one without it keeps the older section layout,
 * so the studies can move over one at a time.
 *
 * Every section heading is the study's own words ("Seven municipalities, two
 * school worlds"), not a generic label; the generic label is the eyebrow
 * above it and comes from the dictionary.
 */
export type CaseStory = {
  /** The key facts shown in a card under the hero, two columns. Keep each
   * value to short lines (an array = one line each) so the card scans.
   * `wide` puts a fact across the card's full width as a bulleted list
   * (e.g. "What I did"). */
  facts: { label: string; value: string | string[]; wide?: boolean }[];
  /** Hero image: the one screen that sums the product up. */
  heroImage: GalleryImage;
  /** Two or three sentences, outcome first. `**bold**` allowed. */
  tldr: string[];
  background: StorySection;
  problem: StorySection & {
    /** The problem in one sentence, shown large. */
    statement: string;
    /** What made it hard, one short line each. `**Lead-in:**` allowed. */
    constraints: string[];
  };
  process: {
    heading: string;
    intro?: string[];
    /** Numbered decisions, in the order they were made. */
    steps: StoryStep[];
  };
  shipped: StorySection;
  impact: {
    heading: string;
    /** Where the evidence comes from, said plainly. */
    intro: string[];
    /** Large callouts. Only real, sourced figures: a scope fact is fine, an invented metric is not. */
    highlights: { value: string; label: string }[];
  };
  reflections: {
    heading: string;
    items: { title: string; body: string }[];
  };
};

/** One row of screenshots, or several rows (each row lines up at equal height). */
export type StoryFigureSet = GalleryImage[] | GalleryImage[][];

export type StorySection = {
  /** Replaces the dictionary eyebrow, e.g. "Concept" for a section showing
   * explored rather than shipped work. Never present a concept as shipped. */
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  /** Optional labelled list after the paragraphs. `**Lead-in:**` allowed. */
  listLabel?: string;
  list?: string[];
  /** Optional closing paragraphs after the list, each may start with `**Lead-in:**`. */
  closing?: string[];
  figures?: StoryFigureSet;
};

export type StoryStep = {
  title: string;
  /** `**bold**` allowed. */
  paragraphs: string[];
  /** A simple left-to-right flow of steps, drawn as a diagram, for a step
   * that has no photos or screenshots to show. */
  flow?: string[];
  /** Accessible name for the flow diagram. */
  flowLabel?: string;
  figures?: StoryFigureSet;
};

/** Everything beyond the summary — present only on fully-written case studies. */
export type CaseStudyFullContent = {
  /**
   * The "Starting Point" section's copy — one paragraph per entry, matching
   * `heroIntro` and `howItStarted`. Displayed in its own labeled section
   * below the sneak-peek hero, not inline in the hero itself; the field name
   * stays `intro` since `hasFullContent` type-guards on its presence.
   */
  intro: string[];
  /** "At a glance": problem, role, decisions, outcome. */
  glance: CaseGlance;
  roleLabel: string;
  focusLabel: string;
  /** Short category pill in the sneak-peek hero, e.g. "AI Search Platform". */
  categoryTag: string;
  /** Exactly the pills shown in the sneak-peek hero — not the same list as
   * `methods` (research methodology) below; these are skill/contribution
   * areas specific to this project. */
  skillTags: SkillTag[];
  gallery: GalleryImage[];
  /**
   * `src` values of 2-3 `gallery` images to feature in the sneak-peek
   * hero's stacked "peek" card — the strongest, most-legible-at-a-glance
   * shots, not necessarily `gallery`'s first entries.
   */
  sneakPeekImages: string[];
  impactIntro: string;
  impactCards: ImpactCard[];
  /** One or more paragraphs, in order. */
  howItStarted: string[];
  /**
   * Optional numbered list rendered *between* `howItStarted` and
   * `howItStartedClosing`, for a section that builds to a set of findings
   * rather than running as continuous prose. Split into three fields rather
   * than one mixed array so the ordering is stated by the shape itself and
   * the four existing case studies, which are pure prose, need no changes.
   *
   * Optional *inside* `CaseStudyFullContent`, not just via the `Partial<>`
   * on `CaseStudy`: `hasFullContent` asserts a study satisfies this whole
   * type, so anything required here would be a claim the four prose case
   * studies don't actually meet.
   */
  howItStartedFindings?: Finding[];
  /** Paragraphs closing out "How it started", after `howItStartedFindings`. */
  howItStartedClosing?: string[];
  /**
   * Extra sections rendered as collapsed accordions after "How it started",
   * in array order. Optional inside `CaseStudyFullContent` for the same
   * reason as the two fields above.
   */
  additionalSections?: ProseSection[];
  challenges: ChallengeSubsection[];
  /** One or more paragraphs, in order. */
  whatIWouldDoDifferently: string[];
  methods: string[];
  /** When set, the page uses the story layout. See `CaseStory`. */
  story?: CaseStory;
};

export type CaseStudy = CaseStudySummary & Partial<CaseStudyFullContent>;

/** True when a case study has its full detail content written. */
export function hasFullContent(
  study: CaseStudy
): study is CaseStudy & CaseStudyFullContent {
  return study.intro !== undefined && study.gallery !== undefined;
}
