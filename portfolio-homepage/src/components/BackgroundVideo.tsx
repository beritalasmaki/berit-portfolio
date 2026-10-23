"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide background: a slow pan across floral-printed linen, fixed
 * behind every page with the white page laid over it as a veil
 * (`--bg-veil` in globals.css) so it reads as texture, not imagery.
 *
 * The clip in /public/bg is pre-processed, not the raw footage:
 * - The source's black side bars are cropped off, and its glitch frame (a
 *   "Media Not Found" card) is trimmed out.
 * - It's nudged warm, because the linen's natural grey read cool under the
 *   veil.
 * - It's heavily softened with a glow: a blurred copy screen-blended with a
 *   much more blurred one. The weave stays as a hint of grid, since anything
 *   crisper read rough behind text.
 * - It's stabilized, then a 3s stretch is slowed 30× (frame-blended) to a
 *   ~14px/s drift: barely-there motion that doesn't pull the eye while
 *   browsing. It plays forward then reversed (~3 min), so the loop has no
 *   jump where it restarts.
 *
 * Reduced motion: the video is paused, leaving the still poster frame —
 * same texture, no movement.
 */
export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync() {
      if (!video) return;
      if (query.matches) {
        video.pause();
      } else {
        // Autoplay can still be refused (e.g. data saver); the poster
        // then simply stays up, so the rejection needs no handling.
        video.play().catch(() => {});
      }
    }
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/bg/wall-poster.jpg"
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
      >
        <source src="/bg/wall.webm" type="video/webm" />
        <source src="/bg/wall.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ backgroundColor: "rgb(255 255 255 / var(--bg-veil))" }} />
    </div>
  );
}
