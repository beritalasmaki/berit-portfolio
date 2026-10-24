"use client";

import { useEffect, useRef, useState } from "react";
import { drawSparkle, sampleCurve, signatureAnimation } from "@/lib/line";

/**
 * The handover from the logo to the hero's Line: as the signature finishes
 * drawing, a spark lifts off the tip of its last flourish (where the pen
 * leaves the paper), glides along a soft arc into the hero's right column
 * and, without stopping, becomes the shooting star there (HeroLine.tsx).
 * One continuous gesture from the signature to the river.
 *
 * - Route: it flicks up off the pen (the way the flourish ends), skims
 *   above the name, drops through the gap between the name and the nav, and
 *   swings past the headline's top-right corner into the right column. The
 *   name, nav and headline are measured live, so it stays clear of them at
 *   every desktop width.
 * - Speed: it lifts off slowly and accelerates, arriving at exactly the
 *   speed the star starts with (HeroLine publishes it), so the handover has
 *   no stop-and-restart.
 * - The start and end points are read live every frame, so scrolling during
 *   the flight is fine.
 *
 * Homepage only, lg and up (on smaller screens the flight would cross the
 * text; the strip's star just sets off after the signature). A fixed,
 * full-viewport canvas that exists only for the flight and unmounts after
 * the handover. Under reduced motion it never runs.
 */

// Ignite this long before the signature finishes drawing.
const IGNITE_LEAD = 200;
const IGNITE = 300;
// The flight takes 1.4–2.6s depending on the distance, with a lift-off
// curve of u^LIFT.
const FLIGHT_MIN = 1400;
const FLIGHT_MAX = 2600;
const LIFT = 1.6;
// The spark's tail, in CSS px.
const TAIL = 80;

const ORANGE = "252, 137, 12";

type P = [number, number];

