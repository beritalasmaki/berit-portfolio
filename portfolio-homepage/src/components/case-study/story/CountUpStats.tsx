"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

// Each number rolls for this long, then the next one starts.
const DURATION = 1800;
// A beat after the row settles into view, so the reader is looking at it.
const START_DELAY = 250;
// Share of the row that has to be in view before counting starts.
const VISIBLE = 0.6;
// Height of one digit cell, matching the number's line height.
const CELL = 1.05;

/** "10+" → { target: 10, prefix: "", suffix: "+" }. A value with no number in
 * it is shown as it is, without rolling. */
function parse(value: string) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

// Soft start and soft landing (ease-in-out sine), like a pen stroke.
const ease = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

/**
 * One digit position of a mechanical counter. `place` 0 = ones, 1 = tens…
 * The ones strip rolls continuously; a higher place only turns while the
 * place below goes from 9 to 0 (a carry), as on a real odometer. A leading
 * place grows in from zero width as the value reaches it, so "7" doesn't sit
 * next to an empty gap on its way to "10".
 */
function Digit({ value, place }: { value: number; place: number }) {
  const unit = Math.pow(10, place);
  const below = value / unit;
  const position = place === 0 ? below % 10 : (Math.floor(below) % 10) + Math.max(0, (below % 1) * 10 - 9);
  const presence = place === 0 ? 1 : Math.min(Math.max(value - (unit - 1), 0), 1);
  return (
    <span
      className="inline-block overflow-hidden align-top"
      style={{ height: `${CELL}em`, width: `${presence * 0.62}em`, opacity: presence }}
    >
      <span className="block" style={{ transform: `translateY(${-position * CELL}em)` }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit, i) => (
          <span key={i} className="block text-center" style={{ height: `${CELL}em`, lineHeight: CELL }}>
            {digit}
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * The impact highlights, rolling up like a mechanical counter when the row
 * scrolls into view: one number at a time, in order, each fading in while
 * it rolls and settling on its value with a soft ease-in-out.
 *
 * - The final values are rendered on the server, so without JavaScript (and
 *   for search engines) the numbers are simply there.
 * - Screen readers get the final value only; the rolling digits are hidden.
 * - With "reduce motion" on, the numbers appear immediately (WCAG 2.3.3).
 */
export default function CountUpStats({ stats }: { stats: Stat[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  // Current (fractional) value per stat while rolling; null = plain final values.
  const [values, setValues] = useState<number[] | null>(null);
  // Linear progress 0–1 per stat; drives the fade-in alongside the roll.
  const [progress, setProgress] = useState<number[]>(() => stats.map(() => 1));

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parsed = stats.map((stat) => parse(stat.value));
    setValues(parsed.map(() => 0));
    setProgress(parsed.map(() => 0));

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        // Not `isIntersecting`: the browser also reports the row the moment
        // its first pixel enters, which would start the count too early.
        if (!entries.some((entry) => entry.intersectionRatio >= VISIBLE)) return;
        observer.disconnect();
        const start = performance.now() + START_DELAY;
        const tick = (now: number) => {
          const elapsed = now - start;
          if (elapsed >= 0) {
            const ts = parsed.map((_, i) => Math.min(Math.max((elapsed - i * DURATION) / DURATION, 0), 1));
            setProgress(ts);
            setValues(parsed.map((p, i) => (p ? ease(ts[i]) * p.target : 0)));
          }
          if (elapsed < stats.length * DURATION) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      // Start once most of the row is inside the upper 85% of the screen. Not
      // `threshold: 1`: on a phone the stacked cards are taller than the
      // screen, so the whole row could never be in view.
      { threshold: VISIBLE, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(list);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stats]);

  return (
    <ul ref={listRef} className="m-0 grid list-none grid-cols-1 gap-grid-gap p-0 sm:grid-cols-3">
      {stats.map((stat, i) => {
        const p = parse(stat.value);
        const rolling = values !== null && p !== null;
        const places = p ? String(p.target).length : 0;
        return (
          <li key={stat.label} className="flex flex-col gap-3 rounded-[16px] bg-cream/50 p-card-pad">
            <span className="text-section-h2 text-ink tabular-nums" style={{ lineHeight: CELL }}>
              <span className="sr-only">{stat.value}</span>
              {rolling ? (
                <span
                  aria-hidden="true"
                  className="inline-flex select-none"
                  // Fades in with the roll: fully opaque by 60% of the count,
                  // so the number lands crisp.
                  style={{ opacity: ease(Math.min(progress[i] / 0.6, 1)) }}
                >
                  {p.prefix}
                  {Array.from({ length: places }, (_, k) => places - 1 - k).map((place) => (
                    <Digit key={place} value={values[i]} place={place} />
                  ))}
                  {p.suffix}
                </span>
              ) : (
                <span aria-hidden="true">{stat.value}</span>
              )}
            </span>
            <span className="text-body-sm text-body text-pretty">{stat.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
