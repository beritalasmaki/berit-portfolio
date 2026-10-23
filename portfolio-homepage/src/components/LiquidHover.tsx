"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/**
 * Liquid hover: while the pointer is over the wrapped content, it ripples
 * faintly, like it's seen through slow-moving water. Kept deliberately
 * subtle (a few px, a slow 12s flow, ~1s ease) and limited to the hero line
 * and photo: stronger, faster or on every client logo, it made the page
 * feel busy. An SVG filter displaces the content
 * by a slowly flowing noise field (`feTurbulence`, its frequency animated
 * with SMIL so the ripple keeps moving). The displacement strength eases in
 * on enter and back out on leave, so it never snaps.
 *
 * The filter is only applied while the effect is non-zero, so nothing pays
 * its paint cost at rest. Reduced-motion visitors get no effect at all.
 * Purely decorative: the wrapper adds no semantics, and the wrapped content
 * keeps its own.
 */
export default function LiquidHover({
  children,
  strength = 5,
  className = "",
}: {
  children: ReactNode;
  /** Peak displacement in px. Thin strokes stand more than photos and logos. */
  strength?: number;
  className?: string;
}) {
  // useId's ":r1:" form isn't a safe CSS url() fragment, so strip the colons.
  const filterId = `liquid-${useId().replace(/:/g, "")}`;
  const displaceRef = useRef<SVGFEDisplacementMapElement>(null);
  const frame = useRef(0);
  const current = useRef(0);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  function animateTo(target: number) {
    cancelAnimationFrame(frame.current);
    const from = current.current;
    const duration = target > from ? 900 : 1100;
    const start = performance.now();
    if (target > 0) setActive(true);
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      current.current = from + (target - from) * eased;
      displaceRef.current?.setAttribute("scale", current.current.toFixed(2));
      if (t < 1) {
        frame.current = requestAnimationFrame(step);
      } else if (target === 0) {
        setActive(false);
      }
    };
    frame.current = requestAnimationFrame(step);
  }

  return (
    <div
      className={className}
      style={active ? { filter: `url(#${filterId})` } : undefined}
      onPointerEnter={reducedMotion ? undefined : () => animateTo(strength)}
      onPointerLeave={reducedMotion ? undefined : () => animateTo(0)}
    >
      <svg aria-hidden="true" width="0" height="0" className="absolute pointer-events-none">
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
          {/* One octave at a low frequency gives broad, smooth waves. More
              octaves or a higher frequency crinkled the edges instead of
              reading as liquid. */}
          <feTurbulence type="fractalNoise" baseFrequency="0.007 0.012" numOctaves={1} seed={3} result="noise">
            <animate
              attributeName="baseFrequency"
              dur="12s"
              values="0.007 0.012; 0.01 0.016; 0.007 0.012"
              repeatCount="indefinite"
            />
          </feTurbulence>
          {/* Smoothing the noise map removes the pixel-level grain that
              otherwise steps the warped edges. */}
          <feGaussianBlur in="noise" stdDeviation="3" result="smoothNoise" />
          <feDisplacementMap
            ref={displaceRef}
            in="SourceGraphic"
            in2="smoothNoise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
            result="warped"
          />
          {/* The displacement samples pixels without smoothing, so warped
              edges come out stair-stepped; a sub-pixel blur anti-aliases
              them. */}
          <feGaussianBlur in="warped" stdDeviation="0.6" />
        </filter>
      </svg>
      {children}
    </div>
  );
}