export default function PenSpark() {
  const [active, setActive] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const tip = document.querySelector<SVGCircleElement>("[data-pen-tip]");
    const target = document.querySelector<HTMLElement>('[data-hero-line="hero"]');
    const handOff = () => {
      (window as Window & { __lineHandoff?: boolean }).__lineHandoff = true;
      window.dispatchEvent(new Event("line:handoff"));
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(min-width: 1024px)").matches
    ) {
      setActive(false);
      return;
    }
    if (!canvas || !ctx || !tip || !target) {
      // Nothing to fly between: let the star start where it is.
      handOff();
      setActive(false);
      return;
    }

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    function fit() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas!.width !== Math.round(w * dpr) || canvas!.height !== Math.round(h * dpr)) {
        canvas!.width = Math.round(w * dpr);
        canvas!.height = Math.round(h * dpr);
      }
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);
    }

    function from(): P {
      const ctm = tip!.ownerSVGElement?.getScreenCTM();
      const cx = tip!.cx.baseVal.value;
      const cy = tip!.cy.baseVal.value;
      if (!ctm) return [0, 0];
      return [ctm.a * cx + ctm.c * cy + ctm.e, ctm.b * cx + ctm.d * cy + ctm.f];
    }

    function to(): { p: P; speed: number; size: number } {
      const r = target!.getBoundingClientRect();
      return {
        p: [r.left + Number(target!.dataset.startX ?? 0) * r.width, r.top + Number(target!.dataset.startY ?? 0) * r.height],
        speed: Number(target!.dataset.startSpeed ?? 0.7),
        size: r.width / 600,
      };
    }

    // What the route has to stay clear of, measured live (text extents, not
    // block boxes).
    function textRect(el: Element | null) {
      if (!el) return null;
      const range = document.createRange();
      range.selectNodeContents(el);
      return range.getBoundingClientRect();
    }
    function obstacles() {
      const name = textRect(document.querySelector("header .truncate"));
      const navLinks = Array.from(document.querySelectorAll("header nav a, header nav button"))
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.width > 0);
      const header = document.querySelector("header")?.getBoundingClientRect();
      const h1 = textRect(document.getElementById("hero-heading"));
      return {
        nameRight: name?.right ?? 0,
        nameTop: name?.top ?? 0,
        navLeft: navLinks.length ? Math.min(...navLinks.map((r) => r.left)) : window.innerWidth,
        headerBottom: header?.bottom ?? 120,
        h1Right: h1?.right ?? 0,
        h1Top: h1?.top ?? 0,
      };
    }

    // The route, sampled by length so the spark's speed along it is exact.
    // It flicks up off the pen the way the flourish ends, skims above the
    // name, drops through the gap between the name and the nav, and swings
    // past the headline's top-right corner down into the star's first loop.
    function route(a: P, b: P) {
      const o = obstacles();
      const top = Math.max(12, Math.min(a[1], o.nameTop) - 20);
      const gap = (o.nameRight + o.navLeft) / 2;
      const s = sampleCurve([
        a,
        [a[0] + 30, top + 2],
        [o.nameRight - 10, top],
        [gap, o.headerBottom + 5],
        [Math.max(o.h1Right + 80, gap + 40), o.h1Top + 10],
        [b[0] - 60, b[1] - 35],
        b,
      ], 2);
      const at = (d: number): P => {
        const i = Math.max(0, Math.min(s.x.length - 1, Math.round(d / s.step)));
        return [s.x[i], s.y[i]];
      };
      return { length: s.length, at };
    }

    let frame: number | null = null;
    let ignitedAt: number | null = null;
    let done = false;
    let flight: number | undefined;

    function tick(now: number) {
      frame = requestAnimationFrame(tick);
      if (ignitedAt === null) {
        const anim = signatureAnimation();
        const timing = anim?.effect?.getComputedTiming();
        const end = Number(timing?.endTime ?? 0);
        const t = Number(anim?.currentTime ?? end);
        if (t < end - IGNITE_LEAD) return;
        ignitedAt = now;
      }
      fit();
      const a = from();
      const goal = to();
      const t = now - ignitedAt;
      // Small as it leaves the pen, so it clears the name beside the tip.
      const size = 0.45 * goal.size;

      if (t < IGNITE) {
        // The spark gathers at the pen tip.
        drawSparkle(ctx!, a[0], a[1], size * (t / IGNITE));
        return;
      }

      const r = route(a, goal.p);
      // Position = length * u^n: a slow lift-off that gathers speed. The
      // flight's duration is picked so the arrival speed (n * length /
      // duration) equals the speed the star sets off with.
      flight ??= Math.max(FLIGHT_MIN, Math.min(FLIGHT_MAX, (LIFT * r.length) / goal.speed));
      const n = Math.max(1, Math.min(2.5, (goal.speed * flight) / r.length));
      const u = Math.min(1, (t - IGNITE) / flight);
      const d = r.length * Math.pow(u, n);
      // A short tail, tapering and fading behind the spark.
      const steps = 24;
      const tail = Math.min(TAIL, d);
      ctx!.lineCap = "round";
      ctx!.strokeStyle = `rgb(${ORANGE})`;
      for (let i = 0; i < steps; i++) {
        const v = i / steps;
        const p0 = r.at(d - tail + tail * v);
        const p1 = r.at(d - tail + tail * (v + 1 / steps));
        ctx!.globalAlpha = Math.pow(v, 1.6);
        ctx!.lineWidth = 0.4 + 2.4 * v;
        ctx!.beginPath();
        ctx!.moveTo(p0[0], p0[1]);
        ctx!.lineTo(p1[0], p1[1]);
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
      // It grows to the hero star's size as it arrives.
      const head = r.at(d);
      drawSparkle(ctx!, head[0], head[1], size + (goal.size - size) * u);

      if (u >= 1 && !done) {
        done = true;
        handOff();
        // One more frame so the hero star is already drawn underneath.
        requestAnimationFrame(() => setActive(false));
      }
    }

    frame = requestAnimationFrame(tick);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
    />
  );
}
