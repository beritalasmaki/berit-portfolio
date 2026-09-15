// Shared case-study content shape. A new case study is a new file in this
// folder that satisfies `CaseStudy`, plus one line added to `registry.ts` —
// a content task, not a layout task.
//
// Only the Summary fields are required. A case study with nothing more than
// that renders the minimal /usecases/[slug] template (hero + "other case
// studies") instead of 404ing — see design-system.ts (in progress, no full
// content yet) vs. any of the other four for the minimal vs. full shape in
// practice.

export type CaseStudySlug =
  | "industrial-tool"
  | "university-ai-tool"
  | "education-platform"
  | "environmental-data-tool"
  | "design-system";

/** The subset of a case study's content used by homepage/summary cards. */
export type CaseStudySummary = {
  slug: CaseStudySlug;
  /** Full project title, used as the detail page's <h1>. */
  title: string;
  /** Mono eyebrow label, e.g. "INDUSTRIAL DATA TOOLS · 2020–2023". */
  label: string;
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
   * Short pill label overlaid on the thumbnail's top-left corner, e.g.
   * "Personal project". Omit for client work.
   */
  tag?: string;
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

/** Everything beyond the summary — present only on fully-written case studies. */
export type CaseStudyFullContent = {
  /**
   * Now displayed in its own labeled "Starting Point" section (below the
   * sneak-peek hero), not inline in the hero itself — the field name stays
   * `intro` since `hasFullContent` type-guards on its presence.
   */
  intro: string;
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
};

export type CaseStudy = CaseStudySummary & Partial<CaseStudyFullContent>;

/** True when a case study has its full detail content written. */
export function hasFullContent(
  study: CaseStudy
): study is CaseStudy & CaseStudyFullContent {
  return study.intro !== undefined && study.gallery !== undefined;
}
