"use client";

import { useEffect, useState } from "react";

/** Fixed bottom-right "back to top" control. Appears once the user has
 * scrolled a full screen past the top; scrolls smoothly back to the page
 * start.
 *
 * Because it floats over the page it will always cover *something*, so
 * the design works to keep that something from mattering: it stays hidden
 * for the whole first screen, shrinks to a 48px icon-only circle on
 * mobile (the full pill is 138px — 38% of a 360px viewport, wide enough
 * to sit across a heading), and the footer carries enough bottom padding
 * that the last line of the page clears it when scrolled all the way
 * down. See Footer.tsx for the matching padding. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // A full viewport height rather than 0.6 of one: the button now
      // appears only after the first screen is genuinely behind you, so
      // it never floats over hero/intro content the visitor is still
      // reading.
      setVisible(window.scrollY > window.innerHeight);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#page-top"
      // The label is visually hidden on mobile (icon-only circle), so the
      // accessible name comes from aria-label rather than the text node —
      // that keeps the name identical at both sizes instead of vanishing
      // along with the text.
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2 rounded-pill bg-ink text-[13px] font-semibold uppercase tracking-[0.04em] text-white shadow-lightbox whitespace-nowrap h-12 w-12 sm:h-auto sm:w-auto sm:px-4 sm:py-4 ring-1 ring-white/25 transition-[opacity,background-color,transform] duration-150 ease-out hover:bg-ink-alt hover:text-white hover:-translate-y-px focus-visible:bg-ink-alt focus-visible:text-white focus-visible:-translate-y-px focus-visible:outline-white ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true" className="text-accent">
        ↑
      </span>
      {/* Label drops below sm so the control is a compact circle on phones.
          The `ring` above is what separates it from whatever scrolls
          underneath — the fill is already fully opaque `ink`, so nothing
          shows through it, but against dark imagery an opaque dark pill
          can otherwise read as part of the content behind it. */}
      <span className="hidden sm:inline">Back to top</span>
    </a>
  );
}
