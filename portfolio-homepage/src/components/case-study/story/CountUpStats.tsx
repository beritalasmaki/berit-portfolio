"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

// Each number counts for this long, then the next one starts.
const DURATION = 700;

/** "10+" → { target: 10, prefix: "", suffix: "+" }. A value with no number in
 * it is shown as it is, without counting. */
function parse(value: string) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * The impact highlights, counting up like a stopwatch when the row scrolls
 * into view: one number at a time, in order, each stopping on its value.
 *
 * - The final values are rendered on the server, so without JavaScript (and
 *   for search engines) the numbers are simply there.
 * - Screen readers get the final value only (the ticking digits are hidden),
 *   so nothing is announced while counting.
 * - With "reduce motion" on, the numbers appear immediately (WCAG 2.3.3).
 * - An invisible copy of the final value holds the width, so the layout
 *   doesn't shift while digits change.
 */
export default function CountUpStats({ stats }: { stats: Stat[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  // null = show final values (server render, reduced motion, finished).
  const [shown, setShown] = useState<number[] | null>(null);
  // How many cards have started; cards not started yet keep their number hidden.
  const [started, setStarted] = useState(stats.length);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parsed = stats.map((stat) => parse(stat.value));
    setShown(parsed.map(() => 0));
    setStarted(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const index = Math.min(Math.floor(elapsed / DURATION), stats.length);
          setStarted(index + 1);
          setShown(
            parsed.map((p, i) => {
              if (!p) return 0;
              const t = Math.min(Math.max((elapsed - i * DURATION) / DURATION, 0), 1);
              return Math.round(easeOut(t) * p.target);
            })
          );
          if (elapsed < stats.length * DURATION) {
            frame = requestAnimationFrame(tick);
          } else {
            setShown(null);
            setStarted(stats.length);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
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
        const current = shown && p ? `${p.prefix}${shown[i]}${p.suffix}` : stat.value;
        const visible = i < started;
        return (
          <li key={stat.label} className="flex flex-col gap-3 rounded-[16px] bg-cream/50 p-card-pad">
            <span className="text-section-h2 text-ink tabular-nums">
              <span className="sr-only">{stat.value}</span>
              <span aria-hidden="true" className="inline-grid">
                <span className="invisible col-start-1 row-start-1">{stat.value}</span>
                <span
                  className={`col-start-1 row-start-1 transition-opacity duration-200 ${
                    visible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {current}
                </span>
              </span>
            </span>
            <span className="text-body-sm text-body text-pretty">{stat.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
