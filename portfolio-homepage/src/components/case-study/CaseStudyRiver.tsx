"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The case-study "river": the hero's Line (HeroLine.tsx) continued down a
 * case study as a shooting star you steer by scrolling.
 *
 * A thin, faint track meanders down the gutter between the table of contents
 * and the content, swinging gently from side to side between sections, with
 * a node at each section. As you scroll, a star slides along it (its head
 * follows a line just past the middle of the screen) with a tapered tail
 * fading out behind it, and leaves a thin orange line that fades in from the
 * top, where the river starts a little above the first section. Each node
 * lights up as the star reaches it, so the page reads as one connected path.
 *
 * Lives inside the content column, absolutely positioned in the 56px
 * `gap-x-14` gutter to its left, and only on lg and up, where that gutter
 * exists. It measures the column's sections itself and re-measures whenever
 * any of them changes size (accordions open and close).
 *
 * The river runs downward only, so its gradients (the fade-in at the top,
 * the tail behind the star) are plain vertical ones.
 *
 * Reduced motion: drawn in full with every node lit, the star resting at the
 * end, and no scroll handler.
 */

const GUTTER = 56;
const MID = GUTTER / 2;
// How far the meander swings either side of the gutter's center.
const SWING = 20;
// The river starts this far above the content column.
const LEAD = 110;
// The node sits level with the section's label/heading, not its top edge.
const NODE_OFFSET = 40;
// The star follows this fraction of the viewport's height.
const TIP = 0.6;
// The stroke's own length, so the dash math needs no runtime units.
const LEN = 1000;
// The star's tail, in px.
const TAIL = 150;

type Layout = { height: number; nodes: number[]; d: string };
type Sample = { x: number; y: number; f: number };

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
  const tailRef = useRef<SVGPathElement>(null);
  const tailGradRef = useRef<SVGLinearGradientElement>(null);
  const starRef = useRef<SVGGElement>(null);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);
  // Points along the path with the fraction drawn at each, sampled once per
  // layout.
  const samplesRef = useRef<Sample[]>([]);
  const totalRef = useRef(1);
  const updateRef = useRef<() => void>(() => {});
  const [layout, setLayout] = useState<Layout>({ height: 0, nodes: [], d: "" });

  // Measure the sections and build the path.
  useEffect(() => {
    const wrap = wrapRef.current;
    const column = wrap?.parentElement;
    if (!wrap || !column) return;

    function measure() {
      const sections = Array.from(column!.children).filter((el) => el !== wrap) as HTMLElement[];
      const nodes = sections.map((el) => LEAD + el.offsetTop + NODE_OFFSET);
      const height = LEAD + column!.scrollHeight;
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
    totalRef.current = total;
    const samples: Sample[] = [];
    const steps = 400;
    for (let i = 0; i <= steps; i++) {
      const f = i / steps;
      const p = path.getPointAtLength(total * f);
      samples.push({ x: p.x, y: p.y, f });
    }
    samplesRef.current = samples;
    updateRef.current();
  }, [layout]);

  // Follow the scroll.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function drawTo(f: number, x: number, y: number) {
      drawnRef.current?.setAttribute("stroke-dashoffset", (LEN * (1 - f)).toFixed(1));
      // The tail: a dash of TAIL px ending at the star, fading in from
      // transparent at its far end.
      const tail = (TAIL / totalRef.current) * LEN;
      const t = tailRef.current;
      if (t) {
        t.setAttribute("stroke-dasharray", `${tail.toFixed(1)} ${LEN * 2}`);
        t.setAttribute("stroke-dashoffset", (-(LEN * f - tail)).toFixed(1));
      }
      tailGradRef.current?.setAttribute("y1", (y - TAIL).toFixed(1));
      tailGradRef.current?.setAttribute("y2", y.toFixed(1));
      const star = starRef.current;
      if (star) {
        star.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
        star.setAttribute("opacity", f <= 0 ? "0" : "1");
      }
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        if (Number(node.getAttribute("cy")) <= y + 1) node.setAttribute("data-lit", "");
        else node.removeAttribute("data-lit");
      });
    }

    function update() {
      const samples = samplesRef.current;
      if (samples.length === 0) return;
      const end = samples[samples.length - 1];
      if (reduced) return drawTo(1, end.x, end.y);
      const tipY = window.innerHeight * TIP - wrap!.getBoundingClientRect().top;
      if (tipY <= samples[0].y) return drawTo(0, samples[0].x, samples[0].y);
      if (tipY >= end.y) return drawTo(1, end.x, end.y);
      // The path only ever runs downward, so y is sorted: binary search.
      let lo = 0;
      let hi = samples.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (samples[mid].y <= tipY) lo = mid;
        else hi = mid;
      }
      const a = samples[lo];
      const b = samples[hi];
      const r = (tipY - a.y) / Math.max(1e-6, b.y - a.y);
      drawTo(a.f + (b.f - a.f) * r, a.x + (b.x - a.x) * r, tipY);
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
      className="pointer-events-none absolute hidden lg:block"
      style={{ top: -LEAD, left: -GUTTER, width: GUTTER, height: layout.height }}
    >
      {layout.d && (
        <svg
          width={GUTTER}
          height={layout.height}
          viewBox={`0 0 ${GUTTER} ${layout.height}`}
          className="block overflow-visible"
          fill="none"
        >
          <defs>
            {/* The drawn line fades in from nothing at the river's start. */}
            <linearGradient id="river-fade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={LEAD + 60}>
              <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
              <stop offset="1" stopColor="#FC890C" stopOpacity="0.6" />
            </linearGradient>
            {/* The star's tail: transparent at its far end, full at the head.
                y1/y2 follow the star. */}
            <linearGradient ref={tailGradRef} id="river-tail" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={TAIL}>
              <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
              <stop offset="1" stopColor="#FC890C" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="river-glow">
              <stop offset="0" stopColor="#FFB566" stopOpacity="0.6" />
              <stop offset="1" stopColor="#FFB566" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="river-ray-x" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FC890C" stopOpacity="0.9" />
              <stop offset="1" stopColor="#FC890C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="river-ray-y" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FC890C" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FC890C" stopOpacity="0.9" />
              <stop offset="1" stopColor="#FC890C" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* The course still ahead: a thin, faint track. */}
          <path d={layout.d} stroke="#FC890C" strokeOpacity="0.22" strokeWidth="1" />
          {/* What the star has drawn so far. */}
          <path
            ref={drawnRef}
            d={layout.d}
            pathLength={LEN}
            stroke="url(#river-fade)"
            strokeWidth="1.6"
            strokeDasharray={LEN}
            strokeDashoffset={LEN}
          />
          {/* The tail, wider and brighter toward the head. */}
          <path
            ref={tailRef}
            d={layout.d}
            pathLength={LEN}
            stroke="url(#river-tail)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`0 ${LEN * 2}`}
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
              strokeWidth="1.5"
            />
          ))}
          {/* The star: a soft glow, four fine rays and a bright core. */}
          <g ref={starRef} opacity="0">
            <circle r="20" fill="url(#river-glow)" />
            <rect x="-20" y="-0.6" width="40" height="1.2" fill="url(#river-ray-x)" />
            <rect x="-0.6" y="-20" width="1.2" height="40" fill="url(#river-ray-y)" />
            <circle r="3.5" fill="#FC890C" />
            <circle r="1.8" fill="#FFF4E6" />
          </g>
        </svg>
      )}
    </div>
  );
}
