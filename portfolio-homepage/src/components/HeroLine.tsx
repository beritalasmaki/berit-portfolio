"use client";

import { useEffect, useRef } from "react";
import { easeOutSine, lerpPoints, throughAnchors, toPath, type Point } from "@/lib/morph";

/**
 * The hero's "Line": the headline acted out. It arrives as a sharp, erratic
 * tangle (the complexity), then softens and unwinds into one calm,
 * meandering path, like a river finding its course (the untangling), and
 * keeps flowing gently left → right after that (moving forward). It
 * replaced an aurora and, before that, rolling blobs, neither of which told
 * the headline's story.
 *
 * It's the same stroke as the rest of the motif (brand orange, round caps,
 * a thinner echo slightly out of register, like the logo signature), and the
 * case-study river (CaseStudyRiver.tsx) continues it down those pages.
 *
 * - `hero`: the large version in the hero's right column (lg and up). The
 *   meander sweeps right, bends back, and leaves toward the lower left, where
 *   the buttons are.
 * - `strip`: a slim horizontal version for phones and tablets, where the
 *   right column is hidden; the tangle on the left unwinds into a wave that
 *   runs across the screen.
 *
 * The morph is interpolated in JS on rAF (see lib/morph.ts for why). The
 * rAF loop only runs while the line is on screen.
 *
 * Reduced motion: both states ship in the markup and CSS shows only the
 * settled meander (.line-resolved in globals.css), from the very first
 * paint; the effect bails out before starting any loop.
 */

type Variant = "hero" | "strip";

const SHAPES: Record<Variant, { w: number; h: number; tangle: Point[]; meander: Point[]; wave: number }> = {
  hero: {
    w: 600,
    h: 420,
    // Crossings, reversals and corners, bunched up at the upper left.
    tangle: [
      [40, 55], [270, 110], [130, 235], [340, 170], [190, 60], [170, 280],
      [370, 250], [100, 150], [310, 300], [230, 130], [250, 215],
    ],
    // Two soft river bends, ending toward the lower left (the buttons).
    meander: [
      [40, 70], [150, 36], [290, 78], [430, 60], [548, 120], [520, 196],
      [380, 214], [250, 232], [150, 276], [80, 326], [24, 378],
    ],
    wave: 6,
  },
  strip: {
    w: 600,
    h: 120,
    tangle: [
      [16, 62], [150, 20], [60, 100], [220, 40], [110, 30], [90, 104],
      [250, 90], [40, 50], [200, 108], [130, 60], [170, 70],
    ],
    meander: [
      [16, 62], [70, 42], [130, 68], [190, 88], [250, 66], [310, 42],
      [370, 62], [430, 86], [490, 70], [545, 50], [584, 58],
    ],
    wave: 4,
  },
};

// Wait for the H1 to have faded in (it starts at 800ms, see Hero.tsx), then
// unwind slowly enough to be watched.
const START_MS = 1500;
const MORPH_MS = 3000;
// The ongoing flow: a wave travelling along the line, left → right.
const WAVE_PERIOD_MS = 9000;
const WAVE_K = 0.018;

function withWave(points: number[], amp: number, phase: number) {
  if (amp === 0) return points;
  const out = points.slice();
  for (let i = 0; i < out.length; i += 2) out[i + 1] += amp * Math.sin(out[i] * WAVE_K - phase);
  return out;
}

export default function HeroLine({ variant = "hero", className = "" }: { variant?: Variant; className?: string }) {
  const shape = SHAPES[variant];
  // Sharp corners for the tangle (zero-length handles), smooth for the meander.
  const tangle = throughAnchors(shape.tangle, 0);
  const meander = throughAnchors(shape.meander, 1);
  const end = shape.meander[shape.meander.length - 1];
  const tangleEnd = shape.tangle[shape.tangle.length - 1];

  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const mainRef = useRef<SVGPathElement>(null);
  const echoRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const from = throughAnchors(SHAPES[variant].tangle, 0);
    const to = throughAnchors(SHAPES[variant].meander, 1);
    const amp = SHAPES[variant].wave;
    const t0 = performance.now() + START_MS;
    let frame: number | null = null;

    function draw(now: number) {
      const p = easeOutSine(Math.min(1, Math.max(0, (now - t0) / MORPH_MS)));
      const phase = ((now - t0) / WAVE_PERIOD_MS) * Math.PI * 2;
      const points = withWave(lerpPoints(from, to, p), amp * p, phase);
      const d = toPath(points);
      for (const path of pathRefs.current) path?.setAttribute("d", d);
      echoRef.current?.setAttribute("d", toPath(points, 0.9));
      // The stroke relaxes as it untangles: slightly heavier while it's a
      // knot, and the soft echo only fades in once it's flowing.
      mainRef.current?.setAttribute("stroke-width", (3 - 0.6 * p).toFixed(2));
      echoRef.current?.setAttribute("opacity", (0.7 * p).toFixed(3));
      const dot = dotRef.current;
      if (dot) {
        dot.setAttribute("cx", points[points.length - 2].toFixed(1));
        dot.setAttribute("cy", points[points.length - 1].toFixed(1));
        dot.setAttribute("opacity", p.toFixed(3));
      }
      frame = requestAnimationFrame(draw);
    }

    // Only animate while visible: no reason to spend frames on a line
    // nobody can see once the hero has scrolled away.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && frame === null) {
        frame = requestAnimationFrame(draw);
      } else if (!entry.isIntersecting && frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    });
    observer.observe(svg);
    return () => {
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [variant]);

  const tangleD = toPath(tangle);
  const meanderD = toPath(meander);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${shape.w} ${shape.h}`}
      aria-hidden="true"
      focusable="false"
      className={`block w-full h-auto overflow-visible ${className}`}
    >
      <g className="line-animated" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Soft glow: two wide, faint strokes under the line (no blur
            filter, which would re-rasterize on every frame of the morph). */}
        <path ref={(el) => { pathRefs.current[0] = el; }} d={tangleD} stroke="#FFB566" strokeWidth="18" opacity="0.1" />
        <path ref={(el) => { pathRefs.current[1] = el; }} d={tangleD} stroke="#FFB566" strokeWidth="8" opacity="0.16" />
        <path ref={(el) => { mainRef.current = el; pathRefs.current[2] = el; }} d={tangleD} stroke="#FC890C" strokeWidth="3" />
        <path ref={echoRef} d={toPath(tangle, 0.9)} stroke="#FC890C" strokeWidth="1.2" opacity="0" />
        {/* A glint of light running along the line, downstream. */}
        <path
          ref={(el) => { pathRefs.current[3] = el; }}
          className="hero-line-glint"
          d={tangleD}
          pathLength={100}
          stroke="#FFF1DF"
          strokeWidth="2"
        />
        <circle ref={dotRef} cx={tangleEnd[0]} cy={tangleEnd[1]} r="4.5" fill="#FC890C" opacity="0" />
      </g>
      <g className="line-resolved" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={meanderD} stroke="#FFB566" strokeWidth="18" opacity="0.1" />
        <path d={meanderD} stroke="#FFB566" strokeWidth="8" opacity="0.16" />
        <path d={meanderD} stroke="#FC890C" strokeWidth="2.4" />
        <path d={toPath(meander, 0.9)} stroke="#FC890C" strokeWidth="1.2" opacity="0.7" />
        <circle cx={end[0]} cy={end[1]} r="4.5" fill="#FC890C" />
      </g>
    </svg>
  );
}
