"use client";

import { useEffect, useRef } from "react";
import { createScope, createTimeline, stagger, utils } from "animejs";

/**
 * The hero's opening chaos: a scatter of brand shapes (circles and rounded
 * squares, filled and outlined) that drift restlessly, then gather into one
 * point and merge, and the Line's shooting star is born there
 * (HeroLine.tsx). Complexity becoming one clear path: the project that
 * worked.
 *
 * Animated with Anime.js (one timeline, built inside a scope that's reverted
 * on unmount):
 * 1. Appear (from ~1.55s, with the headline): the shapes fade and grow in,
 *    staggered.
 * 2. Chaos (to ~3.5s): two slow, smooth random drifts and turns each, on
 *    a gentle in-out ease so they wander rather than snap. (Not
 *    `composition: 'blend'`: blended tweens add up, and the gather below
 *    must override them to bring every shape exactly to one point.)
 * 3. Gather (~3.5–4.9s): every shape flows to the line's start point,
 *    shrinking and rounding into a small dot, the farthest setting off first,
 *    so they arrive together like beads drawn on a string.
 * 4. Merge: the dots melt into a soft bloom, and `line:handoff` sets the star
 *    off from that point.
 *
 * Wide screens only (on narrow ones it would sit over the text), and never
 * under reduced motion; in both cases the shapes stay hidden and the star
 * starts on its own fallback.
 */

type Shape = {
  /** Centre, as % of the box. */
  x: number;
  y: number;
  size: number;
  kind: "dot" | "ring" | "square" | "frame";
  color: string;
  /** Starting tilt, degrees. */
  tilt: number;
};

// Shape sizes below are multiplied by this (bold, like the reference).
const SCALE = 1.5;

const ORANGE = "#FC890C";
const AMBER = "#E8730A";
const PEACH = "#FFB566";

const SHAPES: Shape[] = [
  { x: 22, y: 18, size: 14, kind: "dot", color: ORANGE, tilt: 0 },
  { x: 47, y: 12, size: 40, kind: "ring", color: AMBER, tilt: 0 },
  { x: 74, y: 22, size: 44, kind: "frame", color: ORANGE, tilt: 12 },
  { x: 90, y: 42, size: 22, kind: "frame", color: AMBER, tilt: -18 },
  { x: 62, y: 38, size: 30, kind: "dot", color: ORANGE, tilt: 0 },
  { x: 36, y: 34, size: 34, kind: "frame", color: PEACH, tilt: -8 },
  { x: 12, y: 52, size: 36, kind: "ring", color: ORANGE, tilt: 0 },
  { x: 48, y: 56, size: 26, kind: "square", color: ORANGE, tilt: 24 },
  { x: 80, y: 64, size: 38, kind: "ring", color: PEACH, tilt: 0 },
  { x: 28, y: 72, size: 32, kind: "square", color: AMBER, tilt: -14 },
  { x: 62, y: 78, size: 16, kind: "square", color: PEACH, tilt: 30 },
  { x: 88, y: 86, size: 12, kind: "dot", color: AMBER, tilt: 0 },
  { x: 42, y: 90, size: 20, kind: "ring", color: AMBER, tilt: 0 },
  { x: 16, y: 88, size: 10, kind: "dot", color: PEACH, tilt: 0 },
];

// The shapes come in with the headline (Hero.tsx delays: H1 at 1650ms,
// timed to the logo's signature), so the title and the animation arrive
// together.
const T0 = 1550;

// Where the star sets off, as a fraction of the box: HeroLine publishes it
// as data attributes; these are its current values, as a fallback.
const START_X = 0.14;
const START_Y = 0.5;

function shapeStyle(s: Shape): React.CSSProperties {
  const filled = s.kind === "dot" || s.kind === "square";
  const round = s.kind === "dot" || s.kind === "ring";
  return {
    left: `${s.x}%`,
    top: `${s.y}%`,
    width: s.size * SCALE,
    height: s.size * SCALE,
    marginLeft: (-s.size * SCALE) / 2,
    marginTop: (-s.size * SCALE) / 2,
    borderRadius: round ? "50%" : "22%",
    background: filled ? s.color : "transparent",
    border: filled ? "none" : `3px solid ${s.color}`,
    transform: `rotate(${s.tilt}deg)`,
    opacity: 0,
  };
}

