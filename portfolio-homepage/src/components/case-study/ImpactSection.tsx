import type { ImpactCard } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ImpactSection({
  intro,
  cards,
  copy,
}: {
  intro: string;
  cards: ImpactCard[];
  copy: Dictionary["caseStudy"];
}) {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="rounded-card glass p-card-pad"
    >
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.impactEyebrow}</p>
      <h2 id="impact-heading" className="mt-4 m-0 text-section-h2 text-ink">
        {copy.impact}
      </h2>
      <p className="mt-6 max-w-prose-cs text-body-lg text-body">{intro}</p>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-grid-gap list-none p-0">
        {cards.map((card) => (
          <li
            key={card.number}
            data-ripple
            className="flex flex-col gap-4 bg-cream/50 rounded-[16px] p-card-pad"
          >
            <p className="font-mono-label text-mono-label uppercase text-muted m-0" aria-hidden="true">
              {card.number}
            </p>
            <h3 className="m-0 text-card-h3 text-ink">{card.title}</h3>
            <p className="m-0 text-body-lg text-body">{card.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
