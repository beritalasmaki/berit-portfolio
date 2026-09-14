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
          // With 4 case studies to cross-link (every page's "others" list is
          // the other 4 of the 5), the last card is always alone in the
          // 3-column row at `lg:` — 4 % 3 === 1 — leaving two card-widths of
          // empty gap next to it. Only `lg:` is affected (4 splits evenly at
          // the 2-column `sm:` breakpoint), so it spans full width and
          // switches to a horizontal layout there only, same "featured row"
          // treatment as the homepage's case-study grid for the same reason.
          const isIsolatedLast = others.length % 3 === 1 && index === others.length - 1;
          return (
            <article
              key={study.slug}
              className={`flex flex-col bg-panel rounded-card overflow-hidden ${isIsolatedLast ? "lg:col-span-3" : ""}`}
            >
              <Link
                href={`/usecases/${study.slug}`}
                className={`flex flex-1 flex-col group rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px] ${
                  isIsolatedLast ? "lg:flex-row lg:items-stretch" : ""
                }`}
              >
                <div className={isIsolatedLast ? "lg:w-2/5 lg:shrink-0" : ""}>
                  <CaseStudyThumbnail
                    study={study}
                    sizes={
                      isIsolatedLast
                        ? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                  />
                </div>
                <div className={`flex flex-1 flex-col gap-4 p-card-pad ${isIsolatedLast ? "lg:justify-center" : ""}`}>
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
