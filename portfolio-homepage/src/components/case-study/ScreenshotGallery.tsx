"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryImage } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";
import Lightbox from "./Lightbox";

export default function ScreenshotGallery({
  images,
  copy,
}: {
  images: GalleryImage[];
  copy: Dictionary["caseStudy"];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openAt(index: number) {
    lastTriggerRef.current = triggerRefs.current[index];
    setOpenIndex(index);
  }

  return (
    <section id="screens" aria-labelledby="screens-heading">
      <div className="flex items-baseline justify-between gap-6 flex-wrap">
        <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.selectedScreens}</p>
        <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.screensNote}</p>
      </div>
      <h2 id="screens-heading" className="sr-only">
        {copy.screensHeading}
      </h2>

      <ul className="mt-4 flex flex-wrap gap-4 list-none p-0">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => openAt(i)}
              className="group flex flex-col gap-2 text-left cursor-zoom-in"
            >
              <span className="block bg-white border border-rule rounded-frame p-2 shadow-frame transition-shadow duration-200 ease-linear group-hover:shadow-frame-accent group-focus-visible:shadow-frame-accent">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ height: 210, width: "auto" }}
                  className="rounded-img-inner block"
                />
              </span>
              <span className="font-mono-label text-mono-label uppercase text-muted whitespace-nowrap">
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
          returnFocusRef={lastTriggerRef}
          copy={copy}
        />
      )}
    </section>
  );
}
