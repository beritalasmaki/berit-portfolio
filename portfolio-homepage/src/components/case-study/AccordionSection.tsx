"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Dispatched by TableOfContents when a nav link is clicked — every
 * AccordionSection listens and opens itself if the id matches, so clicking
 * "Challenges & Problem-Solving" in the nav both scrolls to and expands
 * that section. A plain `window` CustomEvent rather than lifted/shared
 * React state: each section already owns its open/closed state locally
 * (matching this codebase's established preference — see AboutMe's
 * per-row independent hover state — for state to live as close to the
 * thing it controls as possible), and TOC has no reason to know which ids
 * are accordions versus plain anchors; dispatching unconditionally on
 * every click is a harmless no-op for ids nothing is listening for. */
export const OPEN_SECTION_EVENT = "cs:open-section";

// A real SVG, not the "⌄" text glyph this used to be — that character's
// ink sits noticeably off-center within its own line box in the mono
// typeface at the 24px size this needs, so flex's `items-center` was
// centering two *boxes* that didn't visually align (confirmed by eye and
// by comparing rendered screenshots). `currentColor` picks up the
// wrapping span's text color, so it still follows the same
// muted -> accent-dark hover/focus swap as before.
function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0 block">
      <path
        d="M5 8 L10 13 L15 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A collapsible page section ("How it started", "Challenges &
 * Problem-Solving", "What I would do differently"), presented as a white
 * card (`rounded-card border border-rule bg-white p-card-pad`) — the same
 * treatment given to the plain sections around it (Starting Point,
 * ImpactSection), so the page reads as one consistent
 * "each section is a card" system rather than the accordions looking like
 * a visually distinct, separately-styled control. The heading doubles as
 * the toggle button; it carries no background fill of its own — the
 * "Show more/less" label plus the rotating chevron are what mark it as
 * interactive, not a shaded box behind the text.
 *
 * `label` is the mono eyebrow above the heading, and it must say something
 * the heading does not. It used to be passed the section's own title, so the
 * page read "WHAT I WOULD DO DIFFERENTLY / What I would do differently" — a
 * line of vertical space that told the reader nothing. It now carries a
 * short kicker naming what the section is *for* ("In hindsight" over "What I
 * would do differently"), which is what earns it the line.
 *
 * The panel is always in the DOM (not conditionally rendered) and animates
 * via the `grid-template-rows: 0fr -> 1fr` technique — animates to an
 * intrinsic, unmeasured height in pure CSS, same pattern as AboutMe's
 * WorkingWithMe rows. Unlike those rows, nothing here needs the
 * absolute-overlay workaround: a click-toggled, page-level accordion
 * pushing the sections below it down as it opens is expected, normal
 * behavior, not an accidental side effect competing with a hovering mouse.
 */
export default function AccordionSection({
  id,
  label,
  heading,
  defaultOpen = false,
  children,
}: {
  id: string;
  /** Mono eyebrow above the heading. Must say something the heading doesn't
   * — see the note in the component docblock. */
  label: string;
  heading: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  useEffect(() => {
    function onOpenRequest(event: Event) {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (detail?.id === id) setOpen(true);
    }
    window.addEventListener(OPEN_SECTION_EVENT, onOpenRequest);
    return () => window.removeEventListener(OPEN_SECTION_EVENT, onOpenRequest);
  }, [id]);

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="rounded-card border border-rule bg-white p-card-pad"
    >
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">{label}</p>
      <h2 id={headingId} className="mt-4 m-0">
        {/* The heading itself is the toggle — no background box behind it.
            "Show more/less" plus the rotating chevron carry the "this is
            clickable" signal instead, so the card stays visually identical
            to the plain sections around it whether open or closed. */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="group flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 text-left"
        >
          <span className="text-section-h2 text-ink">{heading}</span>
          {/* `flex-wrap` above, `ml-auto` here: side by side while both fit,
              and the control drops to its own row — still on the card's right
              edge — once the heading needs the full width. Without it a long
              heading keeps its ~60% column and shreds into one or two words
              per line on a phone. */}
          <span className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="font-mono-label text-mono-label uppercase text-muted whitespace-nowrap group-hover:text-accent-dark group-focus-visible:text-accent-dark">
              {open ? "Show less" : "Show more"}
            </span>
            <span
              aria-hidden="true"
              className={`flex items-center text-muted transition-transform duration-300 ease-out group-hover:text-accent-dark group-focus-visible:text-accent-dark ${
                open ? "rotate-180" : ""
              }`}
            >
              <ChevronIcon />
            </span>
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {/* Divider only becomes visible once the panel has real height —
              collapsed (grid-rows-[0fr]) this whole block, border included,
              is clipped to nothing, so it never shows on a closed card. */}
          <div className="mt-8 pt-8 border-t border-rule">{children}</div>
        </div>
      </div>
    </section>
  );
}