export default function HeroChaos() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const bloom = bloomRef.current;
    if (!root || !bloom) return;
    const handOff = () => {
      (window as Window & { __lineHandoff?: boolean }).__lineHandoff = true;
      window.dispatchEvent(new Event("line:handoff"));
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(min-width: 1024px)").matches
    ) {
      return;
    }

    // The gathering point, in px inside the box.
    const line = root.parentElement?.querySelector<HTMLElement>('[data-hero-line="hero"]');
    const w = root.clientWidth;
    const h = root.clientHeight;
    const tx = Number(line?.dataset.startX ?? START_X) * w;
    const ty = Number(line?.dataset.startY ?? START_Y) * h;
    bloom.style.left = `${tx}px`;
    bloom.style.top = `${ty}px`;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-chaos-shape]"));
    const centre = (el: HTMLElement): [number, number] => [
      (Number(el.dataset.x) / 100) * w,
      (Number(el.dataset.y) / 100) * h,
    ];
    const centres = els.map(centre);
    const dist = centres.map(([cx, cy]) => Math.hypot(tx - cx, ty - cy));
    const far = Math.max(...dist);

    // Positions are on the page's clock (CSS delays count from load), not
    // from when this effect happened to run after hydration.
    const at = (ms: number) => Math.max(0, ms - performance.now());

    const scope = createScope({ root }).add(() => {
      createTimeline()
        // 1. Appear.
        .add(els, {
          opacity: [0, 1],
          scale: [0.4, 1],
          duration: 800,
          delay: stagger(60),
          ease: "outCubic",
        }, at(T0))
        // 2. Chaos: slow, smooth, restless wandering.
        .add(els, {
          x: () => utils.random(-70, 70),
          y: () => utils.random(-60, 60),
          rotate: () => utils.random(-120, 120),
          duration: () => utils.random(1100, 1300),
          ease: "inOutSine",
        }, at(T0 + 50))
        .add(els, {
          x: () => utils.random(-70, 70),
          y: () => utils.random(-60, 60),
          rotate: () => utils.random(-120, 120),
          duration: () => utils.random(900, 1100),
          ease: "inOutSine",
        }, at(T0 + 1150))
        // 3. Gather into the line's start point, farthest first, becoming
        //    small filled dots on the way.
        .add(els, {
          x: (_el: unknown, i = 0) => tx - centres[i][0],
          y: (_el: unknown, i = 0) => ty - centres[i][1],
          rotate: 0,
          scale: 0.22,
          borderRadius: "50%",
          backgroundColor: ORANGE,
          borderColor: ORANGE,
          duration: 1300,
          delay: (_el, i) => Math.round((1 - (dist[i ?? 0] ?? 0) / far) * 320),
          ease: "inOutCubic",
        }, at(T0 + 1950))
        // 4. Merge: the dots melt into a soft bloom, and the star sets off.
        .call(handOff, at(T0 + 3450))
        .add(bloom, {
          opacity: [0, 1, 0],
          scale: [0.3, 1.4, 1.8],
          duration: 900,
          ease: "outSine",
        }, at(T0 + 3300))
        .add(els, {
          opacity: 0,
          scale: 0,
          duration: 380,
          ease: "inSine",
        }, at(T0 + 3400));
    });

    return () => scope.revert();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {SHAPES.map((s, i) => (
        <span
          key={i}
          data-chaos-shape
          data-x={s.x}
          data-y={s.y}
          className="absolute block"
          style={shapeStyle(s)}
        />
      ))}
      <span
        ref={bloomRef}
        className="absolute block h-12 w-12 -ml-6 -mt-6 rounded-full opacity-0"
        style={{ background: "radial-gradient(circle, rgba(255,181,102,0.9) 0%, rgba(252,137,12,0.35) 40%, rgba(252,137,12,0) 70%)" }}
      />
    </div>
  );
}
