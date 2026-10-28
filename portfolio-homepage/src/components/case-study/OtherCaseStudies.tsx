import Link from "next/link";
import CaseStudyThumbnail from "@/components/case-study/CaseStudyThumbnail";
import { getOtherCaseStudies } from "@/data/case-studies";
import type { CaseStudySlug } from "@/data/case-studies";

export default function OtherCaseStudies({ currentSlug }: { currentSlug: CaseStudySlug }) {
  const others = getOtherCaseStudies(currentSlug);

  return (
    <section id="other" aria-labelledby="other-heading">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Keep reading</p>
      <h2 id="other-heading" className="mt-4 m-0 text-section-h2 text-ink">
        Other case studies
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap items-stretch">
        {others.map((study, index) => {
          // Two ways the last card can end up alone in its row, each
          // handled only where it happens:
          // - At `sm:` (2 columns), an odd count (the usual 3 "others")
          //   leaves it half-empty beside nothing: it spans both columns
          //   and goes horizontal there, back to one-third width at `lg:`.
          // - At `lg:` (3 columns), a count that leaves one over (4 others)
          //   spans all three, horizontal, as the homepage grid once did.
          // Same "featured row" treatment both times: the thumbnail keeps
          // its proportions (its aspect ratio is relative to its own,
          // narrower width) instead of stretching across the row.
          const isLast = index === others.length - 1;
          const isOddAtSm = others.length % 2 === 1 && isLast;
          const isIsolatedLast = others.length % 3 === 1 && isLast;
          return (
            <article
              key={study.slug}
              className={`flex flex-col glass rounded-card overflow-hidden ${
                isOddAtSm ? "sm:col-span-2 lg:col-span-1" : ""
              } ${isIsolatedLast ? "lg:col-span-3" : ""}`}
            >
              <Link
                href={`/usecases/${study.slug}`}
                data-sound="open"
                className={`flex flex-1 flex-col group rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px] ${
                  isOddAtSm ? "sm:flex-row sm:items-stretch lg:flex-col" : ""
                } ${isIsolatedLast ? "lg:flex-row lg:items-stretch" : ""}`}
              >
                <div
                  className={`${isOddAtSm ? "sm:w-2/5 sm:shrink-0 lg:w-auto lg:shrink" : ""} ${
                    isIsolatedLast ? "lg:w-2/5 lg:shrink-0" : ""
                  }`}
                >
                  <CaseStudyThumbnail
                    study={study}
                    sizes={
                      isIsolatedLast
                        ? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                        : isOddAtSm
                          ? "(min-width: 1024px) 33vw, (min-width: 640px) 40vw, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                  />
                </div>
                <div
                  className={`flex flex-1 flex-col gap-4 p-card-pad ${isOddAtSm ? "sm:justify-center lg:justify-start" : ""} ${
                    isIsolatedLast ? "lg:justify-center" : ""
                  }`}
                >
                  <h3 className="m-0 text-card-h3 text-ink group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                    {study.title}
                  </h3>
                  <p className="m-0 text-body-sm text-body">{study.otherCaseStudyDescription}</p>
                  <span className="mt-auto text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
                    View case study →
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
