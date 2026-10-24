import type { CSSProperties } from "react";

/**
 * Hero aurora: the hero's "moving forward" visual, warm aurora light
 * flowing like a river, left to right. It replaced a soft blurred current
 * (read as ghostly) and, before that, rolling logo blobs (read as messy).
 *
 * Each curtain is built the way an aurora looks: many thin vertical rays
 * rising from a wavy base line, bright at the base and fading upward, with
 * slightly uneven heights, so the light has visible structure (streaks)
 * instead of being one haze. A light blur (2.5) merges neighboring rays
 * into a glowing curtain while keeping the streaks.
 *
 * - Fade-in: every ray's opacity grows from left to right, so the light is
 *   faint where it starts and full where it arrives. Both ends taper to
 *   nothing (a sine envelope on height and opacity), so the curtains have
 *   no hard edges.
 * - Flow: a band of extra brightness travels left → right through all the
 *   curtains (the `aurora-flow` mask, `.hero-aurora-pulse`), like a surge
 *   of light moving downstream.
 * - Undulation: each curtain sways with a slow, out-of-phase skew from its
 *   base (`.hero-aurora-sway`), the way aurora curtains ripple.
 *
 * - Untangling: on load, every ray starts scattered (shifted, tilted,
 *   stretched at random) and settles into the neat curtain over ~1.4s,
 *   sweeping left → right just after the H1 appears
 *   (`.hero-aurora-ray`). The visual acts out the headline, "untangling
 *   complexity", and the settled state is deliberately orderly.
 *
 * The geometry is computed here at build time, so it's static SVG, and all
 * motion is CSS. Under the global reduced-motion rule the rays appear
 * already settled and nothing moves.
 */

const W = 600;
const H = 420;

// Deterministic per-ray jitter, so server and client render identically.
function jitter(n: number) {
  const s = Math.sin(n * 12.9898) * 43758.5453;
  return s - Math.floor(s);
}

type Curtain = {
  base: number;
  amp: number;
  freq: number;
  phase: number;
  height: number;
  colors: [string, string, string];
  strength: number;
  sway: { dur: number; delay: number };
};

const CURTAINS: Curtain[] = [
  { base: 250, amp: 34, freq: 0.012, phase: 0.4, height: 190, colors: ["#E8730A", "#FC890C", "#FFC48A"], strength: 1, sway: { dur: 13, delay: -3 } },
  { base: 300, amp: 28, freq: 0.015, phase: 2.1, height: 150, colors: ["#F27D0A", "#FF9F43", "#FFD3A1"], strength: 0.9, sway: { dur: 17, delay: -8 } },
  { base: 340, amp: 22, freq: 0.018, phase: 4.0, height: 110, colors: ["#FC890C", "#FFB566", "#FFE3C2"], strength: 0.8, sway: { dur: 11, delay: -5 } },
];

const STEP = 5;

function rays(c: Curtain, ci: number) {
  const out = [];
  for (let x = 10; x <= W - 10; x += STEP) {
    const t = x / W;
    // Taper both ends to nothing, so each curtain fades in and out of the
    // frame instead of ending in a hard vertical edge.
    const env = Math.pow(Math.sin(Math.PI * t), 0.8);
    const y = c.base + c.amp * Math.sin(x * c.freq + c.phase) + c.amp * 0.4 * Math.sin(x * c.freq * 2.3 + c.phase * 1.7);
    // The settled curtain is smooth and orderly: no per-ray randomness in
    // its height or brightness. The randomness only lives in where each ray
    // *starts* (the tangle below).
    const h = env * c.height * (0.72 + 0.28 * Math.sin(x * 0.03 + c.phase));
    const opacity = env * c.strength * (0.2 + 0.8 * Math.pow(t, 1.1));
    // The tangle: each ray starts scattered (shifted, tilted, stretched),
    // then settles into place. Rays settle left → right, so the untangling
    // itself reads as moving forward.
    const tangle = {
      "--ray-dx": `${((jitter(x + ci * 1000) - 0.5) * 70).toFixed(1)}px`,
      "--ray-dy": `${((jitter(x * 7 + ci) - 0.5) * 140).toFixed(1)}px`,
      "--ray-rot": `${((jitter(x * 13 + ci * 5) - 0.5) * 80).toFixed(1)}deg`,
      "--ray-sy": (0.35 + jitter(x * 17 + ci * 9) * 1.1).toFixed(2),
      "--ray-delay": `${(1100 + t * 1100 + ci * 120).toFixed(0)}ms`,
    } as CSSProperties;
    out.push(
      <rect
        key={x}
        className="hero-aurora-ray"
        style={tangle}
        x={x - 2}
        y={(y - h).toFixed(1)}
        width={STEP + 1}
        height={h.toFixed(1)}
        fill={`url(#aurora-ray-${ci})`}
        opacity={opacity.toFixed(3)}
      />
    );
  }
  return out;
}

export default function HeroAurora() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true" className="block w-full max-w-[600px] h-auto mx-auto overflow-visible">
      <defs>
        {CURTAINS.map((c, i) => (
          // Per ray: brightest at the base, fading to nothing at the top.
          <linearGradient key={i} id={`aurora-ray-${i}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor={c.colors[0]} stopOpacity="1" />
            <stop offset="0.3" stopColor={c.colors[1]} stopOpacity="0.75" />
            <stop offset="1" stopColor={c.colors[2]} stopOpacity="0" />
          </linearGradient>
        ))}
        <linearGradient id="aurora-surge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        {/* Base brightness plus a moving surge band. */}
        <mask id="aurora-flow" maskUnits="userSpaceOnUse" x="-60" y="-60" width={W + 120} height={H + 120}>
          <rect x="-60" y="-60" width={W + 120} height={H + 120} fill="#fff" opacity="0.8" />
          <rect className="hero-aurora-pulse" x="-260" y="-60" width="260" height={H + 120} fill="url(#aurora-surge)" />
        </mask>
        <filter id="aurora-soft" filterUnits="userSpaceOnUse" x="-60" y="-60" width={W + 120} height={H + 120}>
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <g mask="url(#aurora-flow)" filter="url(#aurora-soft)">
        {CURTAINS.map((c, i) => (
          <g
            key={i}
            className="hero-aurora-sway"
            style={{ "--sway-dur": `${c.sway.dur}s`, "--sway-delay": `${c.sway.delay}s` } as CSSProperties}
          >
            {rays(c, i)}
          </g>
        ))}
      </g>
    </svg>
  );
}
