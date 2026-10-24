import type { CSSProperties } from "react";
import { BLOB_PATH } from "./Logo";

// Four steps toward "arriving": each blob is φ (1.618×) wider than the one
// before it and more solid. Widths are % of the row (1 : φ : φ² : φ³,
// normalized, leaving room for the gaps). Smaller wheels turn faster, as a
// smaller wheel must to keep pace with a larger one.
const STEPS = [
  { width: 9.5, opacity: 0.25, roll: 6 },
  { width: 15.4, opacity: 0.5, roll: 9.7 },
  { width: 24.9, opacity: 0.75, roll: 15.7 },
  { width: 40.2, opacity: 1, roll: 25.4 },
];

/**
 * Hero timeline: the logo's orange blob (BLOB_PATH, brand #FF890C) repeated
 * as four wheels on a shared baseline, growing by the golden ratio and
 * fading in from 25% to 100%, so the row reads as "moving forward" toward a
 * fully formed arrival. It replaced a single floating blob, which said
 * nothing.
 *
 * Each blob rolls clockwise at a constant speed (`.hero-roll`), and its
 * wrapper bobs a few px (`.hero-bob`) with left-to-right staggered delays,
 * so a wave of motion travels forward. The irregular logo shape is what
 * makes the spin read as rolling rather than as a spinning circle. The edge
 * feather and the glow are static SVG blurs; the motion is transform-only.
 *
 * Reduced motion: the global rule in globals.css stops both animations, so
 * the blobs rest in place.
 */
export default function HeroTimeline() {
  return (
    <div aria-hidden="true" className="flex w-full max-w-[560px] mx-auto items-end justify-between">
      {STEPS.map((step, i) => (
        <div
          key={i}
          className="hero-bob"
          style={
            {
              width: `${step.width}%`,
              opacity: step.opacity,
              "--bob-delay": `${i * 0.35}s`,
            } as CSSProperties
          }
        >
          <svg
            viewBox="-34 -34 182 176"
            className="hero-roll block w-full h-auto overflow-visible"
            style={{ "--roll-duration": `${step.roll}s` } as CSSProperties}
          >
            <defs>
              <filter id={`hero-blob-glow-${i}`} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id={`hero-blob-feather-${i}`} x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="5" />
              </filter>
            </defs>
            <path
              d={BLOB_PATH}
              fill="#FC890C"
              opacity="0.45"
              filter={`url(#hero-blob-glow-${i})`}
              transform="translate(56.8 53.7) scale(1.12) translate(-56.8 -53.7)"
            />
            <path d={BLOB_PATH} fill="#FF890C" filter={`url(#hero-blob-feather-${i})`} />
          </svg>
        </div>
      ))}
    </div>
  );
}
