"use client";

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

// useLayoutEffect warns during SSR; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * A "liquid" selection indicator for tab-like controls: one shared shape
 * (a bar or a filled block) that flows from the old tab to the new one
 * instead of jumping, like a drop of liquid reaching out and joining
 * another.
 *
 * How it moves: its leading edge sets off first and reaches into the new
 * tab with a slight overshoot, then its trailing edge lets go a beat later
 * and catches up. So it stretches across the gap, thins in the middle of
 * the move (a squeeze on the cross axis, like a drop's neck), and settles
 * into the new tab with a soft bulge. Both edges are plain `left`/`right`
 * (or `top`/`bottom`) transitions whose timings swap with the direction of
 * travel, so moving either way, the edge in front always leads.
 *
 * The indicator is positioned against `container` (which must be
 * `position: relative`), measured from the active item's box, and
 * re-measured on resize without animating. `ready` turns true once it has
 * been placed, so the caller can keep a static selected style until then
 * (no flash before hydration, and still a visible selection without JS).
 *
 * `pop`: instead of flowing, it pops up at the new item (a quick fade
 * and overshooting scale, like a bubble), for places where a click sound
 * goes with it and a pop matches it better than a flow.
 *
 * Reduced motion: it simply moves, with no stretch, squeeze or pop.
 */
export function useLiquidIndicator(
  containerRef: RefObject<HTMLElement | null>,
  itemRefs: RefObject<(HTMLElement | null)[]>,
  activeIndex: number | null,
  {
    axis,
    squeeze = 0.55,
    thickness,
    outset = [0, 0],
    pop = false,
  }: {
    /** "x": travels horizontally (tabs in a row); "y": vertically (a list). */
    axis: "x" | "y";
    /** How thin it gets mid-move, on the cross axis (1 = not at all). */
    squeeze?: number;
    /** For a bar: its thickness in px, placed along the item's bottom edge
     * (x) or left edge (y). Omit for a block that fills the item. */
    thickness?: number;
    /** For a block: how far it reaches past the item's box, [x, y] px (a
     * pill with room around a link, without padding the link itself). */
    outset?: [number, number];
    /** Pop up at the new item instead of flowing to it. */
    pop?: boolean;
  }
) {
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  const last = useRef<{ start: number } | null>(null);
  const squeezing = useRef<Animation | null>(null);

  // While a flow is running, until this time (ms).
  const flowingUntil = useRef(0);

  /** animate: flow from the previous position. "keep": update the target
   * but leave whatever transition is running (a resize mid-flow). */
  function place(animate: boolean | "keep") {
    const el = indicatorRef.current;
    const box = containerRef.current;
    const item = activeIndex === null ? null : itemRefs.current?.[activeIndex] ?? null;
    if (!el || !box) return;
    if (!item) {
      // Nothing selected (a nav with no current link): fade out.
      el.style.transition = "opacity 200ms ease-out";
      el.style.opacity = "0";
      last.current = null;
      return;
    }
    const b = box.getBoundingClientRect();
    const r = item.getBoundingClientRect();
    // Offsets inside the container's padding box.
    const left = r.left - b.left - box.clientLeft;
    const top = r.top - b.top - box.clientTop;
    const right = box.clientWidth - left - r.width;
    const bottom = box.clientHeight - top - r.height;

    const [a, z] = axis === "x" ? (["left", "right"] as const) : (["top", "bottom"] as const);
    const start = axis === "x" ? left : top;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prev = last.current;

    if (animate === "keep" || (animate && prev && prev.start === start)) {
      // A re-render or resize mid-flow: leave the flow running.
    } else if (animate && pop && !reduced) {
      // Straight to the new item, popping up there: in from a little
      // smaller and see-through, a touch past full size, then settled.
      el.style.transition = "none";
      squeezing.current?.cancel();
      squeezing.current = el.animate(
        [
          { transform: "scale(0.82)", opacity: 0 },
          { transform: "scale(1.05)", opacity: 1, offset: 0.6 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 280, easing: "cubic-bezier(0.3, 0, 0.2, 1)" }
      );
    } else if (animate && prev && !reduced) {
      flowingUntil.current = performance.now() + 700;
      const forward = start > prev.start;
      const lead = forward ? z : a;
      const trail = forward ? a : z;
      // The cross-axis position (a wrapped row of tabs) moves with the lead.
      const cross = axis === "x" ? "top" : "left";
      el.style.transition = [
        `${lead} 420ms cubic-bezier(0.3, 1.15, 0.5, 1)`,
        `${trail} 480ms cubic-bezier(0.6, 0, 0.2, 1) 110ms`,
        `${cross} 420ms cubic-bezier(0.3, 1, 0.5, 1)`,
        "opacity 200ms ease-out",
      ].join(", ");
      // A new flow mid-flow takes over the squeeze rather than stacking a
      // second one on top of it.
      squeezing.current?.cancel();
      squeezing.current = el.animate(
        [
          { transform: "none" },
          { transform: axis === "x" ? `scaleY(${squeeze})` : `scaleX(${squeeze})`, offset: 0.45 },
          { transform: "none" },
        ],
        { duration: 600, easing: "ease-in-out" }
      );
    } else if (animate && !prev) {
      // Reappearing after nothing was selected: jump into place unseen and
      // fade in, rather than flowing in from wherever it was last.
      el.style.transition = "opacity 200ms ease-out";
    } else {
      el.style.transition = "none";
    }

    if (thickness === undefined) {
      // A block filling the item (and its outset).
      el.style.left = `${left - outset[0]}px`;
      el.style.right = `${right - outset[0]}px`;
      el.style.top = `${top - outset[1]}px`;
      el.style.bottom = `${bottom - outset[1]}px`;
    } else if (axis === "x") {
      // A bar along the item's bottom edge.
      el.style.left = `${left}px`;
      el.style.right = `${right}px`;
      el.style.top = `${top + r.height - thickness}px`;
      el.style.height = `${thickness}px`;
    } else {
      // A bar along the item's left edge.
      el.style.top = `${top}px`;
      el.style.bottom = `${bottom}px`;
      el.style.left = `${left}px`;
      el.style.width = `${thickness}px`;
    }
    el.style.opacity = "1";
    last.current = { start };
  }

  // Follow the selection, flowing between tabs (but not on first placement).
  useIsomorphicLayoutEffect(() => {
    place(last.current !== null);
    if (!ready && last.current !== null) setReady(true);
  });

  // Re-measure without animating when the layout changes size. Only on a
  // real size change: re-placing mid-flow would cut the transition short.
  const placeRef = useRef(place);
  placeRef.current = place;
  useEffect(() => {
    const box = containerRef.current;
    if (!box || typeof ResizeObserver === "undefined") return;
    let size = `${box.clientWidth}x${box.clientHeight}`;
    const ro = new ResizeObserver(() => {
      const next = `${box.clientWidth}x${box.clientHeight}`;
      if (next === size) return;
      size = next;
      placeRef.current(performance.now() < flowingUntil.current ? "keep" : false);
    });
    ro.observe(box);
    return () => ro.disconnect();
  }, [containerRef]);

  return { indicatorRef, ready };
}
