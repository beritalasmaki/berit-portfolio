"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The case-study "river": the hero's Line (HeroLine.tsx) continued down a
 * case study as a shooting star you steer by scrolling.
 *
 Nothing is drawn ahead of the star. As you scroll, a star glides down the
 * gutter between the table of contents and the content (its head follows a
 * line just past the middle of the screen, on a soft spring, so it never
 * jumps), swinging gently from side to side between sections. A tapered tail
 * fades out behind it, and it leaves a thin orange line that fades in from
 * the top, where the river starts a little above the first section. On page
 * load it glides in from the top. Each section's node appears as the star
 * reaches it, so the page reads as one connected path.
 *
 * Lives inside the content column, absolutely positioned in the 56px
 * `gap-x-14` gutter to its left, and only on lg and up, where that gutter
 * exists. It measures the column's sections itself and re-measures whenever
 * any of them changes size (accordions open and close).
 *
 * The river runs downward only, so its gradients (the fade-in at the top,
 * the tail behind the star) are plain vertical ones.
 *
 * Reduced motion: drawn in full with every node shown, the star resting at
 * the end, and no scroll handler.
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
// Spring stiffness (per ms): the slow glide in on page load, then the
// quicker follow (settles in ~250ms).
const ENTER_SPRING = 0.004;
const FOLLOW_SPRING = 0.016;

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

  // Follow the scroll, smoothly.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Where along the path a given y is (the path only runs downward, so y
    // is sorted: binary search), and the point there.
    function at(y: number): Sample {
      const samples = samplesRef.current;
      let lo = 0;
      let hi = samples.length - 1;
      if (y <= samples[0].y) return samples[0];
      if (y >= samples[hi].y) return samples[hi];
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (samples[mid].y <= y) lo = mid;
        else hi = mid;
      }
      const a = samples[lo];
      const b = samples[hi];
      const r = (y - a.y) / Math.max(1e-6, b.y - a.y);
      return { x: a.x + (b.x - a.x) * r, y, f: a.f + (b.f - a.f) * r };
    }

    function drawTo(y: number) {
      const { x, f } = at(y);
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
        star.setAttribute("opacity", f <= 0.001 ? "0" : "1");
      }
      // Nodes only appear once the star has reached them.
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        if (Number(node.getAttribute("cy")) <= y + 1) node.setAttribute("data-lit", "");
        else node.removeAttribute("data-lit");
      });
    }

    function target() {
      const samples = samplesRef.current;
      const tipY = window.innerHeight * TIP - wrap!.getBoundingClientRect().top;
      return Math.max(samples[0].y, Math.min(samples[samples.length - 1].y, tipY));
    }

    // The star glides after the scroll position on a critically damped
    // spring (no overshoot, no jumps). On page load it starts at the top of
    // the river and glides down to where it belongs, more slowly, so the
    // line visibly draws itself in.
    let y: number | null = null;
    let v = 0;
    let entering = true;
    let frame: number | null = null;
    let last = 0;

    function step(now: number) {
      frame = null;
      if (samplesRef.current.length === 0) return;
      const goal = target();
      if (y === null) y = samplesRef.current[0].y;
      const dt = Math.min(50, last ? now - last : 16);
      last = now;
      const w = entering ? ENTER_SPRING : FOLLOW_SPRING;
      v += (w * w * (goal - y) - 2 * w * v) * dt;
      y += v * dt;
      drawTo(y);
      if (Math.abs(goal - y) < 0.5 && Math.abs(v) < 0.01) {
        y = goal;
        v = 0;
        entering = false;
        drawTo(y);
        last = 0;
        return;
      }
      frame = requestAnimationFrame(step);
    }

    function update() {
      const samples = samplesRef.current;
      if (samples.length === 0) return;
      if (reduced) return drawTo(samples[samples.length - 1].y);
      if (frame === null) frame = requestAnimationFrame(step);
    }
    updateRef.current = update;
    update();
    if (reduced) return;

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
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
              r="4"
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
