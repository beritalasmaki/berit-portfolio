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

      {/* The case studies sit under each other, one row each: the
          thumbnail on the left (a third of the row) and the text beside it,
          all in one glass card. On a phone the thumbnail goes above the
          text. The thumbnail keeps its own proportions, so it never
          stretches to the text's height. */}
      <div className="mt-8 flex flex-col gap-grid-gap">
        {caseStudies.map((study) => (
          <article key={study.slug} data-ripple className="glass rounded-card overflow-hidden">
            <Link
              href={`/usecases/${study.slug}`}
              data-sound="open"
              className="group flex flex-col md:flex-row md:items-stretch rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
            >
              <div className="md:w-2/5 lg:w-1/3 md:shrink-0">
                <CaseStudyThumbnail
                  study={study}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-card-pad md:justify-center">
                <p className="font-mono-label text-mono-label uppercase text-muted m-0">
                  {study.label}{" "}
                  <span className="whitespace-nowrap">
                    · {study.projectCount} {study.projectCount === "1" ? "project" : "projects"}
                  </span>
                </p>
                <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                  {study.headline}
                </h3>
                <p className="m-0 text-body-lg text-body max-w-prose">{study.description}</p>
                <span className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
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
