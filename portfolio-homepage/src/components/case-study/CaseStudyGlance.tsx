import type { CaseGlance } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * "At a glance": the problem, my role, the decisions and the outcome, in that
 * order, right under the hero. The point is that nobody has to dig: a
 * recruiter who reads only this block still knows what was solved, who did
 * what, and what came of it. Everything below it is the evidence.
 */
export default function CaseStudyGlance({ glance, copy }: { glance: CaseGlance; copy: Dictionary["caseStudy"] }) {
  const g = copy.glance;
  const label = "font-mono-label text-mono-label uppercase text-accent-dark m-0";
  const text = "m-0 max-w-prose-cs text-body-lg text-ink text-pretty";
  return (
    <section id="glance" aria-labelledby="glance-heading" className="rounded-card glass p-card-pad">
      <p className="font-mono-label text-mono-label uppercase text-accent-dark m-0" aria-hidden="true">
        {g.eyebrow}
      </p>
      <h2 id="glance-heading" className="sr-only">
        {g.heading}
      </h2>
      <dl className="mt-6 mb-0 grid grid-cols-1 gap-x-grid-gap gap-y-8 md:grid-cols-2">
        <div className="flex flex-col gap-2 border-t border-rule pt-6">
          <dt className={label}>{g.problem}</dt>
          <dd className={text + " ml-0"}>{glance.problem}</dd>
        </div>
        <div className="flex flex-col gap-2 border-t border-rule pt-6">
          <dt className={label}>{g.role}</dt>
          <dd className={text + " ml-0"}>{glance.role}</dd>
        </div>
        <div className="flex flex-col gap-2 border-t border-rule pt-6">
          <dt className={label}>{g.decisions}</dt>
          <dd className="m-0">
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {glance.decisions.map((decision) => (
                <li key={decision} className="flex gap-3 text-body-lg text-ink text-pretty">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-pill bg-accent" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="flex flex-col gap-2 border-t border-rule pt-6">
          <dt className={label}>{g.outcome}</dt>
          <dd className={text + " ml-0"}>{glance.outcome}</dd>
        </div>
      </dl>
    </section>
  );
}
