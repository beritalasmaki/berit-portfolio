import type { ImpactCard } from "@/data/case-studies";

export default function ImpactSection({ intro, cards }: { intro: string; cards: ImpactCard[] }) {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="rounded-card border border-rule bg-white p-card-pad"
    >
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Results</p>
      <h2 id="impact-heading" className="mt-4 m-0 text-section-h2 text-ink">
        The Impact
      </h2>
      <p className="mt-6 max-w-prose-cs text-body-lg text-body">{intro}</p>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-grid-gap list-none p-0">
        {cards.map((card) => (
          <li
            key={card.number}
            className="flex flex-col gap-4 bg-panel border-l-[3px] border-accent rounded-r-[16px] p-card-pad"
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
