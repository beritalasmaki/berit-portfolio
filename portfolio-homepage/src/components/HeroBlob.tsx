"use client";

import { useEffect, useRef } from "react";
import { BLOB_PATH } from "./Logo";

// How far (px) the blob may travel toward the cursor, and how quickly it
// closes the gap each frame. A low follow factor is what makes it glide
// rather than stick to the pointer.
const MAX_OFFSET = 44;
const FOLLOW = 0.075;

/**
 * Hero blob: the exact orange blob from the logo mark (BLOB_PATH, brand
 * #FF890C), so the hero's focal point *is* the brand shape rather than a
 * generic sphere. It replaced the hand-drawn flourish line.
 *
 * - Its edge is feathered (a small SVG blur on the blob itself) and a more
 *   blurred copy behind it gives a soft glow that ties it to the drifting
 *   background orbs (GlowOrbs.tsx). Both are static SVG blurs, rasterized
 *   once.
 * - At rest it floats: a slow tilt-and-breathe (`.hero-blob` in
 *   globals.css).
 * - While hovered, it glides toward the cursor. The target is the pointer's
 *   offset from the blob's center, scaled down and clamped to MAX_OFFSET,
 *   and each frame the position eases a fraction of the way there, with a
 *   slight tilt in the direction of travel. On leave it eases back home.
 *
 * Everything moves via `transform` only, so the glow is never re-blurred.
 * Reduced-motion visitors get neither the float (the global CSS rule) nor
 * the follow (skipped here).
 */
export default function HeroBlob() {
  const zoneRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const mover = moverRef.current;
    if (!zone || !mover) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frame = 0;

    function tick() {
      pos.x += (target.x - pos.x) * FOLLOW;
      pos.y += (target.y - pos.y) * FOLLOW;
      const tilt = pos.x * 0.08;
      mover!.style.transform = `translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
      // Keep animating until it has settled on the target.
      if (Math.abs(target.x - pos.x) > 0.1 || Math.abs(target.y - pos.y) > 0.1) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    }
    function kick() {
      if (!frame) frame = requestAnimationFrame(tick);
    }
    function onMove(event: PointerEvent) {
      const rect = zone!.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const clamp = (v: number) => Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, v * 0.18));
      target.x = clamp(dx);
      target.y = clamp(dy);
      kick();
    }
    function onLeave() {
      target.x = 0;
      target.y = 0;
      kick();
    }

    zone.addEventListener("pointermove", onMove);
    zone.addEventListener("pointerleave", onLeave);
    return () => {
      zone.removeEventListener("pointermove", onMove);
      zone.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={zoneRef} aria-hidden="true" className="w-full max-w-[440px] mx-auto">
      <div ref={moverRef} className="will-change-transform">
        <svg viewBox="-34 -34 182 176" className="hero-blob block w-full h-auto overflow-visible">
          <defs>
            <filter id="hero-blob-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            {/* Feathers the blob's own edge so it melts into its glow
                instead of ending in a hard line; the shape stays readable
                because the blur is small next to the blob's ~110-unit size. */}
            <filter id="hero-blob-feather" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path
            d={BLOB_PATH}
            fill="#FC890C"
            opacity="0.45"
            filter="url(#hero-blob-glow)"
            transform="translate(56.8 53.7) scale(1.12) translate(-56.8 -53.7)"
          />
          <path d={BLOB_PATH} fill="#FF890C" filter="url(#hero-blob-feather)" />
        </svg>
      </div>
    </div>
  );
}
