"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryImage } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";
import { fmt } from "@/i18n/format";
import Lightbox from "../Lightbox";

// Long phone screenshots are full-page scroll captures (339×2000). Inline they
// are shown cropped to the top at roughly a phone's proportions; the lightbox
// shows the whole capture.
const MIN_RATIO = 0.46;
const TALL = 0.8;

function displayRatio(image: GalleryImage): number {
  return Math.max(image.width / image.height, MIN_RATIO);
}

/**
 * Screenshots placed inside the text, next to the decision they show.
 *
 * Several figures sit in one row at equal height: each item's flex-grow is its
 * aspect ratio, so a desktop screen and a phone screen line up without either
 * being cropped sideways. On a phone they stack, and tall shots are capped in
 * width so one screenshot doesn't fill three screens of scrolling.
 *
 * Every figure opens the shared lightbox, stepping through this group only.
 */
export default function StoryFigures({
  figures,
  copy,
  priority = false,
  aspect,
  frameless = false,
}: {
  figures: GalleryImage[];
  copy: Dictionary["caseStudy"];
  /** For the hero image, which is above the fold. */
  priority?: boolean;
  /** Force one crop ratio, e.g. 16/10 for the hero. The lightbox still shows the whole image. */
  aspect?: number;
  /** A ready-made composite on a transparent background (the hero bundle): no frame, no crop, no lightbox. */
  frameless?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const single = figures.length === 1;

  function openAt(index: number) {
    lastTriggerRef.current = triggerRefs.current[index];
    setOpenIndex(index);
  }

  if (frameless) {
    const figure = figures[0];
    return (
      <Image
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        priority={priority}
        sizes="(min-width: 1024px) 900px, 92vw"
        className="block h-auto w-full select-none"
      />
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
        {figures.map((figure, i) => {
          const ratio = aspect ?? displayRatio(figure);
          const tall = ratio < TALL;
          return (
            <figure
              key={figure.src}
              className={`m-0 flex w-full min-w-0 flex-col gap-3 ${
                tall ? "max-sm:max-w-[280px] max-sm:self-center" : ""
              } ${single && tall ? "sm:max-w-[360px] sm:mx-auto" : ""}`}
              style={single ? undefined : { flex: `${ratio} 1 0%` }}
            >
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                onClick={() => openAt(i)}
                aria-label={fmt(copy.story.enlarge, { caption: figure.caption })}
                className="group block w-full cursor-zoom-in rounded-frame border border-rule bg-white p-2 shadow-frame transition-shadow duration-200 ease-linear hover:shadow-frame-accent focus-visible:shadow-frame-accent"
              >
                <span
                  className="relative block w-full overflow-hidden rounded-img-inner"
                  style={{ aspectRatio: `${ratio}` }}
                >
                  <Image
                    src={figure.src}
                    alt={figure.alt}
                    fill
                    priority={priority}
                    sizes={single ? "(min-width: 1024px) 900px, 92vw" : "(min-width: 1024px) 600px, 92vw"}
                    className="object-cover object-top"
                  />
                  {figure.tag && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3 top-3 rounded-pill bg-ink px-3 py-1.5 font-mono-label text-mono-label uppercase text-white shadow-[0_2px_8px_rgba(34,34,34,0.18)] ring-1 ring-white/70"
                    >
                      {figure.tag}
                    </span>
                  )}
                </span>
              </button>
              <figcaption className="font-mono-label text-mono-label uppercase text-muted">
                {figure.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={figures}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
          returnFocusRef={lastTriggerRef}
          copy={copy}
        />
      )}
    </>
  );
}
