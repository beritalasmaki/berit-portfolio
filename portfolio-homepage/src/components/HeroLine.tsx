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
 * The hero's "Line": the headline acted out as a shooting star.
 *
 * Nothing is drawn until the star sets off. On wide screens it's born where
 * the hero's story reaches clarity: its shapes, organized, merge into one
 * point (HeroChaos.tsx). Then the work heads for the goal: the star climbs a
 * calm, rising path past four milestones that light up as it reaches them,
 * each with a small label (Standards, System, DesignOps & DevOps, Vision),
 * to a target ring that's been waiting at the end (a clear goal), which
 * fills and pulses when it arrives. The line swells as it travels, thin as
 * it sets off and full width as it arrives. Every so often a softer star
 * runs the path again (moving forward).
 *
 * Drawn on a canvas, because the tail is a gradient *along a curve* (width
 * and opacity grow toward the head), which SVG strokes can't do. The curve
 * is sampled into evenly spaced points (lib/line.ts), so the star moves at a
 * steady speed, and the tail is drawn as many tiny segments, each a little
 * brighter and wider than the last.
 *
 * - `hero`: the large version in the hero's right column (lg and up). It
 *   starts on the chaos layer's `line:handoff` event, from rest at the merge
 *   point, and publishes that start point as data attributes for the shapes
 *   to gather at.
 * - `strip`: a slim version for phones and tablets, under the lead. There's
 *   no chaos layer there (it would sit over the text), so this one tells
 *   the short version: the star slithers through two loops (they fade out
 *   behind its tail, untangled) into a calm wave, setting off as the
 *   signature finishes.
 *
 * The loop only runs while the canvas is on screen. Reduced motion: the
 * settled river and its resting star are drawn once, and nothing moves.
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

/** A milestone on the hero's path: the anchor it sits on, and its label. */
type Milestone = { anchor: number; label: string; /** Label to the left of the dot. */ left?: boolean };

const SHAPES: Record<
  Variant,
  {
    w: number;
    h: number;
    /** Anchors of the whole path. */
    path: Point[];
    /** Anchor where the drawn river begins (anything before it is loops,
     * drawn only inside the star's fading tail). */
    riverFrom: number;
    milestones: Milestone[];
    /** A target ring at the end of the path, lit when the star arrives. */
    goal: boolean;
    scale: number;
    run: number;
  }
> = {
  // After the hero's story reaches clarity, the work heads for the goal: a
  // calm, rising path past the things that make it possible, ending at a
  // target. No loops here; after "Clarity" they read as a new tangle.
  hero: {
    w: 600,
    h: 420,
    path: [
      [50, 340], [130, 332], [200, 304], [270, 284], [330, 244], [395, 224],
      [440, 176], [496, 152], [522, 110], [548, 66],
    ],
    riverFrom: 0,
    milestones: [
      { anchor: 2, label: "Standards" },
      { anchor: 4, label: "System" },
      { anchor: 6, label: "DesignOps & DevOps" },
      { anchor: 8, label: "Vision", left: true },
    ],
    goal: true,
    scale: 1,
    run: 4200,
  },
  strip: {
    w: 600,
    h: 120,
    path: [
      ...coils(14, 60, 9, 26),
      [215, 80], [280, 52], [350, 38], [420, 58], [490, 82], [550, 72], [586, 56],
    ],
    riverFrom: 16,
    milestones: [],
    goal: false,
    scale: 0.7,
    run: 3600,
  },
};

// The goal ring's radius, and how long its arrival pulse runs (ms).
const GOAL_R = 13;
const PULSE = 1100;

const ORANGE = "252, 137, 12";
const GLOW = "255, 181, 102";

// Timing (ms), from the moment the star sets off.
const SETTLE = 700;
// After arriving, a softer star runs down the river every CYCLE.
const CYCLE = 9000;
const ECHO_RUN = 3400;
// Strip only: when to set off after the signature finishes. Immediately,
// so it starts with the headline, as the hero's star does.
const STRIP_PAUSE = 0;
// Hero only: start anyway if the chaos layer never hands over (e.g. it
// failed to load), this long after the signature finished. Later than the
// chaos story's own handover (~5.4s after the signature), so it never cuts
// in while the shapes are still being organized.
const HANDOFF_FALLBACK = 6500;

