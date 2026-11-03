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

// The label box has a fixed width (the `width` prop), regardless of which
// status is showing: the longest label of the language, with a little slack
// for font-fallback variance.
// Nothing sits beside it in the contact column, so this no longer guards a
// neighbouring control from being shoved around — it just stops the block
// from twitching as the text swaps. Text is left-aligned inside the box so
// the leftover width always falls to the right, keeping the dot tight
// against the text.
// How long each status stays up. Kept in step with the `status-breathe`
// animation duration in tailwind.config.ts so the dot's fade and the
// text's crossfade share one rhythm — change both together.
const ROTATION_MS = 4500;

export default function StatusPill({
  statuses,
  width,
  srLabel,
}: {
  /** The rotating labels, in order. */
  statuses: string[];
  /** Fixed width of the label box: the longest label of the language, so the
   * pill never resizes while the labels crossfade. */
  width: string;
  /** The one static label screen readers get instead of the rotation. */
  srLabel: string;
}) {
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
      setIndex((current) => (current + 1) % statuses.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [reducedMotion, statuses.length]);

  return (
    <span className="inline-flex items-center gap-2 shrink-0">
      {/* Ink: the strongest contrast on the contact block's light glass card,
          and a 6px dot needs it to read at all. (The block used to be
          full-bleed accent orange, where the old `success` green measured
          only 2.12:1.) The breathing animation is what still reads as
          "live". */}
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-ink animate-status-breathe" />
      </span>

      {/* The rotation itself is decorative — a screen reader announcing a
          fresh live-region update every 4-5 seconds would be noisy and not
          particularly useful, so this whole stack is aria-hidden and a
          single static sr-only label covers all three states instead.
          Fixed width (the `width` prop): only opacity crossfades, the
          box itself never resizes. */}
      <span
        className="relative inline-block h-4 overflow-hidden shrink-0 font-mono-label text-mono-label uppercase text-ink"
        style={{ width }}
        aria-hidden="true"
      >
        {statuses.map((status, i) => (
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
      <span className="sr-only">{srLabel}</span>
    </span>
  );
}
