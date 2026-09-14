"use client";

import { useId, useRef, useState, type ReactNode } from "react";

// Imported from Claude Design ("My Process" component, Process Timeline.dc.html)
// and reimplemented as a real React component — the .dc.html source uses its
// own template DSL (sc-for/sc-if/{{ }} bindings, a DCLogic base class) that
// only runs inside the Claude Design canvas, not in this app. Content, data,
// layout and interaction logic below are a straight port; presentation was
// reconciled against this site's actual design tokens (tailwind.config.ts)
// rather than the export's inline hex/px values — see DESIGN-SYSTEM.md.

type CategoryKey = "research" | "design" | "code" | "testing" | "systems" | "ship";

type Category = {
  label: string;
  dot: string;
  fill: string;
  border: string;
  text: string;
};

// Semantic category palette for the timeline blocks/legend. Not part of the
// site's brand palette (ink/accent/panel/rule) — this is content-intrinsic
// categorical color coding (6 kinds of work), the same way a chart's series
// colors are local to that chart rather than pulled from brand tokens. Kept
// exactly as designed in Claude Design.
const CATEGORIES: Record<CategoryKey, Category> = {
  research: { label: "Research", dot: "#6b6660", fill: "#FAF8F3", border: "#B8B1A4", text: "#3f3a34" },
  design: { label: "Design", dot: "#1D4FBF", fill: "#D3E2FC", border: "#8FB4F3", text: "#12387F" },
  code: { label: "Code", dot: "#116330", fill: "#D4EEDD", border: "#8ECFA7", text: "#0D4E26" },
  testing: { label: "Testing", dot: "#A8710A", fill: "#FBEDBE", border: "#E4C86A", text: "#6B4606" },
  systems: { label: "Systems", dot: "#7E22CE", fill: "#EEDCFB", border: "#C99AF0", text: "#5B1799" },
  ship: { label: "Ship", dot: "#0B5A54", fill: "#D2EAE6", border: "#8CC9C1", text: "#084741" },
};

type StageKey =
  | "research"
  | "discovery"
  | "flows"
  | "wireframes"
  | "ui"
  | "testing"
  | "iterate"
  | "handoff"
  | "ship"
  | "aiAssisted"
  | "buildInCode"
  | "tokens";

type StageMeta = {
  name: string;
  cat: CategoryKey;
  when: string;
  skip: string;
};

const STAGES: Record<StageKey, StageMeta> = {
  research: {
    name: "Research",
    cat: "research",
    when: "When I'm working in a new domain, or the problem is tricky. I talk to real users, look around, and find out what actually needs solving.",
    skip: "The problem space is already well understood, or we need to move fast and learn by shipping.",
  },
  discovery: {
    name: "Discovery",
    cat: "research",
    when: "I talk to the people involved (stakeholders), look at similar products (competitive analysis), and learn what limits we're working with (business constraints).",
    skip: "It's a small personal project, or the limits are already clear.",
  },
  flows: {
    name: "Flows & IA",
    cat: "design",
    when: "For big products with many paths. I draw out the whole journey (user flows, information architecture) before I design any screens.",
    skip: "It's a simple tool where there's really only one way through.",
  },
  wireframes: {
    name: "Wireframes",
    cat: "design",
    when: "When I need to test if the structure makes sense before I make it look good.",
    skip: "I already know the direction, or it's faster to just build it.",
  },
  ui: {
    name: "UI Design",
    cat: "design",
    when: "Making it look and feel right (components, interactions, visual polish).",
    skip: "We're doing quick prototypes where we just want to learn something fast, not make it pretty.",
  },
  testing: {
    name: "User Testing",
    cat: "testing",
    when: "Before big decisions or launches. I watch real users use it and listen to what they say.",
    skip: "It's a small change where we can just check the numbers afterward.",
  },
  iterate: {
    name: "Iterate",
    cat: "testing",
    when: "After every round of feedback. The first version is never the final one.",
    skip: "Never. This step always happens.",
  },
  handoff: {
    name: "Dev Handoff",
    cat: "ship",
    when: "Writing clear notes (specs and documentation) and working closely with developers so nothing gets lost.",
    skip: "I'm building it myself, or working side by side with a developer already.",
  },
  ship: {
    name: "Ship",
    cat: "ship",
    when: "Put it in front of real users. See what happens. Learn from it.",
    skip: "Never. Shipping is how you find out if it actually works.",
  },
  aiAssisted: {
    name: "AI-assisted",
    cat: "code",
    when: "Using AI to sketch ideas, write code, or try out options faster.",
    skip: "The work needs careful thinking and real craft, not speed.",
  },
  buildInCode: {
    name: "Build in Code",
    cat: "code",
    when: "When building it is the fastest way to know if it works, especially for things users need to feel and use.",
    skip: "We still don't know what we're building yet.",
  },
  tokens: {
    name: "Tokens & Systems",
    cat: "systems",
    when: "Setting up building blocks and rules (components and design tokens) that the whole team can reuse, plus the documentation to go with it.",
    skip: "It's a one-off project that won't need to grow or be reused.",
  },
};

