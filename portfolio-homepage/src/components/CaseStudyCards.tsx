import Link from "next/link";
import CaseStudyThumbnail from "@/components/case-study/CaseStudyThumbnail";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudyCards() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">03 / selected case studies</p>
      <h2 id="case-studies-heading" className="mt-4 m-0 text-section-h2 text-ink">
        A closer look at the work.
      </h2>

      {/* The four case studies sit in one row from xl (1280px): 4 across.
          Below that they stay 2 × 2 (tablet), then stack (phone). A fifth
          study would wrap onto a second row. */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-grid-gap items-stretch">
        {caseStudies.map((study) => (
          <article key={study.slug} data-ripple className="flex flex-col glass rounded-card overflow-hidden">
            <Link
              href={`/usecases/${study.slug}`}
              data-sound="open"
              className="group flex flex-1 flex-col rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
            >
              <CaseStudyThumbnail
                study={study}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col gap-4 p-card-pad">
                {/* xl:min-h-12 reserves three lines (48px) in the 4-across row, so
                    the longest label doesn't push its headline below the rest. */}
                <p className="font-mono-label text-mono-label uppercase text-muted m-0 xl:min-h-12">{study.label}</p>
                <h3 className="m-0 text-card-h3 xl:text-sub-h4 text-ink whitespace-pre-line group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                  {study.headline}
                </h3>
                <p className="m-0 text-body-lg xl:text-body-sm text-body max-w-prose">{study.description}</p>
                <span className="mt-auto text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
                  {study.ctaLabel}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
