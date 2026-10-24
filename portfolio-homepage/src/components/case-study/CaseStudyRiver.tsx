"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The case-study "river": the hero's Line (HeroLine.tsx) continued down a
 * case study. One brand-orange stroke meanders down the gutter between the
 * table of contents and the content, swinging gently from side to side
 * between sections, with a node at each section. It draws itself as you
 * scroll (the drawn tip follows a line just past the middle of the screen)
 * and each node lights up as the line reaches it, so the page reads as one
 * connected path rather than a stack of boxes.
 *
 * Lives inside the content column, absolutely positioned in the 56px
 * `gap-x-14` gutter to its left, and only on lg and up, where that gutter
 * exists. It measures the column's sections itself and re-measures whenever
 * any of them changes size (accordions open and close).
 *
 * Reduced motion: drawn in full with every node lit, and no scroll handler.
 */

const GUTTER = 56;
const MID = GUTTER / 2;
// How far the meander swings either side of the gutter's center.
const SWING = 20;
// The node sits level with the section's label/heading, not its top edge.
const NODE_OFFSET = 40;
// The drawn tip follows this fraction of the viewport's height.
const TIP = 0.6;
// The stroke's own length, so the dash math needs no runtime units.
const LEN = 1000;

type Layout = { height: number; nodes: number[]; d: string };

function buildPath(nodes: number[]) {
  if (nodes.length === 0) return "";
  let d = `M ${MID} 0 L ${MID} ${nodes[0]}`;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const span = b - a;
    const side = i % 2 === 0 ? MID + SWING : MID - SWING;
    d += ` C ${side} ${a + span * 0.35}, ${side} ${b - span * 0.35}, ${MID} ${b}`;
  }
  return d;
}

export default function CaseStudyRiver() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawnRef = useRef<SVGPathElement>(null);
  const echoRef = useRef<SVGPathElement>(null);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);
  // y → fraction of the path drawn, sampled once per layout.
  const samplesRef = useRef<{ y: number; f: number }[]>([]);
  const updateRef = useRef<() => void>(() => {});
  const [layout, setLayout] = useState<Layout>({ height: 0, nodes: [], d: "" });

  // Measure the sections and build the path.
  useEffect(() => {
    const wrap = wrapRef.current;
    const column = wrap?.parentElement;
    if (!wrap || !column) return;

    function measure() {
      const sections = Array.from(column!.children).filter((el) => el !== wrap) as HTMLElement[];
      const nodes = sections.map((el) => el.offsetTop + NODE_OFFSET);
      const height = column!.scrollHeight;
      const d = buildPath(nodes);
      setLayout((prev) => (prev.d === d && prev.height === height ? prev : { height, nodes, d }));
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(column);
    for (const el of Array.from(column.children)) if (el !== wrap) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sample the path whenever it changes, then redraw.
  useEffect(() => {
    const path = drawnRef.current;
    if (!path || !layout.d) return;
    const total = path.getTotalLength();
    const samples: { y: number; f: number }[] = [];
    const steps = 240;
    for (let i = 0; i <= steps; i++) {
      const f = i / steps;
      samples.push({ y: path.getPointAtLength(total * f).y, f });
    }
    samplesRef.current = samples;
    updateRef.current();
  }, [layout]);

  // Follow the scroll.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function drawTo(f: number, tipY: number) {
      const offset = (LEN * (1 - f)).toFixed(1);
      drawnRef.current?.setAttribute("stroke-dashoffset", offset);
      echoRef.current?.setAttribute("stroke-dashoffset", offset);
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        const lit = Number(node.getAttribute("cy")) <= tipY;
        if (lit) node.setAttribute("data-lit", "");
        else node.removeAttribute("data-lit");
      });
    }

    function update() {
      if (reduced) {
        drawTo(1, Infinity);
        return;
      }
      const samples = samplesRef.current;
      if (samples.length === 0) return;
      const tipY = window.innerHeight * TIP - wrap!.getBoundingClientRect().top;
      // The path only ever runs downward, so y is sorted: binary search.
      let lo = 0;
      let hi = samples.length - 1;
      if (tipY <= samples[0].y) return drawTo(0, tipY);
      if (tipY >= samples[hi].y) return drawTo(1, tipY);
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (samples[mid].y <= tipY) lo = mid;
        else hi = mid;
      }
      const a = samples[lo];
      const b = samples[hi];
      const f = a.f + ((b.f - a.f) * (tipY - a.y)) / Math.max(1e-6, b.y - a.y);
      drawTo(f, tipY);
    }
    updateRef.current = update;
    update();
    if (reduced) return;

    let frame: number | null = null;
    function onScroll() {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  nodeRefs.current.length = layout.nodes.length;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 hidden lg:block"
      style={{ left: -GUTTER, width: GUTTER, height: layout.height }}
    >
      {layout.d && (
        <svg
          width={GUTTER}
          height={layout.height}
          viewBox={`0 0 ${GUTTER} ${layout.height}`}
          className="block overflow-visible"
          fill="none"
          strokeLinecap="round"
        >
          {/* The course still ahead: a faint track. */}
          <path d={layout.d} stroke="#FC890C" strokeOpacity="0.18" strokeWidth="1.5" />
          {/* The drawn line, with the motif's thinner echo. */}
          <path
            ref={drawnRef}
            d={layout.d}
            pathLength={LEN}
            stroke="#FC890C"
            strokeWidth="2.4"
            strokeDasharray={LEN}
            strokeDashoffset={LEN}
          />
          <path
            ref={echoRef}
            d={layout.d}
            transform="translate(0.9 0)"
            pathLength={LEN}
            stroke="#FC890C"
            strokeWidth="1.2"
            strokeOpacity="0.7"
            strokeDasharray={LEN}
            strokeDashoffset={LEN}
          />
          {layout.nodes.map((y, i) => (
            <circle
              key={i}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className="river-node"
              cx={MID}
              cy={y}
              r="5"
              stroke="#FC890C"
              strokeWidth="2"
            />
          ))}
        </svg>
      )}
    </div>
  );
}
