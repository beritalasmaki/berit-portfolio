"use client";

import { useRef, useState } from "react";
import type { IntroVideo as IntroVideoData } from "@/data/case-studies";

/** Walkthrough video at the top of a case study. It starts as a still with the
 * same pill play button as the home hero ("Turn chaos into clarity"); pressing
 * it starts the video, with controls visible so the visitor can pause and
 * follow along. Nothing autoplays. */
export default function IntroVideo({ video, playLabel }: { video: IntroVideoData; playLabel: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    void ref.current?.play();
  };

  return (
    <figure className="m-0 rounded-card glass p-3 sm:p-4">
      <div className="relative">
        <video
          ref={ref}
          className="block w-full h-auto rounded-frame bg-ink"
          controls={started}
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.label}
          width={video.width}
          height={video.height}
          onEnded={() => setStarted(false)}
        >
          <source src={video.src} type="video/mp4" />
        </video>
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center rounded-frame bg-ink/10">
            <button
              type="button"
              onClick={play}
              data-sound="play"
              className="glass-button-ink relative inline-flex items-center gap-4 rounded-pill p-2 pr-6 text-nav font-semibold text-white hover:text-white focus-visible:text-white focus-visible:outline-white"
            >
              <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-accent">
                <svg viewBox="0 0 16 16" width="14" height="14" className="ml-0.5 block">
                  <path d="M4 2.5v11l9.5-5.5z" fill="white" />
                </svg>
              </span>
              {playLabel}
            </button>
          </div>
        )}
      </div>
      <figcaption className="mt-3 px-1 text-muted text-sm">{video.caption}</figcaption>
    </figure>
  );
}
