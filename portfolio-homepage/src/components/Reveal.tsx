"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Avoids the "useLayoutEffect does nothing on the server" warning: falls
// back to useEffect during SSR (where neither runs anyway) and only uses
// the real layout effect once mounted in the browser.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scroll-triggered "grow in" entrance for a section.
 *
 * Fully visible by default — the pre-reveal hidden state is only ever
 * applied client-side, after mount, so content never depends on JS to be
 * seen. A visitor with JS disabled, or one whose hydration hasn't finished
 * yet, simply sees the finished page; there's no flash of permanently
 * invisible content if a script fails.
 *
 * Once mounted (via a layout effect, so it lands before the browser's
 * first paint — no flash of the *visible* state either), the wrapped
 * section starts very slightly down and scaled down, then grows and fades
 * into place the first time it crosses into the viewport. A real
 * IntersectionObserver drives this, not a scroll listener, and it
 * disconnects after the first reveal — this is a one-time entrance, not a
 * repeating effect, so scrolling back up and down never replays it.
 * `prefers-reduced-motion` is honoured via the site-wide transition
 * kill-switch in globals.css, same as every other animation on the site.
 *
 * Wraps its children in one extra <div> rather than cloning the child
 * element, so it composes safely with any section regardless of whether
 * that section is a plain function component (cloning a ref onto one
 * would need forwardRef) — the wrapper adds no visual box of its own
 * (no padding/border/background) and sits in normal block/flex flow, so it
 * doesn't affect spacing between sections.
 */
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No IntersectionObserver (very old browser): reveal immediately rather
    // than leaving the section hidden for good.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // `threshold: 0` — fire as soon as any part of the section crosses the
      // line, NOT once some fraction of it is visible.
      //
      // A ratio threshold is a trap for a tall section, because the ratio is
      // capped at (root height / element height): a section taller than
      // 1/threshold viewports can never reach it, so it stays hidden
      // forever. This was `0.15`, and the About section — one Reveal
      // wrapping the bio, "What I do" and the whole process timeline — grew
      // to 4195px, which on a 664px-tall iPhone viewport (598px of root
      // after the margin below) peaks at a ratio of 0.142. It never fired,
      // and About plus the timeline were invisible on short phones while
      // rendering fine on taller ones.
      //
      // The rootMargin is what actually sets the trigger point, and it is
      // height-independent: the reveal starts when the section's top edge
      // reaches 90% of the way down the viewport, so it still grows in as it
      // approaches rather than only once fully on screen. For a
      // normal-height section that is within a few percent of where the old
      // threshold fired.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = ready && !visible;

  return (
    <div
      ref={ref}
      className="transition-[opacity,transform] duration-700 ease-out"
      style={hidden ? { opacity: 0, transform: "translateY(28px) scale(0.97)" } : undefined}
    >
      {children}
    </div>
  );
}
