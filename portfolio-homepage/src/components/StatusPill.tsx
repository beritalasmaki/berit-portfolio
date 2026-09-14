"use client";

import { useEffect, useState } from "react";

// Rotates through a few short "what I'm open to" statements: a small dot
// plus the site's standard mono eyebrow.
//
// It lives in the contact block (ContactSection). It began in the header
// beside the Contact button, which was the worst of both worlds — it sat in
// the busiest row on the page competing with the nav, *and* it had to be
// hidden below 1300px because the header row ran out of width, so the people
// most likely to be scanning for availability on a phone never saw it. The
// contact block is where "is she actually available?" is the question the
// reader already has, it is the calmest place on the page, and nothing there
// is width-constrained, so it shows at every size.
//
// Despite the filename it is not a *pill*: it started as one (a filled,
// rounded-pill badge) but the fill is what made the fixed width below
// visible, and the box read as heavy chrome for what is really a caption.
// With the fill gone the leftover width is simply invisible.
const STATUSES = ["Open to work", "Open to networking", "Open to brainstorming"] as const;

// Fixed regardless of which status is showing, sized to fit the longest
// ("Open to brainstorming") with a little slack for font-fallback variance.
// Nothing sits beside it in the contact column, so this no longer guards a
// neighbouring control from being shoved around — it just stops the block
// from twitching as the text swaps. Text is left-aligned inside the box so
// the leftover width always falls to the right, keeping the dot tight
// against the text.
const TEXT_WIDTH = "172px";

// How long each status stays up. Kept in step with the `status-breathe`
// animation duration in tailwind.config.ts so the dot's fade and the
// text's crossfade share one rhythm — change both together.
const ROTATION_MS = 4500;

export default function StatusPill() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onChange() {
      setReducedMotion(query.matches);
    }
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Reduced motion: the interval is never started at all (not just
  // sped up or de-animated) — "just show the first message statically"
  // means the rotation itself stops, not only its visual transition.
  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % STATUSES.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <span className="inline-flex items-center gap-2 shrink-0">
      {/* Ink, not the `success` green this used on white. The contact block
          is full-bleed accent orange, and #3F7A54 on #FC890C measures
          2.12:1 — a 6px dot at that contrast is effectively invisible. Ink
          is 6.61:1 there and matches the block's own "every element is ink"
          rule. The breathing animation is what still reads as "live". */}
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-ink animate-status-breathe" />
      </span>

      {/* The rotation itself is decorative — a screen reader announcing a
          fresh live-region update every 4-5 seconds would be noisy and not
          particularly useful, so this whole stack is aria-hidden and a
          single static sr-only label covers all three states instead.
          Fixed width (see TEXT_WIDTH above): only opacity crossfades, the
          box itself never resizes. */}
      <span
        className="relative inline-block h-4 overflow-hidden shrink-0 font-mono-label text-mono-label uppercase text-ink"
        style={{ width: TEXT_WIDTH }}
        aria-hidden="true"
      >
        {STATUSES.map((status, i) => (
          <span
            key={status}
            className={`absolute inset-0 flex items-center justify-start whitespace-nowrap transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {status}
          </span>
        ))}
      </span>
      <span className="sr-only">Open to work, networking, and brainstorming</span>
    </span>
  );
}
