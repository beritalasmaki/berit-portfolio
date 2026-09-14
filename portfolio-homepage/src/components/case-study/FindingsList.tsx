import type { Finding } from "@/data/case-studies";

/**
 * A numbered, scannable set of findings inside a case-study section body —
 * a bold lead-in claim per item, then the explanation behind it.
 *
 * Deliberately lighter than `ChallengesSection`, which renders the same
 * shape of data: that one gives each item a `card-h3` heading and its own
 * rule because those *are* sub-sections you can land on from the TOC. These
 * are meant to be read straight down as one set, so the lead-in is body-size
 * bold rather than a heading, and the rules are hairlines between items
 * rather than a divider above each.
 *
 * A real `<ol>`, so the ordinal is carried by the markup; the visible number
 * is `aria-hidden` to avoid a screen reader announcing the position twice —
 * the same convention `ChallengesSection` and `ImpactSection` already use
 * for their own numbers.
 */
export default function FindingsList({ items }: { items: Finding[] }) {
  return (
    <ol className="flex flex-col gap-6 list-none p-0 m-0">
      {items.map((item, index) => (
        <li key={item.title} className="flex gap-4 border-t border-rule pt-6">
          <span
            aria-hidden="true"
            className="shrink-0 font-mono-label text-mono-label uppercase text-muted pt-1"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-2 min-w-0">
            <p className="m-0 max-w-prose-cs text-body-em font-semibold text-ink text-pretty">
              {item.title}
            </p>
            <p className="m-0 max-w-prose-cs text-body-lg text-body">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