type TabStage = { key: StageKey; start: number; len: number; row: number };
type Tab = { id: string; label: string; icon: ReactNode; weeks: number; durationLabel: string; stages: TabStage[] };

// Small line icons, one per project type — decorative, matching the accent-
// stroke SVG convention already used elsewhere on the site (Hero's flourish,
// the mobile TOC chevron).
function ZeroToOneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17.5 V 9" />
        <path d="M10 9.5 C 10 6 7.5 3.5 3.5 3.5 C 3.5 7.5 6 10 10 10" />
        <path d="M10 11 C 10 8 12.2 5.8 16 5.8 C 16 9.4 13.6 11.6 10 11.6" />
      </g>
    </svg>
  );
}

function PrototypeIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="11.5" r="6" />
        <path d="M10 8.5 V 11.5 L 12.2 13" />
        <path d="M8 2.5 H 12" />
        <path d="M10 2.5 V 5.5" />
      </g>
    </svg>
  );
}

function DesignSystemIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2.5 L 17.5 6.2 L 10 9.9 L 2.5 6.2 Z" />
        <path d="M2.5 10.2 L 10 13.9 L 17.5 10.2" />
        <path d="M2.5 14 L 10 17.7 L 17.5 14" />
      </g>
    </svg>
  );
}

function RedesignIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 8.5 A 6.5 6.5 0 1 0 14.2 14.8" />
        <path d="M16.8 3.8 V 8.6 H 12" />
      </g>
    </svg>
  );
}

const TABS: Tab[] = [
  {
    id: "zeroToOne",
    label: "0→1 Product",
    icon: <ZeroToOneIcon />,
    weeks: 12,
    durationLabel: "~10 weeks",
    stages: [
      { key: "research", start: 0, len: 2, row: 0 },
      { key: "discovery", start: 2, len: 1, row: 0 },
      { key: "flows", start: 2, len: 1, row: 1 },
      { key: "wireframes", start: 3, len: 1.5, row: 1 },
      { key: "ui", start: 4.5, len: 3, row: 2 },
      { key: "testing", start: 5.5, len: 1, row: 3 },
      { key: "iterate", start: 6.5, len: 1.5, row: 3 },
      { key: "handoff", start: 8, len: 1, row: 4 },
      { key: "ship", start: 9, len: 0.5, row: 4 },
    ],
  },
  {
    id: "prototype",
    label: "Rapid Prototype",
    icon: <PrototypeIcon />,
    weeks: 4,
    durationLabel: "~2 weeks",
    stages: [
      { key: "discovery", start: 0, len: 1, row: 0 },
      { key: "aiAssisted", start: 1, len: 0.5, row: 1 },
      { key: "buildInCode", start: 1.5, len: 2, row: 1 },
      { key: "testing", start: 2, len: 1, row: 2 },
      { key: "iterate", start: 3, len: 1, row: 2 },
      { key: "ship", start: 3.4, len: 0.5, row: 3 },
    ],
  },
  {
    id: "designSystem",
    label: "Design System",
    icon: <DesignSystemIcon />,
    weeks: 8,
    durationLabel: "~6 weeks",
    stages: [
      { key: "discovery", start: 0, len: 1, row: 0 },
      { key: "research", start: 1, len: 2, row: 0 },
      { key: "tokens", start: 2.4, len: 2, row: 1 },
      { key: "ui", start: 3.6, len: 3, row: 2 },
      { key: "testing", start: 4.9, len: 1, row: 3 },
      { key: "iterate", start: 5.9, len: 1.5, row: 3 },
      { key: "ship", start: 7.4, len: 0.5, row: 4 },
    ],
  },
  {
    id: "redesign",
    label: "Redesign",
    icon: <RedesignIcon />,
    weeks: 10,
    durationLabel: "~8 weeks",
    stages: [
      { key: "research", start: 0, len: 2, row: 0 },
      { key: "flows", start: 1.5, len: 1, row: 1 },
      { key: "wireframes", start: 2.5, len: 1.5, row: 1 },
      { key: "ui", start: 3.5, len: 3, row: 2 },
      { key: "testing", start: 5, len: 1, row: 3 },
      { key: "iterate", start: 6, len: 1.5, row: 3 },
      { key: "handoff", start: 7.5, len: 1, row: 4 },
      { key: "ship", start: 8.5, len: 0.5, row: 4 },
    ],
  },
];

