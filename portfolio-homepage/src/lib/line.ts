/**
 * Geometry for "the Line", the site's one motion motif (HeroLine.tsx,
 * CaseStudyRiver.tsx): a smooth curve through a list of anchors, sampled
 * into evenly spaced points so a "shooting star" can travel along it at a
 * steady speed and its tail can be drawn as a gradient along the curve.
 */

export type Point = [number, number];

/** A smooth curve through the anchors: Catmull-Rom, as a list of cubics. */
function cubics(anchors: Point[]) {
  const out: [Point, Point, Point, Point][] = [];
  for (let i = 0; i < anchors.length - 1; i++) {
    const p0 = anchors[Math.max(0, i - 1)];
    const p1 = anchors[i];
    const p2 = anchors[i + 1];
    const p3 = anchors[Math.min(anchors.length - 1, i + 2)];
    out.push([
      p1,
      [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6],
      [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6],
      p2,
    ]);
  }
  return out;
}

function bezier(c: [Point, Point, Point, Point], t: number): Point {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const d = 3 * u * t * t;
  const e = t * t * t;
  return [
    a * c[0][0] + b * c[1][0] + d * c[2][0] + e * c[3][0],
    a * c[0][1] + b * c[1][1] + d * c[2][1] + e * c[3][1],
  ];
}

export type Sampled = {
  /** Points `step` apart along the curve, as flat x/y arrays. */
  x: Float32Array;
  y: Float32Array;
  step: number;
  /** Total length, in the same units as the anchors. */
  length: number;
  /** Length along the curve at each anchor. */
  atAnchor: number[];
};

/** Samples the smooth curve through `anchors` every `step` units. */
export function sampleCurve(anchors: Point[], step = 1.5): Sampled {
  // Dense pass: accumulate arc length.
  const dense: Point[] = [anchors[0]];
  const cum: number[] = [0];
  const atAnchor = [0];
  for (const c of cubics(anchors)) {
    for (let i = 1; i <= 48; i++) {
      const p = bezier(c, i / 48);
      const q = dense[dense.length - 1];
      cum.push(cum[cum.length - 1] + Math.hypot(p[0] - q[0], p[1] - q[1]));
      dense.push(p);
    }
    atAnchor.push(cum[cum.length - 1]);
  }
  const length = cum[cum.length - 1];
  // Even pass: resample at fixed spacing.
  const n = Math.floor(length / step) + 1;
  const x = new Float32Array(n);
  const y = new Float32Array(n);
  let j = 0;
  for (let i = 0; i < n; i++) {
    const s = i * step;
    while (j < cum.length - 2 && cum[j + 1] < s) j++;
    const t = (s - cum[j]) / Math.max(1e-6, cum[j + 1] - cum[j]);
    x[i] = dense[j][0] + (dense[j + 1][0] - dense[j][0]) * t;
    y[i] = dense[j][1] + (dense[j + 1][1] - dense[j][1]) * t;
  }
  return { x, y, step, length, atAnchor };
}

/** A gentle start and a gentle arrival: the most natural-feeling travel. */
export function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

const ORANGE = "252, 137, 12";
const GLOW = "255, 181, 102";

/** The star's head: a soft glow, four fine rays and a bright core. */
export function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number) {
  const size = 1.3 * scale;
  const glow = ctx.createRadialGradient(x, y, 0, x, y, 18 * size);
  glow.addColorStop(0, `rgba(${GLOW}, 0.6)`);
  glow.addColorStop(1, `rgba(${GLOW}, 0)`);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, 18 * size, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 1.1 * size;
  for (const [dx, dy, len] of [[1, 0, 17], [-1, 0, 17], [0, 1, 17], [0, -1, 17], [0.7, 0.7, 7], [-0.7, 0.7, 7], [0.7, -0.7, 7], [-0.7, -0.7, 7]]) {
    const ex = x + dx * len * size;
    const ey = y + dy * len * size;
    const ray = ctx.createLinearGradient(x, y, ex, ey);
    ray.addColorStop(0, `rgba(${ORANGE}, 0.9)`);
    ray.addColorStop(1, `rgba(${ORANGE}, 0)`);
    ctx.strokeStyle = ray;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }
  ctx.fillStyle = `rgb(${ORANGE})`;
  ctx.beginPath();
  ctx.arc(x, y, 3 * size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#FFF4E6";
  ctx.beginPath();
  ctx.arc(x, y, 1.5 * size, 0, Math.PI * 2);
  ctx.fill();
}


/** The logo signature's draw-in animation (`.logo-mask-wipe`), if it's on the page. */
export function signatureAnimation(): Animation | undefined {
  if (typeof document.getAnimations !== "function") return undefined;
  return document
    .getAnimations()
    .find((a) => (a as CSSAnimation).animationName === "logo-wipe");
}

/** Calls back once the signature has finished drawing (at once if there's none). */
export function onSignatureDone(cb: () => void) {
  const anim = signatureAnimation();
  if (!anim) cb();
  else anim.finished.then(cb, cb);
}
