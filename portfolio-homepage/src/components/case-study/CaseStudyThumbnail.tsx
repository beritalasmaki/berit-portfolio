import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";

/**
 * Shared thumbnail image area for case-study cards (homepage grid and the
 * "Other case studies" cross-links). Handles two overlay-able extras a plain
 * `<Image>` doesn't: a placeholder box + label for a project with no
 * screenshot yet (`placeholderLabel`), and a small pill tag in the corner
 * (`industry`, on every study: e.g. "Higher education"). The
 * placeholder is optional and independent of the industry pill — a finished
 * project carries one too.
 *
 * Expects to be rendered inside a `group`-classed ancestor (the card's
 * wrapping `<Link>`) so hover/focus zoom the image together with the rest
 * of the card.
 */
export default function CaseStudyThumbnail({ study, sizes }: { study: CaseStudy; sizes: string }) {
  return (
    // No fill of its own: the `-card.png` thumbnails have a transparent
    // backdrop (their old flat #EEE grey clashed with the warm background), so the
    // card's glass shows through around the mockups.
    <div className="relative aspect-[16/13] overflow-hidden">
      {study.placeholderLabel ? (
        <div className="absolute inset-4 flex items-center justify-center border border-dashed border-rule-strong rounded-frame transition-transform duration-150 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]">
          <p className="m-0 font-mono-label text-mono-label uppercase text-muted text-center px-4">
            {study.placeholderLabel}
          </p>
        </div>
      ) : (
        <Image
          src={study.thumbnail}
          // Decorative: the heading + description right below already
          // convey what the screenshot shows, so a screen reader doesn't
          // need to announce the alt text twice.
          alt=""
          fill
          sizes={sizes}
          className="object-cover object-left-top transition-transform duration-150 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
        />
      )}
      <span className="absolute top-4 left-4 font-mono-label text-mono-label uppercase text-white bg-ink rounded-pill py-2 px-4 whitespace-nowrap ring-1 ring-white/70 shadow-[0_2px_8px_rgba(34,34,34,0.12)]">
        {study.industry}
      </span>
    </div>
  );
}
