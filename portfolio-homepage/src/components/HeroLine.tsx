"use client";

import { useEffect, useRef } from "react";
import {
  drawSparkle,
  easeInOutSine,
  onSignatureDone,
  sampleCurve,
  type Point,
  type Sampled,
} from "@/lib/line";

/**
 * The hero's "Line": the second half of the hero's story (HeroChaos.tsx
 * tells the first half and drives this one with events).
 *
 * - `line:plan` ("Then we plan…"): a goal ring fades in at the top right and
 *   a faint dashed route, the plan, draws itself from the start to the goal.
 * - `line:metrics` ("We set up the systems and how we'll measure
 *   progress"): checkpoints appear along the route, where the story's dots
 *   land.
 * - `line:handoff` ("We move, learning and adjusting as we go"): a shooting
 *   star sets off along the route, lighting each checkpoint as it passes.
 *   Partway along, the real path bends away from the dashed plan and back
 *   onto it: a visible course correction. The line swells as it travels.
 * - Arrival ("And we reach the goal, together"): the goal ring fills and
 *   pulses, and the star rests in it, twinkling. Every so often a softer
 *   star runs the path again.
 *
 * Drawn on a canvas, because the tail is a gradient *along a curve* (width
 * and opacity grow toward the head), which SVG strokes can't do. Curves are
 * sampled into evenly spaced points (lib/line.ts), so the star moves at a
 * steady speed and its tail is many tiny segments, each a little brighter
 * and wider than the last.
 *
 * - `hero`: the large version in the hero's right column (lg and up).
 * - `strip`: a slim version for phones and tablets, under the lead, with no
 *   story layer: the star slithers through two loops (they fade out behind
 *   its tail, untangled) into a calm wave, setting off as the signature
 *   finishes.
 *
 * The loop only runs while the canvas is on screen. Reduced motion: the
 * final state is drawn once (plan, path, lit checkpoints, filled goal).
 */

type Variant = "hero" | "strip";

// Loops: a looping string (a prolate cycloid), two loops, moving right.
function coils(x0: number, y0: number, a: number, b: number): Point[] {
  const out: Point[] = [];
  for (let k = 0; k <= 16; k++) {
    const t = Math.PI + (k * Math.PI) / 4;
    out.push([x0 + a * t - b * Math.sin(t), y0 - b * Math.cos(t)]);
  }
  return out;
}

const SHAPES: Record<
  Variant,
  {
    w: number;
    h: number;
    /** Anchors of the path the star actually takes. */
    path: Point[];
    /** Anchor where the drawn line begins (anything before it is loops,
     * drawn only inside the star's fading tail). */
    riverFrom: number;
    /** The planned route, drawn dashed (hero only). */
    plan: Point[] | null;
    /** Anchors of `path` that are checkpoints (on the plan too). */
    checkpoints: number[];
    /** A target ring at the end, lit when the star arrives. */
    goal: boolean;
    scale: number;
    run: number;
  }
> = {
  // A calm, rising route to the goal, kept to the middle of the column (the
  // story's focus area). The real path follows the plan except between
  // "278,261" and "368,218", where it dips off course and comes back: learning
  // and adjusting as we go.
  hero: {
    w: 600,
    h: 420,
    path: [
      [120, 302], [178, 296], [228, 276], [278, 261], [313, 273], [348, 250],
      [368, 218], [401, 184], [441, 166], [460, 136], [479, 104],
    ],
    riverFrom: 0,
    plan: [
      [120, 302], [178, 296], [228, 276], [278, 261], [322, 233], [368, 218],
      [401, 184], [441, 166], [460, 136], [479, 104],
    ],
    checkpoints: [2, 3, 7, 9],
    goal: true,
    scale: 1,
    run: 5200,
  },
  strip: {
    w: 600,
    h: 120,
    path: [
      ...coils(14, 60, 9, 26),
      [215, 80], [280, 52], [350, 38], [420, 58], [490, 82], [550, 72], [586, 56],
    ],
    riverFrom: 16,
    plan: null,
    checkpoints: [],
    goal: false,
    scale: 0.7,
    run: 3600,
  },
};

