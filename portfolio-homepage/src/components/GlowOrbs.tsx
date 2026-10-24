import type { CSSProperties } from "react";

/**
 * Site-wide background: soft orbs of brand orange drifting slowly behind
 * every page on a light cream ground. Fixed to the screen, so the glass
 * cards slide over them as the page scrolls.
 *
 * The glow and the "very blurry" edge come from each orb's radial gradient,
 * not a `filter: blur()`. A long, soft falloff to transparent reads the same,
 * and it keeps every orb a plain painted layer that only ever moves by
 * `transform`, which the browser composites on the GPU instead of
 * re-blurring the screen every frame.
 *
 * Variety is deliberate: four tones of the brand orange, peak opacities from
 * 0.12 to 0.55 (the biggest orbs are the faintest; two small bright accents
 * sit at the edges), golden-ratio sizes and positions (see ORBS), and each
 * orb on its own 75–120s path (`orb-drift-*` in globals.css), kept to about
 * ±8vmax so the composition holds. Negative delays start them mid-path, so
 * they never move in sync.
 *
 * Reduced motion: the global reduced-motion rule in globals.css collapses
 * the animations, so the orbs rest at their starting positions as a still
 * glow.
 */

type Orb = {
  /** Diameter, in vmax so the composition holds across screen shapes. */
  size: number;
  /** Center position, as % of the viewport. */
  x: number;
  y: number;
  /** RGB triplet of the orb's tone. */
  rgb: string;
  /** Peak opacity at the orb's center. */
  alpha: number;
  /** Which drift path, and how long one leg of it takes. */
  path: number;
  duration: number;
  delay: number;
};

const ORANGE = "252 137 12"; // #FC890C, the brand orange
const PEACH = "255 181 102"; // #FFB566
const AMBER = "232 115 10"; // #E8730A
const APRICOT = "255 211 161"; // #FFD3A1

// Golden-ratio composition: sizes step by φ (60 → 37 → 23 → 14vmax), and
// centers sit on the golden-section lines (38.2% / 61.8%, then 23.6% /
// 85.4%), following a golden spiral from the large faint orb at the upper
// right of center down into the corners. The large orbs stay faint, so the
// middle of the page, where content lives, reads cream. The two small,
// brighter brand-orange orbs sit in the calm zones at the far right gutter
// and the bottom-left corner, away from text.
const ORBS: Orb[] = [
  { size: 60, x: 61.8, y: 38.2, rgb: PEACH, alpha: 0.16, path: 1, duration: 120, delay: -30 },
  { size: 37, x: 38.2, y: 61.8, rgb: APRICOT, alpha: 0.3, path: 2, duration: 100, delay: -55 },
  { size: 37, x: 85.4, y: 23.6, rgb: ORANGE, alpha: 0.12, path: 3, duration: 110, delay: -20 },
  { size: 23, x: 14.6, y: 14.6, rgb: PEACH, alpha: 0.22, path: 4, duration: 85, delay: -40 },
  { size: 23, x: 76.4, y: 85.4, rgb: AMBER, alpha: 0.18, path: 5, duration: 95, delay: -70 },
  // Bright accents, kept small and out at the edges.
  { size: 14, x: 94, y: 38.2, rgb: ORANGE, alpha: 0.55, path: 6, duration: 75, delay: -10 },
  { size: 14, x: 4, y: 92, rgb: ORANGE, alpha: 0.5, path: 7, duration: 80, delay: -45 },
];

export default function GlowOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fffaf4]">
      {ORBS.map((orb, i) => (
        <span
          key={i}
          className="glow-orb"
          style={
            {
              "--orb-size": `${orb.size}vmax`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              background: `radial-gradient(circle, rgb(${orb.rgb} / ${orb.alpha}) 0%, rgb(${orb.rgb} / ${(orb.alpha * 0.5).toFixed(3)}) 35%, rgb(${orb.rgb} / 0) 70%)`,
              animation: `orb-drift-${orb.path} ${orb.duration}s ease-in-out ${orb.delay}s infinite alternate`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
