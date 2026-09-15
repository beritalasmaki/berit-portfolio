"use client";

import { useId, useRef, useState } from "react";

type Tab = {
  question: string;
  body: string;
  highlight: string;
  linkLabel: string;
  linkHref: string;
};

const tabs: Tab[] = [
  {
    question: "Is she keeping her collaboration skills up to date?",
    body: "Developer collaboration looks different today than it did a few years ago. I keep adapting to that: I do not just hand a finished design over and disappear, I stay part of the conversation while developers are building. I also build real prototypes myself with tools like Claude Design and VS Code, so developers see working components early, not just static images to interpret.",
    highlight:
      "On a national education platform with many municipalities and vendors, I ran the team's daily meetings and created the workshop process the team used to move from research to real concepts.",
    linkLabel: "See the National Education case study →",
    linkHref: "/usecases/education-platform",
  },
  {
    question: "How does she approach complex problems?",
    body: "I start working on complex problems early and adjust my approach as I learn more, instead of trying to plan everything in advance.",
    highlight:
      "Modernizing old environmental data systems meant working with tools researchers had used for years without a clear structure. Instead of waiting for a perfect solution, I focused on releasing something useful quickly, and then improving it based on what we learned.",
    linkLabel: "See the Environmental Data Systems case study →",
    linkHref: "/usecases/environmental-data-tool",
  },
  {
    question: "Does her work survive when developers start building it?",
    body: "Before I hand a design over, I walk the developers through it and explain the reasoning behind each decision, not only what to build.",
    highlight:
      "I moved a design system from Sketch to Figma during an active project, rebuilding the components properly instead of copying them as they were. Both the developers and the project manager told me how much smoother their work became because of this.",
    linkLabel: "See the Industrial Data case study →",
    linkHref: "/usecases/industrial-tool",
  },
  {
    question: "How does she know when something is ready to ship?",
    body: "I prefer to release something, learn from real feedback, and improve it, instead of spending too much time perfecting a first version nobody has tested yet.",
    highlight:
      "A university's digital portal launched as a first version, then kept improving based on real usage after launch.",
    linkLabel: "See the University Onboarding case study →",
    linkHref: "/usecases/university-ai-tool",
  },
];

