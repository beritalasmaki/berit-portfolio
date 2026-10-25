"use client";

import { useEffect, useRef } from "react";
import { createScope, createTimeline, stagger, utils } from "animejs";
import { BLOB_PATH } from "./Logo";

/**
 * The hero's opening story, told in four beats beside the headline, with a
 * small caption naming each one:
 *
 * 1. "Complexity": a crowd of brand shapes (circles and rounded squares,
 *    filled and outlined) bustles around the right column, clearly restless:
 *    darting, spinning, bumping past each other.
 * 2. "Structure": Berit steps in, as the orange ball from her logo. It lands
 *    with a calm ripple, and the shapes stop and settle into neat rows,
 *    sorted by kind, with the ball above them.
 * 3. "Clarity": the rows flow into one straight line of dots, the ball leads
 *    the way to the start of the path, the dots follow it in and merge, and
 *    the Line's shooting star is born there.
 * 4. "Goal": with standards, a system, DesignOps & DevOps and a vision in
 *    place, the work heads for the goal with less weight on its shoulders:
 *    the star climbs a calm path past those milestones to a target that
 *    lights up when it arrives (HeroLine.tsx).
 *
 * Animated with Anime.js: one timeline, built inside a scope that's reverted
 * on unmount. Its positions run on the page's clock (CSS delays count from
 * load), so it starts with the headline whenever hydration finishes. Every
 * shape's chaos moves are clamped to the column, so nothing crosses the text.
 *
 * Wide screens only (on narrow ones it would sit over the text), and never
 * under reduced motion; in both cases nothing shows, and the star starts on
 * its own fallback.
 */

type Kind = "dot" | "ring" | "square" | "frame";

