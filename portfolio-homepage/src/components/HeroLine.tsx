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
 * Nothing is drawn until the star arrives. On wide screens it's the spark
 * that lifted off the end of the logo signature (PenSpark.tsx); it flies in,
 * and without stopping becomes this star. It slithers through two loops like
 * a snake, drawing them as it goes, and they fade out behind its tapered
 * tail (the complexity, untangled). Out of the loops it glides into one calm
 * river bend and comes to rest pointing at the buttons, leaving a thin line
 * that fades in from where the loops were. Every so often a softer star runs
 * down the river (moving forward).
 *
 * Drawn on a canvas, because the tail is a gradient *along a curve* (width
 * and opacity grow toward the head), which SVG strokes can't do. The curve
 * is sampled into evenly spaced points (lib/line.ts), so the star moves at a
 * steady speed, and the tail is drawn as many tiny segments, each a little
 * brighter and wider than the last.
 *
 * - `hero`: the large version in the hero's right column (lg and up). It
 *   starts on the spark's `line:handoff` event and carries the spark's speed
 *   (ease-out only), so there's no stop-and-restart at the handover. It
 *   publishes its start point and starting speed as data attributes for the
 *   spark to aim at.
 * - `strip`: a slim version for phones and tablets, under the lead. No
 *   spark flies over the text there: the star simply sets off from rest
 *   shortly after the signature finishes.
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

const SHAPES: Record<
  Variant,
  { w: number; h: number; coil: Point[]; river: Point[]; scale: number; run: number }
> = {
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
    run: 3400,
  },
  strip: {
    w: 600,
    h: 120,
    coil: coils(14, 60, 9, 26),
    river: [[215, 80], [280, 52], [350, 38], [420, 58], [490, 82], [550, 72], [586, 56]],
    scale: 0.7,
    run: 3600,
  },
};

const ORANGE = "252, 137, 12";
const GLOW = "255, 181, 102";

// Timing (ms), from the moment the star sets off.
const SETTLE = 700;
// After arriving, a softer star runs down the river every CYCLE.
const CYCLE = 9000;
const ECHO_RUN = 3400;
// Strip only: pause after the signature before the star sets off.
const STRIP_PAUSE = 400;
// Hero only: start anyway if the spark never hands over (e.g. it failed to
// find the logo), this long after the signature finished.
const HANDOFF_FALLBACK = 2600;

// Lengths, in viewBox units.
const TAIL = 300;
const ECHO_TAIL = 200;
const FADE_IN = 170;

const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);

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

    const { w, h, coil, river, scale: k, run: RUN } = SHAPES[variant];
    const s = sampleCurve([...coil, ...river]);
    const idx = (len: number) => Math.max(0, Math.min(s.x.length - 1, Math.round(len / s.step)));
    const last = s.x.length - 1;
    // Where the loops end and the river begins.
    const M = idx(s.atAnchor[coil.length - 1]);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The hero picks up the spark's momentum; the strip starts from rest.
    const travel = variant === "hero" ? easeOutSine : easeInOutSine;

    function fit() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cw = wrap!.clientWidth;
      const ch = wrap!.clientHeight;
      if (cw === 0) return false;
      if (canvas!.width !== Math.round(cw * dpr)) {
        canvas!.width = Math.round(cw * dpr);
        canvas!.height = Math.round(ch * dpr);
      }
      // For the spark (PenSpark.tsx): where to arrive, and how fast the star
      // sets off, in CSS px per ms.
      wrap!.dataset.startX = String(coil[0][0] / w);
      wrap!.dataset.startY = String(coil[0][1] / h);
      wrap!.dataset.startSpeed = String((s.length * (cw / w) * (Math.PI / 2)) / RUN);
      const z = (cw / w) * dpr;
      ctx!.setTransform(z, 0, 0, z, 0, 0);
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineCap = "butt";
      ctx!.lineJoin = "round";
      return true;
    }

    // The thin river left behind, fading in from where the loops were.
    function trail(to: number) {
      const fade = Math.min(to, M + Math.round(FADE_IN / s.step));
      strokeRamp(ctx!, s, M, fade, (u) => [0.6 * u, 1.6 * k], ORANGE);
      strokeSpan(ctx!, s, fade, to, 1.6 * k, `rgba(${ORANGE}, 0.6)`);
    }

    function draw(t: number) {
      if (!fit()) return;
      const p = Math.min(1, t / RUN);
      const head = idx(travel(p) * s.length);
      // Only what the star has drawn exists: the river behind it, and the
      // loops only within its fading tail.
      if (head > M) trail(head);

      if (p < 1) {
        comet(ctx!, s, Math.max(0, head - Math.round(TAIL / s.step)), head, 1, k);
        drawSparkle(ctx!, s.x[head], s.y[head], k);
        return;
      }

      // Arrived: the tail draws itself in behind the resting star.
      const since = t - RUN;
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
        trail(last);
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
    </div>
  );
}
