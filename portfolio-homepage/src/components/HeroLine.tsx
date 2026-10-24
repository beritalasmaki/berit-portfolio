"use client";

import { useEffect, useRef } from "react";
import { easeInOutSine, sampleCurve, type Point, type Sampled } from "@/lib/line";

/**
 * The hero's "Line": the headline acted out as a shooting star.
 *
 * It opens on a faint coiled string (the complexity). A glowing star then
 * slithers through the coils like a snake, drawing as it goes, its tail
 * tapering and fading behind it, and the coils it has passed through are
 * gone. Out of the coils it glides into one calm river bend and comes to
 * rest pointing at the buttons, leaving a thin line that fades in from where
 * the tangle was (the untangling). Every so often another, softer star runs
 * down the river (moving forward).
 *
 * Drawn on a canvas, because the tail is a gradient *along a curve* (width
 * and opacity grow toward the head), which SVG strokes can't do. The curve
 * is sampled into evenly spaced points (lib/line.ts), so the star moves at a
 * steady speed with a gentle start and arrival, and the tail is drawn as many
 * tiny segments, each a little brighter and wider than the last.
 *
 * - `hero`: the large version in the hero's right column (lg and up).
 * - `strip`: a slim version for phones and tablets, under the lead.
 *
 * The loop only runs while the canvas is on screen. Reduced motion: the
 * settled river and its resting star are drawn once, and nothing moves.
 */

type Variant = "hero" | "strip";

// Coils: a looping string (a prolate cycloid), two loops, moving right.
function coils(x0: number, y0: number, a: number, b: number): Point[] {
  const out: Point[] = [];
  for (let k = 0; k <= 16; k++) {
    const t = Math.PI + (k * Math.PI) / 4;
    out.push([x0 + a * t - b * Math.sin(t), y0 - b * Math.cos(t)]);
  }
  return out;
}

const SHAPES: Record<Variant, { w: number; h: number; coil: Point[]; river: Point[]; scale: number }> = {
  hero: {
    w: 600,
    h: 420,
    coil: coils(40, 170, 14, 40),
    // One bend out to the right, then back toward the lower left (the
    // buttons).
    river: [
      [340, 192], [430, 150], [520, 148], [562, 200], [515, 258], [400, 280],
      [280, 298], [170, 328], [82, 362], [28, 392],
    ],
    scale: 1,
  },
  strip: {
    w: 600,
    h: 120,
    coil: coils(14, 60, 9, 26),
    river: [[215, 80], [280, 52], [350, 38], [420, 58], [490, 82], [550, 72], [586, 56]],
    scale: 0.7,
  },
};

const ORANGE = "252, 137, 12";
const GLOW = "255, 181, 102";

// Timing (ms). The star sets off once the H1 has faded in (Hero.tsx).
const START = 1500;
const RUN = 5200;
const SETTLE = 700;
// After that, a softer star runs down the river every CYCLE.
const CYCLE = 9000;
const ECHO_RUN = 3400;

// Lengths, in viewBox units.
const TAIL = 300;
const ECHO_TAIL = 200;
const FADE_IN = 170;

type Ctx = CanvasRenderingContext2D;

/** Strokes samples i0..i1 as one path, at one width and opacity. */
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

