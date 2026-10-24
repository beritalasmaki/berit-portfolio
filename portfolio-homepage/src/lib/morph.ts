/**
 * Helpers for "the Line", the site's one motion motif: a hand-drawn
 * brand-orange stroke that starts as a tangle and resolves into a smooth
 * path (see HeroLine.tsx).
 *
 * A shape is a flat list of numbers: one moveto (x, y) followed by cubics of
 * six numbers each (two control points and an anchor). Two shapes built with
 * the same number of cubics can be morphed by lerping each number against
 * its counterpart, so the stroke sweeps continuously between them rather
 * than cutting. That is done in JS on rAF, not with CSS `d`: CSS path
 * animation isn't supported everywhere, and a browser that ignores it would
 * silently leave the line tangled forever.
 */

export type Point = [number, number];

/** Builds "M x y C … C …" from a flat [x, y, …] list. */
export function toPath(points: number[], yOffset = 0) {
  let d = `M ${points[0].toFixed(1)} ${(points[1] + yOffset).toFixed(1)}`;
  for (let i = 2; i < points.length; i += 6) {
    d +=
      ` C ${points[i].toFixed(1)} ${(points[i + 1] + yOffset).toFixed(1)},` +
      ` ${points[i + 2].toFixed(1)} ${(points[i + 3] + yOffset).toFixed(1)},` +
      ` ${points[i + 4].toFixed(1)} ${(points[i + 5] + yOffset).toFixed(1)}`;
  }
  return d;
}

export function lerpPoints(from: number[], to: number[], t: number) {
  const out = new Array<number>(from.length);
  for (let i = 0; i < from.length; i++) out[i] = from[i] + (to[i] - from[i]) * t;
  return out;
}

/**
 * A smooth curve through the anchors (Catmull-Rom converted to cubics), as a
 * flat shape list. `tension` 0 gives zero-length handles: every anchor
 * becomes a sharp corner, which is how the tangle gets its jagged look —
 * and lerping corners into smooth handles is what reads as the line
 * "softening" while it untangles.
 */
export function throughAnchors(anchors: Point[], tension = 1) {
  const out: number[] = [anchors[0][0], anchors[0][1]];
  for (let i = 0; i < anchors.length - 1; i++) {
    const p0 = anchors[Math.max(0, i - 1)];
    const p1 = anchors[i];
    const p2 = anchors[i + 1];
    const p3 = anchors[Math.min(anchors.length - 1, i + 2)];
    const k = tension / 6;
    out.push(
      p1[0] + (p2[0] - p0[0]) * k,
      p1[1] + (p2[1] - p0[1]) * k,
      p2[0] - (p3[0] - p1[0]) * k,
      p2[1] - (p3[1] - p1[1]) * k,
      p2[0],
      p2[1]
    );
  }
  return out;
}

// The gentlest of the standard ease-outs: the unwinding stays legible through
// the middle of the duration instead of snapping early and then waiting.
export function easeOutSine(t: number) {
  return Math.sin((t * Math.PI) / 2);
}
