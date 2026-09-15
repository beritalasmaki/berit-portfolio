import type { CaseStudy } from "@/data/case-studies";

/** Used only for minimal (summary-only) case studies now — full case
 * studies get `SneakPeekHero` instead, which covers the title, role/focus,
 * and everything else this used to render conditionally. */
export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section id="about-project" aria-labelledby="case-study-title" className="border-t border-rule pt-[clamp(32px,4vw,56px)]">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Case study</p>
      <h1 id="case-study-title" className="mt-4 m-0 text-hero max-w-[22em]">
        {study.title}
      </h1>
      {/* `heroIntro` when the page wants its own, longer opening; otherwise
          the card copy, which is what every study had before the field
          existed. */}
      <div className="mt-6 flex flex-col gap-4">
        {(study.heroIntro ?? [study.description]).map((paragraph, i) => (
          <p key={i} className="m-0 max-w-prose-cs text-lead text-body">
            {paragraph}
          </p>
        ))}
      </div>

      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 border border-rule-strong text-ink text-nav font-semibold py-3 px-6 rounded-pill whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-ink hover:-translate-y-px focus-visible:border-ink focus-visible:-translate-y-px"
        >
          Visit live project ↗
        </a>
      )}
    </section>
  );
}
