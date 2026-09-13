"use client";

import { useEffect, useRef } from "react";

/**
 * The small hand-drawn string under the word "untangling": starts tied in a
 * knot and pulls itself straight once it scrolls into view, one time only.
 *
 * Why the morph is interpolated in JS rather than by CSS or SMIL:
 * animating SVG's `d` through CSS keyframes is not supported everywhere, and
 * the failure mode is the bad one — a browser that ignores the CSS `d`
 * simply keeps painting the attribute, which would leave the string knotted
 * forever with no animation and no way to tell. Interpolating the control
 * points on a rAF loop behaves identically in every browser.
 *
 * The two shapes are deliberately built from the SAME command structure —
 * one moveto plus six cubics, 38 numbers each — because that is what makes a
 * morph possible at all: each number is lerped against its counterpart, so
 * the shape sweeps continuously between the two rather than cutting. The
 * loop's anchors double back on themselves in the knot (62 -> 55 -> 54)
 * where the straight version runs steadily rightward (69 -> 85 -> 99); that
 * reversal unwinding is what reads as the loop being pulled out, rather than
 * the knot merely flattening in place.
 *
 * Reduced motion is handled in CSS, not here — see the render below.
 */

// The loop hangs well below the line on purpose. Rendered, this whole thing
// is only ~88px wide, so a loop sized "proportionally" to the stroke came out
// about 6px tall and read as a wobble rather than a knot; dropping it to
// y=19 in a 22-tall viewBox buys roughly 9px of loop at the same on-screen
// width. The extra viewBox height is empty space *below* the resting line
// (which stays at y≈9), so the finished state sits exactly where it did.
// prettier-ignore
const KNOT = [
  4, 8.6,
  16, 8.6, 28, 8.4, 38, 8.4,        // flat approach from the left
  50, 8.4, 60, 9.4, 63, 12.6,       // dip down-right into the loop
  67, 16.4, 59, 19.0, 52, 16.8,     // round the bottom of the loop
  46, 14.8, 46, 10.2, 52, 8.6,      // up the left side, back toward the line
  57, 7.0, 64, 6.4, 70, 7.6,        // rise out, crossing over the approach
  84, 8.8, 100, 9.3, 116, 9.3,      // exit right
];

// Same 38 slots, but every anchor spaced along one gently uneven line. The
// waver is intentional: a perfectly straight path would read as a border
// rule, not as the same hand that drew the hero flourish and the logo.
// prettier-ignore
const STRAIGHT = [
  4, 9.6,
  13, 9.7, 22, 9.1, 30, 9.2,
  37, 9.0, 45, 9.2, 52, 8.9,
  58, 8.7, 63, 9.3, 69, 9.1,
  74, 9.4, 80, 9.0, 85, 9.3,
  90, 9.5, 95, 8.8, 99, 9.0,
  104, 9.2, 110, 9.6, 116, 9.4,
];

// Has walked 1400 -> 2600 -> 4500 on review; each earlier value still read as
// hurried. Long for a decorative flourish, deliberately: the loop's collapse
// is the whole point and it needs room to be watched.
const DURATION_MS = 4500;

/** Builds "M x y C … C …" from a flat [x, y, …] list. */
function toPath(points: number[], yOffset = 0) {
  let d = `M ${points[0]} ${points[1] + yOffset}`;
  for (let i = 2; i < points.length; i += 6) {
    d +=
      ` C ${points[i]} ${points[i + 1] + yOffset},` +
      ` ${points[i + 2]} ${points[i + 3] + yOffset},` +
      ` ${points[i + 4]} ${points[i + 5] + yOffset}`;
  }
  return d;
}

// Ease-out sine — the gentlest of the standard ease-outs, chosen over the
// obvious easeOutCubic after watching both. The loop's *area* shrinks far
// faster than the interpolation parameter moves, so a steeply front-loaded
// curve spends its motion budget almost entirely in the first fifth of the
// duration: with cubic the knot was visibly gone by ~350ms of 1350ms and the
// remaining second was an imperceptible settle — a snap followed by a wait,
// which is the opposite of the slow pull this is meant to be. Sine keeps the
// unwinding legible through the middle of the duration and still decelerates
// into rest. Measured against DURATION_MS above, the unwind runs 14% at
// 400ms, 28% at 800ms, 55% at 1600ms, 77% at 2400ms and 94% at 3200ms — so
// it reads as finished around 3.7s, with the last sliver of travel too small
// to see. Re-measure these if the duration or the easing changes.
function easeOutSine(t: number) {
  return Math.sin((t * Math.PI) / 2);
}

function lerpPoints(progress: number) {
  const out = new Array<number>(KNOT.length);
  for (let i = 0; i < KNOT.length; i++) {
    out[i] = KNOT[i] + (STRAIGHT[i] - KNOT[i]) * progress;
  }
  return out;
}

export default function UntangleLine() {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const mainRef = useRef<SVGPathElement>(null);
  const echoRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<number | null>(null);
  // Guards the "once per page visit" rule on its own, rather than relying on
  // the observer being disconnected: a ref, not state, so re-renders can
  // never resurrect a finished animation.
  const playedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || playedRef.current) return;

    // Reduced motion: bail out entirely and never touch a frame. The
    // straight line is already what's on screen — CSS swapped the two <g>
    // groups on first paint (see .untangle-resolved in globals.css), which
    // is earlier than any effect could have run.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playedRef.current = true;
      return;
    }

    function draw(progress: number) {
      const points = lerpPoints(progress);
      mainRef.current?.setAttribute("d", toPath(points));
      // The echo rides ~0.55 units below the main stroke. Two strokes of
      // different weight slightly out of register is the same trick the hero
      // flourish and the logo signature use to avoid looking like a uniform
      // vector line.
      echoRef.current?.setAttribute("d", toPath(points, 0.55));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || playedRef.current) return;
        playedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        function tick(now: number) {
          const t = Math.min(1, (now - start) / DURATION_MS);
          draw(easeOutSine(t));
          if (t < 1) {
            frameRef.current = requestAnimationFrame(tick);
          } else {
            frameRef.current = null;
          }
        }
        frameRef.current = requestAnimationFrame(tick);
      },
      // A positive threshold rather than 0: the string is only ~16px tall, so
      // "one pixel has entered" would spend the whole animation clipped at the
      // very edge of the screen where nobody sees it.
      { threshold: 0.6 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <span
      ref={wrapRef}
      aria-hidden="true"
      // `top-full` puts it immediately below the word's own box. Absolute, so
      // it takes no space in the line and cannot shift the sentence.
      className="pointer-events-none absolute left-0 top-full w-full"
    >
      <svg viewBox="0 0 120 22" className="block w-full h-auto overflow-visible" focusable="false">
        {/* Both states are in the markup; CSS decides which one paints (see
            globals.css). Only this group is ever animated. */}
        <g
          className="untangle-animated"
          fill="none"
          stroke="#FC890C"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path ref={mainRef} d={toPath(KNOT)} strokeWidth="2.2" />
          <path ref={echoRef} d={toPath(KNOT, 0.55)} strokeWidth="1.1" opacity="0.75" />
        </g>
        <g
          className="untangle-resolved"
          fill="none"
          stroke="#FC890C"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={toPath(STRAIGHT)} strokeWidth="2.2" />
          <path d={toPath(STRAIGHT, 0.55)} strokeWidth="1.1" opacity="0.75" />
        </g>
      </svg>
    </span>
  );
}