type Shape = {
  /** Centre, as % of the box. */
  x: number;
  y: number;
  size: number;
  kind: Kind;
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

// Sorted rows in "Structure": one row per kind, in this order.
const ROW_ORDER: Kind[] = ["dot", "ring", "square", "frame"];
// In rows every shape is shown at this size (px), so order reads as order.
const ROW_SIZE = 30;
const ROW_GAP = 50;

// The story starts with the headline (Hero.tsx delays: H1 at 1650ms, timed
// to the logo's signature). Beat times below are relative to this.
const T0 = 1550;
const CHAOS = 0; // Complexity: shapes appear and bustle.
const ENTER = 2300; // Berit's ball lands with a ripple.
const ARRANGE = 2650; // Structure: shapes settle into sorted rows.
const LINE = 4300; // Clarity: rows flow into one line of dots…
const MERGE = 5150; // …which follow the ball into the start point.
const HANDOFF = 5650; // The shooting star sets off.

// Where the star sets off, as a fraction of the box: HeroLine publishes it
// as data attributes; these are its current values, as a fallback.
const START_X = 0.14;
const START_Y = 0.5;

const CAPTIONS = ["Complexity", "Structure", "Clarity", "Goal"];

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
  const ballRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const bloomRef = useRef<HTMLSpanElement>(null);
  const captionRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    const ball = ballRef.current;
    const ripple = rippleRef.current;
    const bloom = bloomRef.current;
    if (!root || !ball || !ripple || !bloom) return;
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

    const w = root.clientWidth;
    const h = root.clientHeight;
    // The start of the path, where everything ends up (px in the box).
    const line = root.parentElement?.querySelector<HTMLElement>('[data-hero-line="hero"]');
    const sx = Number(line?.dataset.startX ?? START_X) * w;
    const sy = Number(line?.dataset.startY ?? START_Y) * h;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-chaos-shape]"));
    const centres = SHAPES.map((s) => [(s.x / 100) * w, (s.y / 100) * h] as const);
    const sizes = SHAPES.map((s) => s.size * SCALE);

    // Chaos moves stay inside the column: each shape may roam up to 150px,
    // but never past the box's edges (so never over the headline).
    const roam = (i: number, axis: 0 | 1) => {
      const c = centres[i][axis];
      const max = axis === 0 ? w : h;
      const half = sizes[i] / 2 + 6;
      return utils.random(Math.round(Math.max(-150, half - c)), Math.round(Math.min(150, max - half - c)));
    };

    // Sorted rows: one per kind, centred under the ball.
    const rowsTop = 0.36 * h;
    const rowCentreX = 0.55 * w;
    const rowSpot = SHAPES.map((s, i) => {
      const row = ROW_ORDER.indexOf(s.kind);
      const peers = SHAPES.map((p, j) => [p, j] as const).filter(([p]) => p.kind === s.kind);
      const k = peers.findIndex(([, j]) => j === i);
      const x = rowCentreX + (k - (peers.length - 1) / 2) * ROW_GAP;
      const y = rowsTop + row * ROW_GAP;
      return [x, y] as const;
    });
    const ballX = rowCentreX;
    const ballY = 0.17 * h;

    // One straight line of dots, running right from the start of the path,
    // in row order (so the rows visibly unspool into the line).
    const order = SHAPES.map((_, i) => i).sort(
      (a, b) => ROW_ORDER.indexOf(SHAPES[a].kind) - ROW_ORDER.indexOf(SHAPES[b].kind) || a - b
    );
    const lineGap = Math.min(30, (w - sx - 40) / SHAPES.length);
    const lineSpot = SHAPES.map((_, i) => [sx + 46 + order.indexOf(i) * lineGap, sy] as const);

    // Place the ball, ripple and bloom by their centres.
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    ripple.style.left = `${ballX}px`;
    ripple.style.top = `${ballY}px`;
    bloom.style.left = `${sx}px`;
    bloom.style.top = `${sy}px`;

    const at = (ms: number) => Math.max(0, T0 + ms - performance.now());
    const captions = captionRefs.current.filter(Boolean) as HTMLSpanElement[];

    const scope = createScope({ root }).add(() => {
      const tl = createTimeline();

      // 1. Complexity: the shapes pop in and bustle about, clearly restless.
      tl.add(els, {
        opacity: [0, 1],
        scale: [0.3, 1],
        duration: 500,
        delay: stagger(40),
        ease: "outBack",
      }, at(CHAOS));
      [150, 850, 1550].forEach((t) => {
        tl.add(els, {
          x: (_el: unknown, i = 0) => roam(i, 0),
          y: (_el: unknown, i = 0) => roam(i, 1),
          rotate: () => utils.random(-220, 220),
          scale: () => utils.random(80, 125) / 100,
          duration: () => utils.random(620, 760),
          ease: "inOutQuad",
        }, at(CHAOS + t));
      });

      // 2. Berit steps in: her logo ball lands with a calm ripple…
      tl.add(ball, {
        opacity: [0, 1],
        scale: [0, 1],
        y: [-40, 0],
        duration: 650,
        ease: "outBack",
      }, at(ENTER));
      tl.add(ripple, {
        opacity: [0.7, 0],
        scale: [0.6, 7],
        duration: 1100,
        ease: "outCubic",
      }, at(ENTER + 300));

      // …and the shapes stop and settle into neat rows, sorted by kind.
      tl.add(els, {
        x: (_el: unknown, i = 0) => rowSpot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => rowSpot[i][1] - centres[i][1],
        rotate: 0,
        scale: (_el: unknown, i = 0) => ROW_SIZE / sizes[i],
        duration: 900,
        delay: stagger(35),
        ease: "inOutCubic",
      }, at(ARRANGE));

      // 3. Clarity: the rows unspool into one straight line of dots, and the
      //    ball moves to lead it from the start of the path…
      tl.add(els, {
        x: (_el: unknown, i = 0) => lineSpot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => lineSpot[i][1] - centres[i][1],
        scale: (_el: unknown, i = 0) => 10 / sizes[i],
        borderRadius: "50%",
        backgroundColor: ORANGE,
        borderColor: ORANGE,
        duration: 800,
        delay: stagger(30),
        ease: "inOutCubic",
      }, at(LINE));
      tl.add(ball, {
        x: sx - ballX,
        y: sy - ballY,
        scale: 0.45,
        duration: 900,
        ease: "inOutCubic",
      }, at(LINE));

      // …the dots follow it in and merge, nearest first, and the star is born.
      tl.add(els, {
        x: (_el: unknown, i = 0) => sx - centres[i][0],
        opacity: 0,
        duration: 480,
        delay: (_el: unknown, i = 0) => order.indexOf(i) * 28,
        ease: "inCubic",
      }, at(MERGE));
      tl.add(ball, { opacity: 0, scale: 0.15, duration: 450, ease: "inCubic" }, at(MERGE + 200));
      tl.add(bloom, { opacity: [0, 1, 0], scale: [0.3, 1.5, 1.9], duration: 900, ease: "outSine" }, at(HANDOFF - 250));
      tl.call(handOff, at(HANDOFF));

      // The caption names each beat as it happens; the last one, "Goal",
      // stays as the star heads there.
      const beats = [CHAOS, ARRANGE, LINE, HANDOFF];
      beats.forEach((t, k) => {
        tl.add(captions[k], { opacity: [0, 1], y: [6, 0], duration: 400, ease: "outCubic" }, at(t + 100));
        if (k < beats.length - 1) {
          tl.add(captions[k], { opacity: 0, y: -6, duration: 300, ease: "inCubic" }, at(beats[k + 1] - 200));
        }
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {SHAPES.map((s, i) => (
        <span key={i} data-chaos-shape className="absolute block" style={shapeStyle(s)} />
      ))}
      {/* Berit: the orange ball from her logo. */}
      <span
        ref={rippleRef}
        className="absolute block h-16 w-16 -ml-8 -mt-8 rounded-full border-2 border-accent opacity-0"
      />
      <div ref={ballRef} className="absolute -ml-9 -mt-[34px] opacity-0">
        <svg viewBox="0 0 114 108" width="72" height="68" className="block overflow-visible">
          <path d={BLOB_PATH} fill="#FF890C" />
        </svg>
      </div>
      <span
        ref={bloomRef}
        className="absolute block h-12 w-12 -ml-6 -mt-6 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,181,102,0.9) 0%, rgba(252,137,12,0.35) 40%, rgba(252,137,12,0) 70%)",
        }}
      />
      {/* The beat names, one at a time. */}
      <span className="absolute left-0 top-0 block h-5">
        {CAPTIONS.map((c, k) => (
          <span
            key={c}
            ref={(el) => {
              captionRefs.current[k] = el;
            }}
            className="absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap font-mono-label text-mono-label uppercase text-muted opacity-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {`0${k + 1} / ${c}`}
          </span>
        ))}
      </span>
    </div>
  );
}
