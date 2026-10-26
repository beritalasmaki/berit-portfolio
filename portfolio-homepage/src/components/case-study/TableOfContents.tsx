"use client";

import { useEffect, useRef, useState } from "react";
import { OPEN_SECTION_EVENT } from "./AccordionSection";

/** `href` overrides the default same-page `#id` anchor for a real
 * navigation link ("Back to main page" → `/`). */
export type TocItem = { id: string; label: string; href?: string };

// The reading line: a section becomes the current one as soon as its top
// passes this far down the viewport.
const READ = 0.35;
// How far above the first link the star's line fades in from (px).
const LEAD = 28;
// The star's tail (px).
const TAIL = 64;
// Spring stiffness (per ms): the slow glide in on page load, then the
// quicker follow (settles in ~250ms, never overshoots).
const ENTER_SPRING = 0.005;
const FOLLOW_SPRING = 0.016;

/**
 * In-page table of contents, with the case study's shooting star (the
 * site's "Line" motif) as its progress marker.
 *
 * The current section comes from the scroll position itself, read every
 * frame while scrolling: the last section whose top has passed the reading
 * line (READ) is current, and at the very bottom of the page the last one
 * is. So the highlight changes the moment a section reaches you, with no
 * observer thresholds to lag behind (a tall section like the screenshot
 * gallery used to keep the previous link lit).
 *
 * Desktop: the links have no bars of their own. One thin orange line runs
 * down their left edge, drawn by a star that glides through the menu as you
 * read: between two links it sits in proportion to how far you are between
 * those two sections, so it moves continuously with the page. Nothing is
 * drawn ahead of it; each link's dot appears as the star reaches it, the
 * line fades in from just above the first link, and a short tail fades out
 * behind the star. The star follows on a critically damped spring, so it
 * glides rather than jumps, and on page load it glides in from the top.
 *
 * Mobile: the menu collapses into a native `<details>` dropdown labelled
 * "Navigate to..." (no star), sharing the same links and current section.
 *
 * Reduced motion: the star sits exactly at the reading position, with no
 * glide.
 */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const sections = items.filter((item) => !item.href);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const ids = sections.map((s) => s.id).join(" ");

  useEffect(() => {
    const list = ids.split(" ");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Which section you're in, and how far through it (0..1).
    function progress() {
      const line = window.innerHeight * READ;
      const tops = list.map((id) => document.getElementById(id)?.getBoundingClientRect().top ?? Infinity);
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) return { index: list.length - 1, frac: 0 };
      let index = -1;
      tops.forEach((top, k) => {
        if (top <= line) index = k;
      });
      if (index < 0) return { index: 0, frac: 0 };
      if (index === list.length - 1) return { index, frac: 0 };
      const span = tops[index + 1] - tops[index];
      return { index, frac: Math.max(0, Math.min(1, (line - tops[index]) / Math.max(1, span))) };
    }

    // Each link's dot position inside the nav (null when the nav is hidden).
    function points() {
      const nav = navRef.current;
      if (!nav || nav.offsetParent === null) return null;
      const n = nav.getBoundingClientRect();
      const pts = linkRefs.current.slice(0, list.length).map((a) => {
        if (!a) return null;
        const r = a.getBoundingClientRect();
        return { x: r.left - n.left + 3, y: r.top - n.top + r.height / 2 };
      });
      return pts.every(Boolean) ? (pts as { x: number; y: number }[]) : null;
    }

    let y: number | null = null;
    let v = 0;
    let entering = true;
    let last = 0;
    let frame: number | null = null;
    let current = -1;

    function draw(pts: { x: number; y: number }[], at: number) {
      const x = pts[0].x;
      const top = pts[0].y - LEAD;
      const line = lineRef.current;
      if (line) {
        line.style.left = `${x - 0.75}px`;
        line.style.top = `${top}px`;
        line.style.height = `${Math.max(0, at - top)}px`;
      }
      const tail = tailRef.current;
      if (tail) {
        const from = Math.max(top, at - TAIL);
        tail.style.left = `${x - 1.5}px`;
        tail.style.top = `${from}px`;
        tail.style.height = `${Math.max(0, at - from)}px`;
      }
      const star = starRef.current;
      if (star) {
        star.style.transform = `translate(${x}px, ${at}px)`;
        star.style.opacity = "1";
      }
      pts.forEach((p, k) => {
        const node = nodeRefs.current[k];
        if (!node) return;
        node.style.left = `${p.x}px`;
        node.style.top = `${p.y}px`;
        if (at >= p.y - 1) node.setAttribute("data-lit", "");
        else node.removeAttribute("data-lit");
      });
    }

    function step(now: number) {
      frame = null;
      const { index, frac } = progress();
      if (index !== current) {
        current = index;
        setActiveIndex(index);
      }
      const pts = points();
      if (!pts) return;
      const next = pts[Math.min(index + 1, pts.length - 1)];
      const goal = pts[index].y + frac * (next.y - pts[index].y);
      if (y === null) y = reduced ? goal : pts[0].y - LEAD;
      if (reduced) {
        y = goal;
        draw(pts, y);
        return;
      }
      const dt = Math.min(50, last ? now - last : 16);
      last = now;
      const w = entering ? ENTER_SPRING : FOLLOW_SPRING;
      v += (w * w * (goal - y) - 2 * w * v) * dt;
      y += v * dt;
      if (Math.abs(goal - y) < 0.3 && Math.abs(v) < 0.005) {
        y = goal;
        v = 0;
        entering = false;
        last = 0;
        draw(pts, y);
        return;
      }
      draw(pts, y);
      frame = requestAnimationFrame(step);
    }

    function update() {
      if (frame === null) frame = requestAnimationFrame(step);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Accordions opening and closing move the sections.
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro?.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ids]);

  const activeId = sections[activeIndex]?.id;

  // Same-page section anchors. Real page links (`item.href` set — "Back to
  // main page") are rendered separately by `pageLinks()` below,
  // deliberately styled differently: a real navigation away from the page
  // reads as a different kind of action than jumping to a section within
  // it, not just one more item in the list.
  function sectionLinks(onNavigate?: () => void, desktop = false) {
    return sections.map((item, index) => {
      const isActive = item.id === activeId;
      return (
        <a
          key={item.id}
          ref={
            desktop
              ? (el) => {
                  linkRefs.current[index] = el;
                }
              : undefined
          }
          href={`#${item.id}`}
          data-sound="pop"
          aria-current={isActive ? "location" : undefined}
          onClick={() => {
            // Opens the matching accordion section if it is one — harmless
            // no-op for ids nothing is listening for. See AccordionSection
            // for why this is a plain event rather than shared state.
            window.dispatchEvent(new CustomEvent(OPEN_SECTION_EVENT, { detail: { id: item.id } }));
            onNavigate?.();
          }}
          className={`flex items-center py-2 text-nav transition-colors duration-200 ease-out ${
            desktop ? "pl-6" : ""
          } ${
            isActive
              ? "text-accent-dark font-bold"
              : "text-body font-semibold hover:text-ink focus-visible:text-ink"
          }`}
        >
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
    <div className="mb-12 lg:mb-0">
      {/* Desktop / tablet: fully expanded, sticky sidebar. */}
      <nav
        ref={navRef}
        aria-label="On this page"
        className="hidden lg:sticky lg:top-28 lg:flex flex-col gap-4 rounded-card glass p-6"
      >
        {/* The star's line, tail, dots and head (positioned in the effect
            above). Nothing is drawn ahead of the star. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            ref={lineRef}
            className="absolute w-[1.5px] rounded-pill"
            style={{ background: `linear-gradient(to bottom, rgba(252,137,12,0) 0px, rgba(252,137,12,0.6) ${LEAD + 10}px)` }}
          />
          <div
            ref={tailRef}
            className="absolute w-[3px] rounded-pill"
            style={{ background: "linear-gradient(to bottom, rgba(252,137,12,0), rgb(252,137,12))" }}
          />
          {sections.map((item, k) => (
            <span
              key={item.id}
              ref={(el) => {
                nodeRefs.current[k] = el;
              }}
              className="toc-node absolute h-[7px] w-[7px] -ml-[3.5px] -mt-[3.5px] rounded-pill bg-accent"
            />
          ))}
          <div ref={starRef} className="absolute left-0 top-0 opacity-0">
            <svg width="44" height="44" viewBox="-22 -22 44 44" className="block -ml-[22px] -mt-[22px] overflow-visible">
              <defs>
                <radialGradient id="toc-star-glow">
                  <stop offset="0" stopColor="#FFB566" stopOpacity="0.65" />
                  <stop offset="1" stopColor="#FFB566" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="toc-star-ray-x" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#FC890C" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#FC890C" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="toc-star-ray-y" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#FC890C" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#FC890C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle r="16" fill="url(#toc-star-glow)" />
              <rect x="-17" y="-0.6" width="34" height="1.2" fill="url(#toc-star-ray-x)" />
              <rect x="-0.6" y="-17" width="1.2" height="34" fill="url(#toc-star-ray-y)" />
              <circle r="3.5" fill="#FC890C" />
              <circle r="1.7" fill="#FFF4E6" />
            </svg>
          </div>
        </div>
        <p className="font-mono-label text-mono-label uppercase text-muted m-0 pb-2">On this page</p>
        {sectionLinks(undefined, true)}
        {pageLinks()}
      </nav>

      {/* Mobile: collapsed dropdown, native <details> for built-in keyboard
          + screen-reader disclosure semantics with no extra JS wiring. */}
      <details
        className="group rounded-card glass lg:hidden"
        open={mobileOpen}
        onToggle={(event) => setMobileOpen(event.currentTarget.open)}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-mono-label text-mono-label uppercase text-muted marker:content-none [&::-webkit-details-marker]:hidden">
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