export default function MindTabs() {
  const [active, setActive] = useState(0);
  // Every question starts collapsed on mobile. It used to open the first one
  // to mirror the desktop panel, which always has an active answer — but the
  // two are not the same situation: on desktop the answer sits *beside* the
  // list, so an open one costs nothing, while on mobile it pushes the other
  // three questions down past the fold. Closed by default keeps all four
  // readable at once, which is the point of the section.
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  }

  const current = tabs[active];

  return (
    <section id="key-skills" aria-labelledby="mind-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">02 / your next move</p>
      <div className="flex items-end justify-between gap-grid-gap-lg flex-wrap mt-4">
        <h2 id="mind-heading" className="m-0 text-section-h2 text-ink">
          The questions behind the résumé
        </h2>
        <p className="m-0 text-[15px] leading-snug text-footer-meta max-w-[20em]">
          A good collaboration starts with a better question.
        </p>
      </div>

      {/* Desktop / tablet: vertical tablist + shared panel to the right.
          Hidden below md, where the accordion block just below takes over —
          two separate markup blocks rather than one responsive layout,
          matching Header.tsx's mobile-nav split. */}
      <div className="relative mt-8 hidden bg-panel rounded-card overflow-hidden md:grid md:grid-cols-2 items-stretch">
        <div role="tablist" aria-orientation="vertical" aria-label="Questions" className="flex flex-col bg-panel-alt">
          {tabs.map((tab, index) => {
            const selected = index === active;
            const tabId = `${baseId}-tab-${index}`;
            const panelId = `${baseId}-panel`;
            return (
              <button
                key={tab.question}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={tabId}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`group flex flex-1 items-center justify-between gap-4 py-[clamp(16px,2.2vw,24px)] px-[clamp(16px,2.2vw,32px)] text-left border-b border-rule last:border-b-0 border-l-4 transition-[background-color,border-color] duration-150 ease-out ${
                  selected
                    ? "bg-ink text-white border-l-ink focus-visible:outline-white"
                    : "bg-panel-alt text-ink border-l-transparent hover:bg-rule-strong hover:border-l-accent focus-visible:bg-rule-strong focus-visible:border-l-accent"
                }`}
              >
                {/* min-h reserves space for 2 lines (em-based, so it scales
                    with the fluid clamp() font-size) regardless of this
                    particular question's actual length — every row ends up
                    the same height instead of hugging its own text, so the
                    list doesn't reflow as the selection moves between a
                    one-line and a two-line question. */}
                <span className="min-h-[2.75em] flex items-center text-[clamp(15px,1.2vw,17px)] font-semibold leading-snug text-pretty">
                  {tab.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[15px] whitespace-nowrap transition-[color,transform] duration-150 ease-out ${
                    selected
                      ? "text-white"
                      : "text-muted group-hover:text-accent-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:text-accent-dark group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
                  }`}
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        {/* `key={active}` forces a fresh DOM node per question, restarting
            the `.panel-fade-item` entrance animation each time — a plain
            prop/text change on a persisted node wouldn't retrigger a CSS
            animation. See globals.css for the keyframe. */}
        <div
          key={active}
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          tabIndex={0}
          className="panel-fade-item flex flex-col gap-4 bg-panel p-pane-pad"
        >
          <p className="m-0 text-body-lg text-body max-w-prose">{current.body}</p>
          <div className="flex gap-4 items-start border-t border-rule-strong pt-4">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent mt-2 shrink-0" />
            <p className="m-0 text-body-sm text-ink-alt max-w-[34em]">{current.highlight}</p>
          </div>
          <a
            href={current.linkHref}
            className="ml-4 text-nav font-semibold text-ink border-b border-accent pb-2 self-start md:whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-accent-dark hover:-translate-y-px focus-visible:border-accent-dark focus-visible:-translate-y-px"
          >
            {current.linkLabel}
          </a>
        </div>
      </div>

      {/* Mobile: accordion — each answer expands directly below its own
          question, instead of a shared panel after the full list of
          questions. Panels are conditionally rendered (not the `hidden`
          attribute), same precedent as Header.tsx's mobile nav — which also
          means each panel is a genuine fresh mount, so `.panel-fade-item`
          fades in on every expand with no extra key needed. */}
      <div className="mt-8 flex flex-col bg-panel rounded-card overflow-hidden divide-y divide-rule md:hidden">
        {tabs.map((tab, index) => {
          const expanded = index === openMobile;
          const buttonId = `${baseId}-accordion-button-${index}`;
          const panelId = `${baseId}-accordion-panel-${index}`;
          return (
            <div key={tab.question}>
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpenMobile(expanded ? null : index)}
                  className={`flex w-full items-center justify-between gap-4 py-4 px-[clamp(16px,4vw,24px)] text-left border-l-4 transition-[background-color,border-color] duration-150 ease-out ${
                    expanded
                      ? "bg-ink text-white border-l-ink focus-visible:outline-white"
                      : "bg-panel-alt text-ink border-l-transparent focus-visible:bg-rule-strong focus-visible:border-l-accent"
                  }`}
                >
                  <span className="min-h-[2.75em] flex items-center text-[15px] font-semibold leading-snug text-pretty">
                    {tab.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[15px] transition-transform duration-150 ease-out ${
                      expanded ? "text-white rotate-180" : "text-muted"
                    }`}
                  >
                    ↓
                  </span>
                </button>
              </h3>
              {expanded && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  // `bg-white`, not the `bg-panel` this used to share with the
                  // block behind it. The collapsed question rows are
                  // `panel-alt` (#f0eee9) and the panel was `panel` (#f5f3ee)
                  // — a 5-value difference that read as one flat surface, so
                  // an open answer didn't visibly separate from the questions
                  // stacked under it. White is the lightest surface in the
                  // palette and lifts the answer clear of them.
                  //
                  // The hairline is what makes that white legible as a
                  // *surface*. The panel runs flush to its container's edges,
                  // so its left and right sides meet the page's own white
                  // background directly and the block simply dissolved there.
                  // `rule-strong` rather than `rule`: this border's whole job
                  // is to separate white from white, and `rule` is only
                  // 1.09:1 against it where `rule-strong` is 1.17:1.
                  //
                  // No top border — the `ink` question header sits directly
                  // on that edge and already states it. The bottom one is
                  // kept even though it lands against the container's own
                  // `divide-y` for every panel but the last (measured: the
                  // two stack to 2px of near-identical grey and read as one
                  // separator, not a double line). The last panel has no
                  // `divide-y` under it — its bottom *is* the container's
                  // bottom edge, meeting the page — so without this it would
                  // dissolve exactly the way the sides did.
                  className="panel-fade-item flex flex-col gap-4 bg-white p-pane-pad border-x border-b border-rule-strong"
                >
                  <p className="m-0 text-body-lg text-body max-w-prose">{tab.body}</p>
                  <div className="flex gap-4 items-start border-t border-rule-strong pt-4">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent mt-2 shrink-0" />
                    <p className="m-0 text-body-sm text-ink-alt max-w-[34em]">{tab.highlight}</p>
                  </div>
                  <a
                    href={tab.linkHref}
                    className="ml-4 text-nav font-semibold text-ink border-b border-accent pb-2 self-start md:whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-accent-dark hover:-translate-y-px focus-visible:border-accent-dark focus-visible:-translate-y-px"
                  >
                    {tab.linkLabel}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