const ORANGE = "252, 137, 12";
const GLOW = "255, 181, 102";

// Timing (ms).
const PLAN_DRAW = 1200; // The dashed plan draws itself.
const TICKS_IN = 500; // Checkpoints fade in.
const SETTLE = 700; // After arriving, the tail draws in.
const PULSE = 1100; // The goal's arrival pulse.
const CYCLE = 9000; // A softer star runs the path again every CYCLE.
const ECHO_RUN = 3400;
// Strip only: when to set off after the signature finishes.
const STRIP_PAUSE = 0;

// Lengths and widths, in viewBox units.
const TAIL = 300;
const ECHO_TAIL = 200;
const FADE_IN = 170;
const RIVER_WIDTH = 2.8;
// The line swells from GROW_FROM to full width over the star's run.
const GROW_FROM = 0.55;
const GOAL_R = 13;

type Ctx = CanvasRenderingContext2D;

/** Strokes samples i0..i1 as one path, at one width and colour. */
function strokeSpan(ctx: Ctx, s: Sampled, i0: number, i1: number, width: number, color: string) {
  if (i1 <= i0) return;
  ctx.beginPath();
  ctx.moveTo(s.x[i0], s.y[i0]);
  for (let i = i0 + 1; i <= i1; i++) ctx.lineTo(s.x[i], s.y[i]);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
}