type PositionedStage = TabStage & { leftPct: number; widthPct: number; marginLeftPct: number };

/** Packs each row's blocks left-to-right: every block's gap from the previous
 * block's right edge becomes its own left margin, so two blocks can never
 * overlap even if their nominal start/len percentages are close. Ported
 * as-is from the Claude Design source. */
function layoutRows(stages: TabStage[], totalWeeks: number): PositionedStage[][] {
  const byRow: PositionedStage[][] = [];
  stages.forEach((s) => {
    const leftPct = (s.start / totalWeeks) * 100;
    const widthPct = (s.len / totalWeeks) * 100;
    (byRow[s.row] ??= []).push({ ...s, leftPct, widthPct, marginLeftPct: 0 });
  });
  return byRow.filter(Boolean).map((blocks) => {
    const sorted = blocks.slice().sort((a, b) => a.leftPct - b.leftPct);
    let cursor = 0;
    for (const b of sorted) {
      b.marginLeftPct = Math.max(0, b.leftPct - cursor);
      cursor = b.leftPct + b.widthPct;
    }
    return sorted;
  });
}

export default function ProcessTimeline() {
  const [tabIndex, setTabIndex] = useState(0);
  const [stageKey, setStageKey] = useState<StageKey | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  function selectTab(i: number) {
    if (i === tabIndex) return;
    setTabIndex(i);
    setStageKey(null); // switching project types closes any open stage detail
  }

  function focusTab(i: number) {
    const next = (i + TABS.length) % TABS.length;
    selectTab(next);
    tabRefs.current[next]?.focus();
  }

  function onTabKeyDown(event: React.KeyboardEvent, i: number) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(i + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(i - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(TABS.length - 1);
        break;
    }
  }

  function selectStage(key: StageKey) {
    // Toggle: clicking the already-open stage closes the panel; clicking a
    // different stage while one is open just swaps the panel's content (no
    // intermediate "closed" render), so there's no flash between two stages.
    setStageKey((current) => (current === key ? null : key));
  }

  const tab = TABS[tabIndex];
  const totalWeeks = tab.weeks;
  const rows = layoutRows(tab.stages, totalWeeks);
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i);
  const detail = stageKey ? STAGES[stageKey] : null;

  return (
    <section id="process" aria-labelledby="process-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">05 / my process</p>
      <div className="flex items-end justify-between gap-grid-gap-lg flex-wrap mt-4">
        <h2 id="process-heading" className="m-0 text-section-h2 text-ink">
          Every project gets
          <br />
          the approach it needs.
        </h2>
        <p className="m-0 text-body-lg text-body max-w-[34em]">
          Sometimes that means weeks of research before anything gets drawn. Sometimes it means a
          prototype in someone&apos;s hands the same afternoon. Pick a project type to see how the shape
          changes.
        </p>
      </div>

      <p className="font-mono-label text-mono-label uppercase text-ink mt-10 mb-0">What kind of project?</p>

      <div
        role="tablist"
        aria-label="Project type"
        className="flex flex-wrap gap-grid-gap-lg border-b border-rule-strong mt-2"
      >
        {TABS.map((t, i) => {
          const selected = i === tabIndex;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(i)}
              onKeyDown={(event) => onTabKeyDown(event, i)}
              className={`group inline-flex items-center gap-2 text-nav whitespace-nowrap bg-transparent border-0 py-3 -mb-px border-b-[3px] transition-[color,border-color] duration-150 ease-out ${
                selected
                  ? "font-bold text-ink border-accent"
                  : "font-semibold text-muted border-transparent hover:text-ink hover:border-rule-strong focus-visible:text-ink focus-visible:border-rule-strong"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>

      {/* One joined surface, not two separate cards side by side — same
          "single block, no gap, overflow-hidden" treatment as the homepage
          tabs (MindTabs), just split into a wider timeline half and a
          narrower detail half instead of tablist+pane. The color change
          (panel -> white) plus a rule divider is what marks the seam,
          not a gap/shadow between two boxes. */}
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tabIndex}`}
        tabIndex={0}
        className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] mt-4 items-stretch border border-rule-strong rounded-card overflow-hidden"
      >
        <div className="bg-panel p-card-pad min-w-0">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="m-0 text-sub-h4 font-extrabold whitespace-nowrap">Typical timeline</h3>
            <span className="font-mono-label text-mono-label-em uppercase text-body bg-white border border-rule-strong rounded-pill py-2 px-4 whitespace-nowrap">
              {tab.durationLabel}
            </span>
          </div>

          {/* The week ruler + stage rows are laid out by percentage-of-total-
              weeks, so at narrow viewports a block's own content (e.g. "Dev
              Handoff") can need more room than its percentage allows —
              min-w-fit lets it win that fight rather than truncate/overlap,
              which pushes the row wider than the card. Rather than shrink
              text or let that overflow the page, this strip scrolls
              horizontally within the card (legend stays outside it, always
              visible) — the right call for linear time-ordered content that
              can't be reflowed into a narrower shape the way a card grid can. */}
          <div className="overflow-x-auto mt-6">
            <div className="min-w-[640px]">
              <div className="relative h-6 border-b border-rule-strong">
                {weeks.map((w) => (
                  <span
                    key={w}
                    className="absolute top-0 font-mono-label text-mono-label text-muted whitespace-nowrap"
                    style={{ left: `${(w / totalWeeks) * 100}%` }}
                  >
                    W{w + 1}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex items-stretch h-14 min-w-0">
                    {row.map((block) => {
                      const meta = STAGES[block.key];
                      const cat = CATEGORIES[meta.cat];
                      const active = stageKey === block.key;
                      return (
                        <button
                          key={block.key}
                          type="button"
                          aria-pressed={active}
                          onClick={() => selectStage(block.key)}
                          style={{
                            flex: `0 1 ${block.widthPct.toFixed(3)}%`,
                            marginLeft: `${block.marginLeftPct.toFixed(3)}%`,
                            background: cat.fill,
                            borderColor: active ? "#FC890C" : cat.border,
                            color: cat.text,
                            boxShadow: active
                              ? "0 12px 30px rgba(34, 34, 34, 0.14)"
                              : "0 2px 8px rgba(34, 34, 34, 0.04)",
                          }}
                          className={`min-w-fit max-w-full box-border flex items-center px-3 py-2 rounded-chrome cursor-pointer overflow-visible border transition-[border-color,box-shadow] duration-150 ease-out hover:border-accent hover:shadow-frame focus-visible:border-accent focus-visible:shadow-frame ${
                            active ? "border-2" : "border"
                          }`}
                        >
                          <span className="flex flex-col gap-1 text-left">
                            <span className="block text-sm font-bold whitespace-nowrap">{meta.name}</span>
                            <span className="block font-mono-label text-mono-label whitespace-nowrap">
                              {block.len}w
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-rule-strong mt-6 pt-4">
            {Object.values(CATEGORIES).map((cat) => (
              <span key={cat.label} className="flex items-center gap-2 text-body-sm text-body whitespace-nowrap">
                <span
                  aria-hidden="true"
                  className="block w-2.5 h-2.5 rounded-pill shrink-0 box-border"
                  style={{ background: cat.dot }}
                />
                {cat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-card-pad min-w-0 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-rule-strong">
          {detail ? (
            <div className="flex flex-col gap-6">
              <span
                className="self-start font-mono-label text-mono-label uppercase rounded-pill py-2 px-4 whitespace-nowrap"
                style={{ background: CATEGORIES[detail.cat].fill, color: CATEGORIES[detail.cat].text }}
              >
                {CATEGORIES[detail.cat].label}
              </span>
              <h4 className="m-0 text-sub-h4 font-extrabold text-pretty">{detail.name}</h4>
              <div className="flex flex-col gap-4">
                <p className="font-mono-label text-mono-label uppercase text-ink m-0">When I use this</p>
                <p className="m-0 text-body-sm text-body text-pretty">{detail.when}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-mono-label text-mono-label uppercase text-ink m-0">I skip this when…</p>
                <div className="border-l-4 border-accent rounded-r-[12px] p-4 bg-soft">
                  <p className="m-0 text-body-sm text-ink-alt text-pretty">{detail.skip}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-start">
              <svg viewBox="0 0 40 40" aria-hidden="true" className="w-8 h-8 block">
                <path
                  d="M6 30 C 10 18 20 10 34 8"
                  fill="none"
                  stroke="#FC890C"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="17" r="3" fill="#FC890C" />
              </svg>
              <p className="m-0 text-[clamp(16px,1.3vw,18px)] leading-snug font-bold text-ink text-pretty">
                Click a step to see how I work.
              </p>
              <p className="m-0 text-body-sm text-body text-pretty">
                Each one has a reason it exists, and a reason I sometimes leave it out.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
