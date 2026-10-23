"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide background: a slow-moving light across an orange plaster wall,
 * fixed behind every page with the white page laid over it as a veil
 * (`--bg-veil` in globals.css) so it reads as texture, not imagery.
 *
 * The clip in /public/bg is pre-processed, not the raw footage: graded so
 * the shadow side stays saturated orange (under the white veil, the raw
 * brown shadows mixed to a cool grey-beige), and played forward then
 * reversed (36s) so the loop has no jump where it restarts.
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