/** Strokes samples i0..i1 segment by segment, styled by position u (0..1). */
function strokeRamp(
  ctx: Ctx,
  s: Sampled,
  i0: number,
  i1: number,
  style: (u: number) => [alpha: number, width: number],
  rgb: string
) {
  const n = i1 - i0;
  if (n <= 0) return;
  ctx.strokeStyle = `rgb(${rgb})`;
  for (let i = i0; i < i1; i++) {
    const [alpha, width] = style((i - i0) / n);
    if (alpha <= 0.004) continue;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(s.x[i], s.y[i]);
    ctx.lineTo(s.x[i + 1], s.y[i + 1]);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

/** A shooting star: a tail that tapers and fades out behind the head.
 * `g` scales its width (the line swells as it travels, see GROW_FROM). */
function comet(ctx: Ctx, s: Sampled, from: number, head: number, strength: number, k: number, g = 1) {
  strokeRamp(ctx, s, from, head, (u) => [0.12 * strength * u * u, (3 + 14 * u) * k * g], GLOW);
  strokeRamp(ctx, s, from, head, (u) => [strength * Math.pow(u, 1.6), (0.6 + 4.9 * u) * k * g], ORANGE);
}

export default function HeroLine({ variant = "hero", className = "" }: { variant?: Variant; className?: string }) {
  const shape = SHAPES[variant];
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const { w, h, path, riverFrom, plan, checkpoints, goal, scale: k, run: RUN } = SHAPES[variant];
    const s = sampleCurve(path);
    const ps = plan ? sampleCurve(plan) : null;
    const idx = (len: number) => Math.max(0, Math.min(s.x.length - 1, Math.round(len / s.step)));
    const last = s.x.length - 1;
    const M = idx(s.atAnchor[riverFrom]);
    const ticks = checkpoints.map((a) => idx(s.atAnchor[a]));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // For the story (HeroChaos.tsx): where the star starts, and where the
    // checkpoints are, so its pieces land exactly on them.
    wrap.dataset.startX = String(path[0][0] / w);
    wrap.dataset.startY = String(path[0][1] / h);
    wrap.dataset.checkpoints = checkpoints.map((a) => `${path[a][0] / w},${path[a][1] / h}`).join(";");

    function fit() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cw = wrap!.clientWidth;
      const ch = wrap!.clientHeight;
      if (cw === 0) return false;
      if (canvas!.width !== Math.round(cw * dpr)) {
        canvas!.width = Math.round(cw * dpr);
        canvas!.height = Math.round(ch * dpr);
      }
      const z = (cw / w) * dpr;
      ctx!.setTransform(z, 0, 0, z, 0, 0);
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineCap = "butt";
      ctx!.lineJoin = "round";
      return true;
    }

    // The plan: a faint dashed route, drawn up to fraction `u`.
    function planned(u: number) {
      if (!ps || u <= 0) return;
      const end = Math.round(u * (ps.x.length - 1));
      ctx!.save();
      ctx!.setLineDash([5 * k, 7 * k]);
      strokeSpan(ctx!, ps, 0, end, 1.6 * k, `rgba(${ORANGE}, 0.55)`);
      ctx!.restore();
    }

    // The line left behind, fading in from its start.
    function trail(to: number, g = 1) {
      const fade = Math.min(to, M + Math.round(FADE_IN / s.step));
      const width = RIVER_WIDTH * k * g;
      strokeRamp(ctx!, s, M, fade, (u) => [0.6 * u, width], ORANGE);
      strokeSpan(ctx!, s, fade, to, width, `rgba(${ORANGE}, 0.6)`);
    }

    // Checkpoints: hollow until the star reaches them, then filled.
    function checks(alpha: number, head: number) {
      if (alpha <= 0) return;
      ticks.forEach((at) => {
        const lit = head >= at;
        ctx!.globalAlpha = alpha;
        ctx!.beginPath();
        ctx!.arc(s.x[at], s.y[at], 4.5 * k, 0, Math.PI * 2);
        if (lit) {
          ctx!.fillStyle = `rgb(${ORANGE})`;
          ctx!.fill();
          ctx!.fillStyle = "#FFF4E6";
          ctx!.beginPath();
          ctx!.arc(s.x[at], s.y[at], 1.8 * k, 0, Math.PI * 2);
          ctx!.fill();
        } else {
          ctx!.fillStyle = "#FFFAF4";
          ctx!.fill();
          ctx!.strokeStyle = `rgb(${ORANGE})`;
          ctx!.lineWidth = 1.6 * k;
          ctx!.stroke();
        }
        ctx!.globalAlpha = 1;
      });
    }

    // The goal: an outlined ring at the end of the route, which fills and
    // pulses when the star arrives (`hit`: ms since arrival).
    function target(alpha: number, hit: number | null) {
      if (!goal || alpha <= 0) return;
      const x = s.x[last];
      const y = s.y[last];
      ctx!.globalAlpha = alpha;
      if (hit !== null) {
        ctx!.fillStyle = `rgba(${GLOW}, 0.45)`;
        ctx!.beginPath();
        ctx!.arc(x, y, GOAL_R * k, 0, Math.PI * 2);
        ctx!.fill();
        if (hit < PULSE) {
          const u = hit / PULSE;
          ctx!.strokeStyle = `rgba(${ORANGE}, ${(0.6 * (1 - u)).toFixed(3)})`;
          ctx!.lineWidth = 2 * k;
          ctx!.beginPath();
          ctx!.arc(x, y, (GOAL_R + 34 * Math.sin((u * Math.PI) / 2)) * k, 0, Math.PI * 2);
          ctx!.stroke();
        }
      }
      ctx!.strokeStyle = `rgba(${ORANGE}, ${hit === null ? 0.55 : 1})`;
      ctx!.lineWidth = (hit === null ? 2 : 3) * k;
      ctx!.beginPath();
      ctx!.arc(x, y, GOAL_R * k, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.globalAlpha = 1;
    }

    // Stage start times (performance.now()), set by the story's events.
    let planAt: number | null = null;
    let metricsAt: number | null = null;
    let runAt: number | null = null;

    function draw(now: number) {
      if (!fit()) return;
      const pu = planAt === null ? 0 : Math.min(1, (now - planAt) / PLAN_DRAW);
      planned(pu);
      const ta = metricsAt === null ? 0 : Math.min(1, (now - metricsAt) / TICKS_IN);

      if (runAt === null) {
        target(pu, null);
        checks(ta, -1);
        return;
      }

      const t = now - runAt;
      const p = Math.min(1, t / RUN);
      const head = idx(easeInOutSine(p) * s.length);
      const g = GROW_FROM + (1 - GROW_FROM) * easeInOutSine(p);
      target(goal ? Math.max(pu, Math.min(1, t / 400)) : 0, p < 1 ? null : t - RUN);
      if (head > M) trail(head, g);
      checks(Math.max(ta, Math.min(1, t / 400)), head);

      if (p < 1) {
        comet(ctx!, s, Math.max(0, head - Math.round(TAIL / s.step)), head, 1, k, g);
        drawSparkle(ctx!, s.x[head], s.y[head], k);
        return;
      }

      // Arrived: the tail draws itself in behind the resting star.
      const since = t - RUN;
      const settle = Math.min(1, since / SETTLE);
      if (settle < 1) {
        const from = Math.max(M, last - Math.round(((1 - settle) * TAIL) / s.step));
        comet(ctx!, s, from, last, 1 - settle, k);
      }

      // Every CYCLE, a softer star runs the path again.
      const phase = (since - SETTLE * 2) % CYCLE;
      let flare = 0;
      if (since > SETTLE * 2 && phase < ECHO_RUN) {
        const eh = M + Math.round(easeInOutSine(phase / ECHO_RUN) * (last - M));
        comet(ctx!, s, Math.max(M, eh - Math.round(ECHO_TAIL / s.step)), eh, 0.8, k);
        drawSparkle(ctx!, s.x[eh], s.y[eh], 0.65 * k);
        flare = Math.max(0, 1 - (ECHO_RUN - phase) / 400);
      }
      // The resting star twinkles gently, and brightens as the next arrives.
      const twinkle = 0.9 + 0.08 * Math.sin(t / 700) + 0.15 * flare;
      drawSparkle(ctx!, s.x[last], s.y[last], twinkle * k);
    }

    if (reduced) {
      const still = () => {
        if (!fit()) return;
        planned(1);
        target(1, PULSE);
        trail(last);
        checks(1, last);
        drawSparkle(ctx!, s.x[last], s.y[last], 0.9 * k);
      };
      still();
      const ro = new ResizeObserver(still);
      ro.observe(wrap);
      return () => ro.disconnect();
    }

    fit();
    let frame: number | null = null;
    let visible = false;
    const tick = (now: number) => {
      draw(now);
      frame = requestAnimationFrame(tick);
    };
    const play = () => {
      if (visible && planAt !== null && frame === null) frame = requestAnimationFrame(tick);
    };
    const onPlan = () => {
      if (planAt !== null) return;
      planAt = performance.now();
      play();
    };
    const onMetrics = () => {
      onPlan();
      if (metricsAt === null) metricsAt = performance.now();
    };
    const start = () => {
      onMetrics();
      if (runAt === null) runAt = performance.now();
    };
    // "Play again": back to before the story, an empty canvas.
    const reset = () => {
      planAt = metricsAt = runAt = null;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      fit();
    };

    // Only animate while visible.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    });
    io.observe(wrap);

    const timers: number[] = [];
    if (variant === "hero") {
      const flags = window as Window & { __lineHandoff?: boolean };
      if (flags.__lineHandoff) start();
      window.addEventListener("line:plan", onPlan);
      window.addEventListener("line:metrics", onMetrics);
      window.addEventListener("line:handoff", start);
      window.addEventListener("line:reset", reset);
      // No start of its own: the hero's story plays only when the visitor
      // presses its play button (HeroChaos.tsx).
    } else {
      onSignatureDone(() => timers.push(window.setTimeout(start, STRIP_PAUSE)));
    }

    return () => {
      io.disconnect();
      window.removeEventListener("line:plan", onPlan);
      window.removeEventListener("line:metrics", onMetrics);
      window.removeEventListener("line:handoff", start);
      window.removeEventListener("line:reset", reset);
      timers.forEach((id) => window.clearTimeout(id));
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [variant]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      data-hero-line={variant}
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${shape.w} / ${shape.h}` }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
