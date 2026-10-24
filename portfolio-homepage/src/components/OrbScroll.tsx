"use client";

import { useEffect } from "react";

/**
 * Lets the background orbs (GlowOrbs.tsx) sway a little as the page scrolls,
 * like light under water moving as you pass over it.
 *
 * Each orb's offset is a slow wave of the (smoothed) scroll position, so it
 * stays bounded however long the page is: at most ~40px for the small, near
 * orbs, less for the large, far ones (`data-sway`), each on its own phase.
 * It's set through the individual `translate` property, which combines with
 * the orbs' CSS drift (`transform`) and stretch (`scale`) animations.
 *
 * The scroll value eases toward the real one on rAF, so the sway glides on
 * after the scroll stops instead of stopping dead, and the loop sleeps once
 * it has caught up. Under reduced motion it does nothing.
 */

const AMPLITUDE = 40;
const EASE = 0.07;

export default function OrbScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".glow-orb"));
    if (orbs.length === 0) return;
    const sway = orbs.map((el) => Number(el.dataset.sway ?? 0.5));

    let current = window.scrollY;
    let frame: number | null = null;

    function apply() {
      orbs.forEach((el, i) => {
        const a = AMPLITUDE * sway[i];
        const phase = i * 1.7;
        const x = 0.5 * a * Math.cos(current / 1300 + phase);
        const y = a * Math.sin(current / 900 + phase);
        el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
    }

    function step() {
      const target = window.scrollY;
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.5) current = target;
      apply();
      frame = current === target ? null : requestAnimationFrame(step);
    }

    function onScroll() {
      if (frame === null) frame = requestAnimationFrame(step);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
