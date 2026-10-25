"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createScope, createTimeline, stagger, utils } from "animejs";
import { BLOB_PATH } from "./Logo";

/**
 * The hero's story: how Berit works, told beside the headline in six beats,
 * each with one line of text above the animation.
 *
 * The visitor decides whether to watch it. On load the hero shows only the
 * first beat, which keeps going: the tangle wanders on, with its line of
 * text, and a play button sits in the middle of it, "Turn chaos into
 * clarity". Pressing it plays the rest of the story from where the tangle
 * is.
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
 *    stays, and a quiet "Play again" link appears under the animation: it
 *    clears the route (`line:reset`), brings the tangle back and plays the
 *    story again on its own.
 *
 * Animated with Anime.js, inside a scope that's reverted on unmount: an
 * intro timeline on the page's clock (CSS delays count from load, so the
 * tangle arrives with the headline whenever hydration finishes), endless
 * wandering moves, and the story timeline as a scope method (`play`), run
 * from the click. Every tangle move is clamped to the column, so nothing
 * crosses the text.
 *
 * Story timing is unhurried on purpose: each beat holds 5.6–5.8s, so its
 * line is fully on screen for 3.5s or more, long enough to read and take
 * in, and the star's run takes 5.2s; about 22s from the click to the goal.
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
// The story, one line per beat. The *starred* word is the beat's key word,
// set in the brand orange.
const STORY = [
  "Every project starts in a *tangle.*",
  "First, I *map* where things stand.",
  "Then we *plan* what’s needed, the system and the goal.",
  "We set up the *systems* and how we’ll measure progress.",
  "We *move,* learning and adjusting as we go.",
  "And we reach the *goal,* together.",
];

// The tangle (and the play button) come in with the headline: T0 is on the
// page's clock (Hero.tsx delays: H1 at 1650ms, timed to the logo's
// signature).
const T0 = 1550;
const TANGLE = 0;
// The story's beats (ms) once the visitor presses play. Unhurried on
// purpose: each line is on screen, fully in, for 3.5s+ before the next
// (time to read it and take it in), and each beat's picture plays out while
// it's read.
const MAP = 0;
const PLAN = 5800;
const METRICS = 11600;
const MOVE = 17200; // The star sets off…
const GOAL = MOVE + 5200; // …and arrives (HeroLine's run).

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const replayRef = useRef<HTMLButtonElement>(null);
  const playRef = useRef<(() => void) | null>(null);
  const againRef = useRef<(() => void) | null>(null);
  // Each "Play again" rebuilds the story from scratch (the scope reverts
  // everything it animated), then plays it without waiting for the button.
  const [run, setRun] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const ball = ballRef.current;
    const scan = scanRef.current;
    const map = mapRef.current;
    const bloom = bloomRef.current;
    const button = buttonRef.current;
    const replay = replayRef.current;
    if (!root || !ball || !scan || !map || !bloom || !button || !replay) return;
    const lines = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
    const say = (name: string) => () => {
      if (name === "line:handoff") (window as Window & { __lineHandoff?: boolean }).__lineHandoff = true;
      window.dispatchEvent(new Event(name));
    };
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Nothing moves: only the story's ending shows, under the finished
      // route that HeroLine draws.
      lines[lines.length - 1]
        .querySelectorAll<HTMLElement>("[data-word]")
        .forEach((word) => (word.style.opacity = "1"));
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
            animate(el, { strokeDashoffset: [d, 0], duration: 700, delay: far * 2.2, ease: "outCubic" });
          });
      });
    }

    // A story line drifts in word by word out of a soft blur, like a breath
    // of wind, and blows away the same way, onward, when the next arrives.
    const words = (k: number) => lines[k].querySelectorAll<HTMLElement>("[data-word]");
    const lineIn = () => ({
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0px)"],
      x: [-16, 0],
      duration: 800,
      delay: stagger(40),
      ease: "outCubic",
    });
    const lineOut = {
      opacity: 0,
      filter: "blur(10px)",
      x: 18,
      y: -6,
      duration: 650,
      delay: stagger(35),
      ease: "inQuad",
    };

    // The tangle keeps wandering until the visitor chooses to play: each
    // shape drifts to a new random spot, then the next, and so on.
    let playing = false;
    const wanders: Array<{ pause: () => unknown } | undefined> = [];
    function wander(el: HTMLElement, i: number) {
      if (playing) return;
      wanders[i] = animate(el, {
        x: roam(i, 0),
        y: roam(i, 1),
        rotate: utils.random(-200, 200),
        scale: utils.random(80, 125) / 100,
        duration: utils.random(1600, 2400),
        ease: "inOutSine",
        onComplete: () => wander(el, i),
      });
    }

    // The first time, on the page's clock; on a replay, from now.
    const t0 = run === 0 ? T0 : performance.now();
    const fromLoad = (ms: number) => Math.max(0, t0 + ms - performance.now());

    const scope = createScope({ root }).add(() => {
      // On load, with the headline (on the page's clock): the shapes pop in
      // and start wandering, the first line of the story drifts in, and the
      // play button appears in the middle of the tangle.
      createTimeline()
        .add(els, { opacity: [0, 1], scale: [0.3, 1], duration: 650, delay: stagger(50), ease: "outBack" }, fromLoad(TANGLE))
        .call(() => els.forEach((el, i) => wander(el, i)), fromLoad(TANGLE + 500))
        .add(words(0), lineIn(), fromLoad(TANGLE + 150));
      // The first time the visitor chooses; on a replay the tangle has a
      // moment, then the story plays.
      if (run === 0) {
        createTimeline().add(button, { opacity: [0, 1], scale: [0.9, 1], duration: 700, ease: "outCubic" }, fromLoad(TANGLE + 1000));
      } else {
        button.style.visibility = "hidden";
        createTimeline().call(() => playRef.current?.(), fromLoad(TANGLE + 3000));
      }
    });

    // The story, from the moment the visitor presses play. Times (ms) are
    // from the click.
    scope.add("play", () => {
      const tl = createTimeline();

      // The button gives way.
      tl.add(button, { opacity: 0, scale: 0.92, duration: 400, ease: "inCubic" }, 0);
      tl.call(() => (button.style.visibility = "hidden"), 420);

      // 2. Map: Berit's ball lands, the shapes hold still, a scan ripples
      //    out and the map draws itself between them.
      tl.add(ball, { opacity: [0, 1], scale: [0, 1], y: [-40, 0], duration: 900, ease: "outBack" }, MAP + 200);
      tl.add(scan, { opacity: [0.7, 0], scale: [0.6, 11], duration: 2000, ease: "outCubic" }, MAP + 650);
      tl.call(drawMap, MAP + 750);

      // 3. Plan: the map fades, the shapes sort into rows, and the goal and
      //    the planned route appear.
      tl.add(map, { opacity: [1, 0], duration: 600, ease: "inOutSine" }, PLAN);
      tl.add(els, {
        x: (_el: unknown, i = 0) => rowSpot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => rowSpot[i][1] - centres[i][1],
        rotate: 0,
        scale: (_el: unknown, i = 0) => ROW_SIZE / sizes[i],
        duration: 1200,
        delay: stagger(45),
        ease: "inOutCubic",
      }, PLAN + 100);
      tl.call(say("line:plan"), PLAN + 400);

      // 4. Systems and metrics: the rows deal out onto the route as small
      //    dots, becoming its checkpoints; the ball moves to the start.
      tl.add(els, {
        x: (_el: unknown, i = 0) => spot[i][0] - centres[i][0],
        y: (_el: unknown, i = 0) => spot[i][1] - centres[i][1],
        scale: (_el: unknown, i = 0) => 10 / sizes[i],
        borderRadius: "50%",
        backgroundColor: ORANGE,
        borderColor: ORANGE,
        duration: 1300,
        delay: (_el: unknown, i = 0) => order.indexOf(i) * 55,
        ease: "inOutCubic",
      }, METRICS);
      tl.call(say("line:metrics"), METRICS + 1650);
      tl.add(els, { opacity: 0, duration: 400, ease: "inSine" }, METRICS + 1700);
      tl.add(ball, { x: sx - ballX, y: sy - ballY, scale: 0.45, duration: 1300, ease: "inOutCubic" }, METRICS + 2600);

      // 5. Move: the ball blooms into the shooting star.
      tl.add(ball, { opacity: 0, scale: 0.15, duration: 500, ease: "inCubic" }, MOVE - 400);
      tl.add(bloom, { opacity: [0, 1, 0], scale: [0.3, 1.5, 1.9], duration: 1100, ease: "outSine" }, MOVE - 400);
      tl.call(say("line:handoff"), MOVE);

      // The story's lines move on with the beats; the last one stays.
      const beats = [MAP, PLAN, METRICS, MOVE, GOAL];
      tl.add(words(0), lineOut, 0);
      beats.forEach((t, j) => {
        const k = j + 1;
        tl.add(words(k), lineIn(), t + 250);
        if (j < beats.length - 1) tl.add(words(k), lineOut, beats[j + 1] - 600);
      });

      // 6. At the goal: the way to watch it again.
      tl.call(() => (replay.style.visibility = "visible"), GOAL + 1400);
      tl.add(replay, { opacity: [0, 1], y: [6, 0], duration: 700, ease: "outCubic" }, GOAL + 1400);
    });

    // Play again: the ending blows away with the route, then everything is
    // rebuilt and the story runs once more.
    let leaving = false;
    againRef.current = () => {
      if (leaving) return;
      leaving = true;
      createTimeline()
        .add(words(lines.length - 1), lineOut, 0)
        .add(replay, { opacity: 0, duration: 300, ease: "inQuad" }, 0)
        .add(line ? [line] : [], { opacity: 0, duration: 500, ease: "inQuad" }, 0)
        .call(() => setRun((r) => r + 1), 650);
    };

    playRef.current = () => {
      if (playing) return;
      playing = true;
      // The tangle stops where it is; the story takes it from there.
      wanders.forEach((a) => a?.pause());
      scope.methods.play();
    };

    return () => {
      playing = true;
      wanders.forEach((a) => a?.pause());
      playRef.current = null;
      againRef.current = null;
      scope.revert();
      map.replaceChildren();
      button.style.visibility = "";
      replay.style.visibility = "hidden";
      replay.style.opacity = "0";
      if (line) line.style.opacity = "";
      (window as Window & { __lineHandoff?: boolean }).__lineHandoff = false;
      window.dispatchEvent(new Event("line:reset"));
    };
  }, [run]);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0">
      {/* The map drawn in beat 2. */}
      <svg ref={mapRef} aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" fill="none" stroke={AMBER} strokeOpacity={0.55} strokeWidth={1.5} />
      {SHAPES.map((s, i) => (
        <span key={i} aria-hidden="true" data-chaos-shape className="absolute block" style={shapeStyle(s)} />
      ))}
      {/* Berit: the orange ball from her logo, and its scan ripple. */}
      <span ref={scanRef} aria-hidden="true" className="absolute block h-16 w-16 -ml-8 -mt-8 rounded-full border-2 border-accent opacity-0" />
      <div ref={ballRef} aria-hidden="true" className="absolute -ml-9 -mt-[34px] opacity-0">
        <svg viewBox="0 0 114 108" width="72" height="68" className="block overflow-visible">
          <path d={BLOB_PATH} fill="#FF890C" />
        </svg>
      </div>
      <span
        ref={bloomRef}
        aria-hidden="true"
        className="absolute block h-12 w-12 -ml-6 -mt-6 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,181,102,0.9) 0%, rgba(252,137,12,0.35) 40%, rgba(252,137,12,0) 70%)",
        }}
      />
      {/* The visitor chooses whether to watch: the story plays from here. */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => playRef.current?.()}
          className="hero-play glass-button-ink pointer-events-auto relative inline-flex items-center gap-3 rounded-pill py-2.5 pl-2.5 pr-6 text-nav font-semibold text-white opacity-0 hover:text-white focus-visible:text-white focus-visible:outline-white"
        >
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-accent">
            <svg viewBox="0 0 16 16" width="14" height="14" className="ml-0.5 block">
              <path d="M4 2.5v11l9.5-5.5z" fill="white" />
            </svg>
          </span>
          Turn chaos into clarity
        </button>
      </div>
      {/* After the goal: watch it again. */}
      <div className="absolute inset-x-0 top-full mt-4 flex justify-center">
        <button
          ref={replayRef}
          type="button"
          onClick={() => againRef.current?.()}
          style={{ visibility: "hidden" }}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-nav font-semibold text-accent-dark opacity-0 hover:text-ink focus-visible:outline-accent"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" className="block" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9" />
            <path d="M2.5 2.5v3h3" />
          </svg>
          Play again
        </button>
      </div>
      {/* The story, one line at a time, above the animation where it's
          seen first: a glowing dot like the star, then the line, its key
          word in the brand orange. Lines anchor at the bottom, so on a
          narrower column a long one wraps upward, never into the animation.
          Every piece animates on its own (see the timeline above). */}
      <span aria-hidden="true" className="absolute inset-x-0 bottom-full mb-6 block h-8">
        {STORY.map((text, k) => (
          <span
            key={text}
            ref={(el) => {
              lineRefs.current[k] = el;
            }}
            className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center text-center text-[clamp(17px,1.35vw,20px)] font-semibold leading-8 tracking-[-0.01em] text-ink"
          >
            <span
              data-word
              className="mr-3 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-accent opacity-0 shadow-[0_0_12px_3px_rgba(252,137,12,0.45)]"
            />
            {text.split(" ").map((word, j) => {
              const key = word.startsWith("*");
              return (
                <span
                  key={j}
                  data-word
                  className={`mr-[0.28em] inline-block opacity-0 last:mr-0 ${key ? "text-accent-dark" : ""}`}
                >
                  {word.replace(/\*/g, "")}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </div>
  );
}
