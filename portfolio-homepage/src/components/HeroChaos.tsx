"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, createTimeline, stagger, utils } from "animejs";
import { BLOB_PATH } from "./Logo";

/**
 * The hero's story: how Berit works, told beside the headline in six beats,
 * each with one line of text under the animation.
 *
 * 1. "Every project starts in a tangle." A crowd of brand shapes (circles
 *    and rounded squares, filled and outlined) bustles around: darting,
 *    spinning, overlapping.
 * 2. "First, I map where things stand." Berit steps in, as the orange ball
 *    from her logo. The shapes stop where they are, a scan ripples out from
 *    the ball, and thin lines draw between neighbouring shapes as it passes:
 *    the mess becomes a map.
 * 3. "Then we plan what's needed, the system and the goal." The map lines
 *    fade and the shapes sort into neat rows by kind (system thinking). The
 *    goal and a dashed planned route appear (`line:plan`, drawn by
 *    HeroLine.tsx).
 * 4. "We set up the systems and how we'll measure progress." The shapes
 *    become small dots and fly onto the route, where they become its
 *    checkpoints (`line:metrics`). The ball moves to the start.
 * 5. "We move, learning and adjusting as we go." The ball blooms into the
 *    shooting star (`line:handoff`), which travels the route, lighting the
 *    checkpoints, and corrects its course once along the way.
 * 6. "And we reach the goal, together." The goal fills and pulses. This line
 *    stays.
 *
 * Animated with Anime.js: one timeline, built inside a scope that's reverted
 * on unmount. Its positions run on the page's clock (CSS delays count from
 * load), so it starts with the headline whenever hydration finishes. Every
 * chaos move is clamped to the column, so nothing crosses the text.
 *
 * Wide screens only (on narrow ones it would sit over the text). Under
 * reduced motion nothing moves: HeroLine draws the finished route and goal,
 * and only the last line of the story shows.
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

// The story, one line per beat.
const STORY = [
  "Every project starts in a tangle.",
  "First, I map where things stand.",
  "Then we plan what’s needed, the system and the goal.",
  "We set up the systems and how we’ll measure progress.",
  "We move, learning and adjusting as we go.",
  "And we reach the goal, together.",
];

// Beat times (ms), from T0. The story starts with the headline (Hero.tsx
// delays: H1 at 1650ms, timed to the logo's signature).
const T0 = 1550;
const TANGLE = 0;
const MAP = 2000;
const PLAN = 3600;
const METRICS = 5400;
const MOVE = 7000; // The star sets off…
const GOAL = MOVE + 4200; // …and arrives (HeroLine's run).

// Sorted rows in "Plan": one row per kind, in this order, all at one size,
// up in the free top-left of the column (the route runs bottom-left to
// top-right), under the ball.
const ROW_ORDER: Kind[] = ["dot", "ring", "square", "frame"];
const ROW_SIZE = 28;
const ROW_GAP = 44;

// Fallbacks for what HeroLine publishes as data attributes.
const START = [0.083, 0.81];
const CHECKPOINTS = [
  [0.333, 0.724],
  [0.45, 0.676],
  [0.733, 0.419],
  [0.87, 0.262],
];

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
  const scanRef = useRef<HTMLSpanElement>(null);
  const mapRef = useRef<SVGSVGElement>(null);
  const bloomRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    const ball = ballRef.current;
    const scan = scanRef.current;
    const map = mapRef.current;
    const bloom = bloomRef.current;
    if (!root || !ball || !scan || !map || !bloom) return;
    const lines = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
    const say = (name: string) => () => {
      if (name === "line:handoff") (window as Window & { __lineHandoff?: boolean }).__lineHandoff = true;
      window.dispatchEvent(new Event(name));
    };
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Nothing moves: only the story's ending shows, under the finished
      // route that HeroLine draws.
      lines[lines.length - 1].style.opacity = "1";
      return;
    }

    const w = root.clientWidth;
    const h = root.clientHeight;
    const line = root.parentElement?.querySelector<HTMLElement>('[data-hero-line="hero"]');
    const sx = Number(line?.dataset.startX ?? START[0]) * w;
    const sy = Number(line?.dataset.startY ?? START[1]) * h;
    const checkpoints = (line?.dataset.checkpoints?.split(";").map((p) => p.split(",").map(Number)) ?? CHECKPOINTS).map(
      ([x, y]) => [x * w, y * h] as const
    );

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-chaos-shape]"));
    const centres = SHAPES.map((s) => [(s.x / 100) * w, (s.y / 100) * h] as const);
    const sizes = SHAPES.map((s) => s.size * SCALE);

    // Tangle moves stay inside the column (up to 150px, never past its
    // edges, so never over the headline).
    const roam = (i: number, axis: 0 | 1) => {
      const c = centres[i][axis];
      const max = axis === 0 ? w : h;
      const half = sizes[i] / 2 + 6;
      return utils.random(Math.round(Math.max(-150, half - c)), Math.round(Math.min(150, max - half - c)));
    };

    // The ball, and the rows under it.
    const ballX = 0.24 * w;
    const ballY = 0.1 * h;
    const rowsTop = 0.24 * h;
    const rowSpot = SHAPES.map((s, i) => {
      const row = ROW_ORDER.indexOf(s.kind);
      const peers = SHAPES.map((p, j) => [p, j] as const).filter(([p]) => p.kind === s.kind);
      const k = peers.findIndex(([, j]) => j === i);
      return [ballX + (k - (peers.length - 1) / 2) * ROW_GAP, rowsTop + row * ROW_GAP] as const;
    });
    // Each shape's checkpoint: the rows deal out onto the route in order.
    const order = SHAPES.map((_, i) => i).sort(
      (a, b) => ROW_ORDER.indexOf(SHAPES[a].kind) - ROW_ORDER.indexOf(SHAPES[b].kind) || a - b
    );
    const spot = SHAPES.map((_, i) => checkpoints[order.indexOf(i) % checkpoints.length]);

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    scan.style.left = `${ballX}px`;
    scan.style.top = `${ballY}px`;
    bloom.style.left = `${sx}px`;
    bloom.style.top = `${sy}px`;

    // The map: thin lines between each shape and its two nearest
    // neighbours, wherever the tangle left them, drawn as the scan passes.
    function drawMap() {
      const r = root!.getBoundingClientRect();
      const pts = els.map((el) => {
        const b = el.getBoundingClientRect();
        return [b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top] as const;
      });
      const seen = new Set<string>();
      const ns = "http://www.w3.org/2000/svg";
      pts.forEach((a, i) => {
        pts
          .map((b, j) => [j, Math.hypot(b[0] - a[0], b[1] - a[1])] as const)
          .filter(([j]) => j !== i)
          .sort((x, y) => x[1] - y[1])
          .slice(0, 2)
          .forEach(([j, d]) => {
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (seen.has(key)) return;
            seen.add(key);
            const b = pts[j];
            const el = document.createElementNS(ns, "line");
            el.setAttribute("x1", String(a[0]));
            el.setAttribute("y1", String(a[1]));
            el.setAttribute("x2", String(b[0]));
            el.setAttribute("y2", String(b[1]));
            el.setAttribute("stroke-dasharray", String(d));
            el.setAttribute("stroke-dashoffset", String(d));
            map!.appendChild(el);
            // Drawn when the scan reaches it: the farther from the ball,
            // the later.
            const far = Math.hypot(a[0] - ballX, a[1] - ballY);
            animate(el, { strokeDashoffset: [d, 0], duration: 500, delay: far * 1.6, ease: "outCubic" });
          });
      });
    }

    const at = (ms: number) => Math.max(0, T0 + ms - performance.now());

    const scope = createScope({ root }).add(() => {
      const tl = createTimeline();

      // 1. A tangle: the shapes pop in and bustle about.
      tl.add(els, { opacity: [0, 1], scale: [0.3, 1], duration: 500, delay: stagger(40), ease: "outBack" }, at(TANGLE));
      [150, 750, 1350].forEach((t) => {
        tl.add(els, {
          x: (_el: unknown, i = 0) => roam(i, 0),
          y: (_el: unknown, i = 0) => roam(i, 1),
          rotate: () => utils.random(-220, 220),
          scale: () => utils.random(80, 125) / 100,
          duration: () => utils.random(560, 680),
          ease: "inOutQuad",
        }, at(TANGLE + t));
      });

      // 2. Map: Berit's ball lands, the shapes hold still, a scan ripples
      //    out and the map draws itself between them.
      tl.add(ball, { opacity: [0, 1], scale: [0, 1], y: [-40, 0], duration: 650, ease: "outBack" }, at(MAP));
      tl.add(scan, { opacity: [0.7, 0], scale: [0.6, 11], duration: 1500, ease: "outCubic" }, at(MAP + 350));
      tl.call(drawMap, at(MAP + 400));

      // 3. Plan: the map fades, the shapes sort into rows, and the goal and
      //    the planned route appear.
      tl.add(map, { opacity: [1, 0], duration: 400, ease: "inOutSine" }, at(PLAN));
      tl.add(els, {
        x: (_el: unknown, i = 0) => rowSpot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => rowSpot[i][1] - centres[i][1],
        rotate: 0,
        scale: (_el: unknown, i = 0) => ROW_SIZE / sizes[i],
        duration: 900,
        delay: stagger(35),
        ease: "inOutCubic",
      }, at(PLAN + 50));
      tl.call(say("line:plan"), at(PLAN + 300));

      // 4. Systems and metrics: the rows deal out onto the route as small
      //    dots, becoming its checkpoints; the ball moves to the start.
      tl.add(els, {
        x: (_el: unknown, i = 0) => spot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => spot[i][1] - centres[i][1],
        scale: (_el: unknown, i = 0) => 10 / sizes[i],
        borderRadius: "50%",
        backgroundColor: ORANGE,
        borderColor: ORANGE,
        duration: 1000,
        delay: (_el: unknown, i = 0) => order.indexOf(i) * 40,
        ease: "inOutCubic",
      }, at(METRICS));
      tl.call(say("line:metrics"), at(METRICS + 1250));
      tl.add(els, { opacity: 0, duration: 300, ease: "inSine" }, at(METRICS + 1300));
      tl.add(ball, { x: sx - ballX, y: sy - ballY, scale: 0.45, duration: 1000, ease: "inOutCubic" }, at(METRICS + 300));

      // 5. Move: the ball blooms into the shooting star.
      tl.add(ball, { opacity: 0, scale: 0.15, duration: 400, ease: "inCubic" }, at(MOVE - 300));
      tl.add(bloom, { opacity: [0, 1, 0], scale: [0.3, 1.5, 1.9], duration: 900, ease: "outSine" }, at(MOVE - 300));
      tl.call(say("line:handoff"), at(MOVE));

      // The story's lines, one per beat; the last one stays.
      const beats = [TANGLE, MAP, PLAN, METRICS, MOVE, GOAL];
      beats.forEach((t, k) => {
        tl.add(lines[k], { opacity: [0, 1], y: [6, 0], duration: 450, ease: "outCubic" }, at(t + 100));
        if (k < beats.length - 1) {
          tl.add(lines[k], { opacity: 0, y: -6, duration: 300, ease: "inCubic" }, at(beats[k + 1] - 200));
        }
      });
    });

    return () => {
      scope.revert();
      map.replaceChildren();
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* The map drawn in beat 2. */}
      <svg ref={mapRef} className="absolute inset-0 h-full w-full overflow-visible" fill="none" stroke={AMBER} strokeOpacity={0.55} strokeWidth={1.5} />
      {SHAPES.map((s, i) => (
        <span key={i} data-chaos-shape className="absolute block" style={shapeStyle(s)} />
      ))}
      {/* Berit: the orange ball from her logo, and its scan ripple. */}
      <span ref={scanRef} className="absolute block h-16 w-16 -ml-8 -mt-8 rounded-full border-2 border-accent opacity-0" />
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
      {/* The story, one line at a time, under the animation. */}
      <span className="absolute inset-x-0 top-full mt-4 block h-7">
        {STORY.map((text, k) => (
          <span
            key={text}
            ref={(el) => {
              lineRefs.current[k] = el;
            }}
            className="absolute inset-x-0 top-0 text-center text-body-lg font-medium text-ink opacity-0"
          >
            {text}
          </span>
        ))}
      </span>
    </div>
  );
}