/** The star's head: a soft glow, four fine rays and a bright core. */
function sparkle(ctx: Ctx, x: number, y: number, scale: number) {
  const size = 1.3 * scale;
  const glow = ctx.createRadialGradient(x, y, 0, x, y, 18 * size);
  glow.addColorStop(0, `rgba(${GLOW}, 0.6)`);
  glow.addColorStop(1, `rgba(${GLOW}, 0)`);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, 18 * size, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 1.1 * size;
  for (const [dx, dy, len] of [[1, 0, 17], [-1, 0, 17], [0, 1, 17], [0, -1, 17], [0.7, 0.7, 7], [-0.7, 0.7, 7], [0.7, -0.7, 7], [-0.7, -0.7, 7]]) {
    const ex = x + dx * len * size;
    const ey = y + dy * len * size;
    const ray = ctx.createLinearGradient(x, y, ex, ey);
    ray.addColorStop(0, `rgba(${ORANGE}, 0.9)`);
    ray.addColorStop(1, `rgba(${ORANGE}, 0)`);
    ctx.strokeStyle = ray;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }
  ctx.fillStyle = `rgb(${ORANGE})`;
  ctx.beginPath();
  ctx.arc(x, y, 3 * size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#FFF4E6";
  ctx.beginPath();
  ctx.arc(x, y, 1.5 * size, 0, Math.PI * 2);
  ctx.fill();
}

/** A shooting star: a tail that tapers and fades out behind the head. */
function comet(ctx: Ctx, s: Sampled, from: number, head: number, strength: number, k: number) {
  // Glow under the tail, then the tail itself, widest and brightest at the head.
  strokeRamp(ctx, s, from, head, (u) => [0.12 * strength * u * u, (2 + 9 * u) * k], GLOW);
  strokeRamp(ctx, s, from, head, (u) => [strength * Math.pow(u, 1.6), (0.4 + 2.8 * u) * k], ORANGE);
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

    const { w, coil, river, scale: k } = SHAPES[variant];
    const s = sampleCurve([...coil, ...river]);
    const idx = (len: number) => Math.max(0, Math.min(s.x.length - 1, Math.round(len / s.step)));
    const last = s.x.length - 1;
    // Where the coils end and the river begins.
    const M = idx(s.atAnchor[coil.length - 1]);
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
      const z = (cw / w) * dpr;
      ctx!.setTransform(z, 0, 0, z, 0, 0);
      ctx!.clearRect(0, 0, w, SHAPES[variant].h);
      ctx!.lineCap = "butt";
      ctx!.lineJoin = "round";
      return true;
    }

    // The thin river left behind, fading in from where the coils were.
    function trail(to: number) {
      const fade = Math.min(to, M + Math.round(FADE_IN / s.step));
      strokeRamp(ctx!, s, M, fade, (u) => [0.6 * u, 1.6 * k], ORANGE);
      strokeSpan(ctx!, s, fade, to, 1.6 * k, `rgba(${ORANGE}, 0.6)`);
    }

    function draw(t: number) {
      if (!fit()) return;
      const run = Math.min(1, Math.max(0, (t - START) / RUN));
      const head = idx(easeInOutSine(run) * s.length);
      // The tangle still ahead of the star: faint and thin.
      if (head < M) strokeSpan(ctx!, s, head, M, 1.4 * k, `rgba(${ORANGE}, 0.28)`);
      if (head > M) trail(head);

      if (run < 1) {
        const from = Math.max(0, head - Math.round(TAIL / s.step));
        if (t > START) comet(ctx!, s, from, head, 1, k);
        if (t > START) sparkle(ctx!, s.x[head], s.y[head], k);
        return;
      }

      // Arrived: the tail draws itself in behind the resting star.
      const since = t - START - RUN;
      const settle = Math.min(1, since / SETTLE);
      if (settle < 1) {
        const from = Math.max(0, last - Math.round(((1 - settle) * TAIL) / s.step));
        comet(ctx!, s, from, last, 1 - settle, k);
      }

      // Every CYCLE, a softer star runs down the river.
      const phase = (since - SETTLE * 2) % CYCLE;
      let flare = 0;
      if (since > SETTLE * 2 && phase < ECHO_RUN) {
        const eh = M + Math.round(easeInOutSine(phase / ECHO_RUN) * (last - M));
        comet(ctx!, s, Math.max(M, eh - Math.round(ECHO_TAIL / s.step)), eh, 0.8, k);
        sparkle(ctx!, s.x[eh], s.y[eh], 0.65 * k);
        flare = Math.max(0, 1 - (ECHO_RUN - phase) / 400);
      }
      // The resting star twinkles gently, and brightens as the next arrives.
      const twinkle = 0.9 + 0.08 * Math.sin(t / 700) + 0.15 * flare;
      sparkle(ctx!, s.x[last], s.y[last], twinkle * k);
    }

    if (reduced) {
      const still = () => {
        if (!fit()) return;
        trail(last);
        sparkle(ctx!, s.x[last], s.y[last], 0.9 * k);
      };
      still();
      const ro = new ResizeObserver(still);
      ro.observe(wrap);
      return () => ro.disconnect();
    }

    const t0 = performance.now();
    let frame: number | null = null;
    const tick = (now: number) => {
      draw(now - t0);
      frame = requestAnimationFrame(tick);
    };
    // Only animate while visible.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && frame === null) frame = requestAnimationFrame(tick);
      else if (!entry.isIntersecting && frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    });
    io.observe(wrap);
    return () => {
      io.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [variant]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${shape.w} / ${shape.h}` }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
