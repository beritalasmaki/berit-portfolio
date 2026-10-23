"use client";

import { useEffect, useState } from "react";
import { OPEN_SECTION_EVENT } from "./AccordionSection";

/** `href` overrides the default same-page `#id` anchor for a real
 * navigation link ("Back to main page" → `/`). */
export type TocItem = { id: string; label: string; href?: string };

/**
 * In-page table of contents with real scroll-spy: a single
 * IntersectionObserver watches every section, and whichever one crosses a
 * thin band near the top of the viewport becomes "active". A section stays
 * active until the next one crosses that same line, which is the standard
 * scroll-spy recipe and avoids the "nothing is active between sections"
 * flicker a naive top-edge check gives you.
 *
 * Two markup blocks, one shared list: below `lg` the always-expanded
 * sidebar would push the whole article down, so it collapses into a native
 * `<details>` dropdown labelled "Navigate to..." instead. At `lg` and above
 * it's the original sticky sidebar, fully expanded. Both share the same
 * link list and the same scroll-spy state.
 */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // A thin horizontal band starting just below the sticky-ish reading
      // position: a section "activates" once its top crosses ~15% down the
      // viewport, and stays active until the next section reaches that line.
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Same-page section anchors (scroll-spy tab-style left border). Real page
  // links (`item.href` set — "Back to main page") are rendered separately
  // by `pageLinks()` below, deliberately styled differently: a real
  // navigation away from the page reads as a different kind of action than
  // jumping to a section within it, not just one more item in the list.
  function sectionLinks(onNavigate?: () => void) {
    return items
      .filter((item) => !item.href)
      .map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "location" : undefined}
            onClick={() => {
              // Opens the matching accordion section if it is one — harmless
              // no-op for ids nothing is listening for. See AccordionSection
              // for why this is a plain event rather than shared state.
              window.dispatchEvent(new CustomEvent(OPEN_SECTION_EVENT, { detail: { id: item.id } }));
              onNavigate?.();
            }}
            className={`flex items-center gap-2 py-2 pl-4 -ml-px text-nav border-l-4 transition-[border-color,color] duration-150 ease-out ${
              isActive
                ? "border-accent text-accent-dark font-bold rounded-r-[16px]"
                : "border-rule text-body font-semibold hover:border-rule-strong hover:text-ink focus-visible:border-rule-strong focus-visible:text-ink"
            }`}
          >
            {isActive && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent shrink-0" />}
            {item.label}
          </a>
        );
      });
  }

  function pageLinks(onNavigate?: () => void) {
    return items
      .filter((item) => item.href)
      .map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={onNavigate}
          className="flex items-center gap-2 mt-2 pt-4 border-t border-rule text-nav font-bold text-ink transition-colors duration-150 ease-out hover:text-accent-dark focus-visible:text-accent-dark"
        >
          <span aria-hidden="true">←</span>
          {item.label}
        </a>
      ));
  }

  return (
    // No `lg:self-start` here: a sticky element's "stick range" is bounded
    // by its own containing block, so this wrapper needs to stretch to the
    // full grid-row height (matching the main content column) for the
    // sticky nav below to have anywhere to travel — with self-start it
    // shrinks to just the nav's own short content height, and the nav
    // stops sticking after a couple hundred pixels of scroll instead of
    // for the whole page (confirmed with Playwright: without this, the
    // nav's on-screen position tracked scroll 1:1, i.e. not sticky at all,
    // for all but the very top of the page). Grid's default
    // `align-items: stretch` only applies at `lg:` anyway, where TOC and
    // the main content share a grid row — below `lg:` they're separate
    // stacked rows (`grid-cols-1`), so mobile is unaffected either way.
    <div className="mb-10 lg:mb-0">
      {/* Desktop / tablet: fully expanded, sticky sidebar. */}
      <nav
        aria-label="On this page"
        className="hidden lg:sticky lg:top-28 lg:flex flex-col gap-4 rounded-card glass p-6"
      >
        <p className="font-mono-label text-mono-label uppercase text-muted m-0 pb-2">On this page</p>
        {sectionLinks()}
        {pageLinks()}
      </nav>

      {/* Mobile: collapsed dropdown, native <details> for built-in keyboard
          + screen-reader disclosure semantics with no extra JS wiring. */}
      <details
        className="group rounded-card glass lg:hidden"
        open={mobileOpen}
        onToggle={(event) => setMobileOpen(event.currentTarget.open)}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-6 font-mono-label text-mono-label uppercase text-muted marker:content-none [&::-webkit-details-marker]:hidden">
          Navigate to...
          <span
            aria-hidden="true"
            className="text-[15px] text-ink transition-transform duration-150 ease-out group-open:rotate-180"
          >
            ↓
          </span>
        </summary>
        <nav aria-label="On this page" className="flex flex-col gap-4 px-6 pb-6 pt-1">
          {sectionLinks(() => setMobileOpen(false))}
          {pageLinks(() => setMobileOpen(false))}
        </nav>
      </details>
    </div>
  );
}
