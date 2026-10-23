import Image from "next/image";
import type { CaseStudy, CaseStudyFullContent, GalleryImage } from "@/data/case-studies";

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M10 5.5 V10 L13 12" />
      </g>
    </svg>
  );
}

/** Rough reading time from the sections a visitor would actually read
 * through (Starting Point, Impact, and the three accordion sections),
 * at ~200wpm — computed from the real copy rather than hand-maintained
 * per case study, so it can't drift out of sync as content changes. */
function estimateReadMinutes(study: CaseStudy & CaseStudyFullContent): number {
  const text = [
    ...study.intro,
    study.impactIntro,
    ...study.impactCards.map((card) => card.body),
    ...study.howItStarted,
    ...study.challenges.map((item) => item.body),
    ...study.whatIWouldDoDifferently,
  ].join(" ");
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(3, Math.round(wordCount / 200));
}

// Absolute position/rotation per stacked card, front-most first. Each card
// takes its own screenshot's aspect ratio (see `cardWidth`), so the whole
// UI is visible. The cards used to be fixed 3:4 boxes cropped with
// `object-cover`, which showed only a narrow left slice of every wide
// desktop screenshot. Tilts are kept gentle so the UI stays readable.
const CARD_POSITION = [
  "z-20 bottom-[4%] left-0 rotate-[-3deg]",
  "z-10 top-[2%] right-0 rotate-[4deg]",
  "z-0 top-0 left-[8%] rotate-[-8deg]",
];

// Width (as % of the stack) by orientation, so a tall phone-like shot
// doesn't tower over the stack and a wide dashboard isn't shrunk to a strip.
// The front card is a step larger than the ones behind it.
function cardWidth(image: GalleryImage, index: number): string {
  const ratio = image.width / image.height;
  const base = ratio >= 1.2 ? 84 : ratio >= 0.85 ? 64 : 50;
  return `${index === 0 ? base : base - 10}%`;
}

export default function SneakPeekHero({ study }: { study: CaseStudy & CaseStudyFullContent }) {
  const images = study.sneakPeekImages
    .map((src) => study.gallery.find((image) => image.src === src))
    .filter((image): image is GalleryImage => image !== undefined);
  const readMinutes = estimateReadMinutes(study);

  return (
    <section aria-labelledby="case-study-title" className="border-t border-rule pt-[clamp(32px,4vw,56px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-grid-gap-lg items-center">
        <div className="min-w-0 flex flex-col gap-6">
          <p className="font-mono-label text-mono-label uppercase text-muted m-0">Case study</p>
          <span className="self-start font-mono-label text-mono-label-em uppercase text-accent-dark glass-pill rounded-pill py-2 px-4 whitespace-nowrap">
            {study.categoryTag}
          </span>
          <h1 id="case-study-title" className="m-0 text-hero max-w-[18em]">
            {study.title}
          </h1>
          <p className="m-0 max-w-prose-cs text-lead text-body">{study.description}</p>

          <div className="flex flex-col gap-2 glass rounded-card p-card-pad max-w-[30em]">
            <p className="m-0 text-body-sm text-ink">
              <span className="font-bold">Role:</span> {study.roleLabel}
            </p>
            <p className="m-0 text-body-sm text-ink">
              <span className="font-bold">Focus:</span> {study.focusLabel}
            </p>
          </div>

          <div className="flex items-center gap-2 text-body-sm text-muted">
            <ClockIcon />
            <span>~{readMinutes} min read</span>
          </div>

          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {study.skillTags.map((tag) => (
              <li key={tag.label}>
                <span
                  title={tag.description}
                  className="inline-block font-mono-label text-mono-label-em uppercase text-ink glass-pill rounded-pill py-2 px-4 whitespace-nowrap"
                >
                  {tag.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-[520px] mx-auto aspect-[4/3]">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={`absolute overflow-hidden rounded-frame border border-white/70 bg-white shadow-frame-accent ${
                CARD_POSITION[i] ?? ""
              }`}
              style={{ width: cardWidth(image, i), aspectRatio: `${image.width} / ${image.height}` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 380px, 80vw"
                className="block w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