// Lengths, in viewBox units.
const TAIL = 300;
const ECHO_TAIL = 200;
const FADE_IN = 170;
// Widths: the river left behind, and how thin everything starts. The line
// swells from GROW_FROM to full width over the star's run.
const RIVER_WIDTH = 2.8;
const GROW_FROM = 0.55;

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
  // Glow under the tail, then the tail itself, widest and brightest at the head.
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

    const { w, h, path, riverFrom, milestones, goal, scale: k, run: RUN } = SHAPES[variant];
    const s = sampleCurve(path);
    const idx = (len: number) => Math.max(0, Math.min(s.x.length - 1, Math.round(len / s.step)));
    const last = s.x.length - 1;
    // Where the drawn river begins (after any loops).
    const M = idx(s.atAnchor[riverFrom]);
    // Each milestone's position along the path.
    const stones = milestones.map((m) => idx(s.atAnchor[m.anchor]));
    const labels = Array.from(wrap.querySelectorAll<HTMLElement>("[data-milestone]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function fit() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cw = wrap!.clientWidth;
      const ch = wrap!.clientHeight;
      if (cw === 0) return false;
      if (canvas!.width !== Math.round(cw * dpr)) {
        canvas!.width = Math.round(cw * dpr);
        canvas!.height = Math.round(ch * dpr);
      }
      // For the chaos layer (HeroChaos.tsx): where its shapes gather, so
      // they merge exactly where the star sets off.
      wrap!.dataset.startX = String(path[0][0] / w);
      wrap!.dataset.startY = String(path[0][1] / h);
      const z = (cw / w) * dpr;
      ctx!.setTransform(z, 0, 0, z, 0, 0);
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineCap = "butt";
      ctx!.lineJoin = "round";
      return true;
    }

    // The thin river left behind, fading in from where the loops were.
    function trail(to: number, g = 1) {
      const fade = Math.min(to, M + Math.round(FADE_IN / s.step));
      const width = RIVER_WIDTH * k * g;
      strokeRamp(ctx!, s, M, fade, (u) => [0.6 * u, width], ORANGE);
      strokeSpan(ctx!, s, fade, to, width, `rgba(${ORANGE}, 0.6)`);
    }

    // Milestones the star has reached: a lit dot, and its label fades in.
    function marks(head: number) {
      stones.forEach((at, i) => {
        if (head < at) {
          labels[i]?.removeAttribute("data-lit");
          return;
        }
        labels[i]?.setAttribute("data-lit", "");
        ctx!.fillStyle = `rgb(${ORANGE})`;
        ctx!.beginPath();
        ctx!.arc(s.x[at], s.y[at], 4.5 * k, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = "#FFF4E6";
        ctx!.beginPath();
        ctx!.arc(s.x[at], s.y[at], 1.8 * k, 0, Math.PI * 2);
        ctx!.fill();
      });
    }

    // The goal: an outlined target waiting at the end of the path (a clear
    // goal is part of the story, so it's visible ahead of the star), which
    // fills and pulses when the star arrives (`hit`: ms since arrival).
    function target(hit: number | null) {
      if (!goal) return;
      const x = s.x[last];
      const y = s.y[last];
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
      ctx!.strokeStyle = `rgba(${ORANGE}, ${hit === null ? 0.45 : 1})`;
      ctx!.lineWidth = (hit === null ? 2 : 3) * k;
      ctx!.beginPath();
      ctx!.arc(x, y, GOAL_R * k, 0, Math.PI * 2);
      ctx!.stroke();
    }

    function draw(t: number) {
      if (!fit()) return;
      const p = Math.min(1, t / RUN);
      const head = idx(easeInOutSine(p) * s.length);
      target(p < 1 ? null : t - RUN);
      marks(head);
      // The line swells as it travels: thin as it sets off, full width by
      // the time it arrives.
      const g = GROW_FROM + (1 - GROW_FROM) * easeInOutSine(p);
      // Only what the star has drawn exists: the river behind it, and the
      // loops only within its fading tail.
      if (head > M) trail(head, g);

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

      // Every CYCLE, a softer star runs down the river.
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
        target(PULSE);
        trail(last);
        marks(last);
        drawSparkle(ctx!, s.x[last], s.y[last], 0.9 * k);
      };
      still();
      const ro = new ResizeObserver(still);
      ro.observe(wrap);
      return () => ro.disconnect();
    }

    fit();
    let t0: number | null = null;
    let frame: number | null = null;
    let visible = false;
    const tick = (now: number) => {
      draw(now - t0!);
      frame = requestAnimationFrame(tick);
    };
    const play = () => {
      if (visible && t0 !== null && frame === null) frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (t0 !== null) return;
      t0 = performance.now();
      play();
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
    const onHandoff = () => start();
    if (variant === "hero") {
      if ((window as Window & { __lineHandoff?: boolean }).__lineHandoff) start();
      window.addEventListener("line:handoff", onHandoff);
      onSignatureDone(() => timers.push(window.setTimeout(start, HANDOFF_FALLBACK)));
    } else {
      onSignatureDone(() => timers.push(window.setTimeout(start, STRIP_PAUSE)));
    }

    return () => {
      io.disconnect();
      window.removeEventListener("line:handoff", onHandoff);
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
      {/* Milestone labels, faded in as the star reaches each one. */}
      {shape.milestones.map((m) => {
        const [x, y] = shape.path[m.anchor];
        return (
          <span
            key={m.label}
            data-milestone
            className="hero-milestone pointer-events-none absolute whitespace-nowrap font-mono-label text-mono-label uppercase text-muted"
            style={{
              left: `${(x / shape.w) * 100}%`,
              top: `${(y / shape.h) * 100}%`,
              translate: m.left ? "calc(-100% - 14px) -50%" : "14px 4px",
            }}
          >
            {m.label}
          </span>
        );
      })}
    </div>
  );
}
