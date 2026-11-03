import type { Dictionary } from "@/i18n/dictionaries";

/** The four areas of work, as a scannable grid rather than a list to read
 * through. Four groups is small enough that two columns beat one long
 * column — the whole block fits on screen at once, which is the point.
 *
 * Sits inside the About section (no eyebrow, no number of its own) and takes
 * the same `glass rounded-card p-card-pad` card as the bio block directly
 * above it, so it reads as one more part of About rather than a new section.
 * Inside the card the groups carry no borders: each one is marked by a short
 * accent rule above its title, the same 24×2px accent rule the design system
 * already uses to mark an emphasized label. That plus the weight jump from
 * `sub-h4` title to `body-lg` copy is what lets someone pick out the four
 * areas without reading the paragraphs.
 */

export default function WhatIDo({ copy }: { copy: Dictionary["whatIDo"] }) {
  return (
    <div className="mt-grid-gap flex flex-col gap-8 glass rounded-card p-card-pad">
      <h3 id="what-i-do-heading" className="m-0 text-card-h3 text-ink">
        {copy.heading}
      </h3>
      {/* `md:` matches AboutMe's own two-column breakpoint, so the About
          section switches to one column all at once instead of in stages.
          The row gap is wider than the column gap: at two columns the
          vertical space between groups is what separates the rows, and a
          gap equal to the column gap reads as a loose four-cell table
          rather than as four distinct blocks. */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-grid-gap gap-y-8 list-none p-0 m-0">
        {copy.groups.map((group) => (
          <li key={group.title} className="flex flex-col gap-4">
            <span aria-hidden="true" className="block w-6 h-0.5 rounded-pill bg-accent" />
            <h4 className="m-0 text-sub-h4 text-ink text-pretty">{group.title}</h4>
            <p className="m-0 max-w-prose text-body-lg text-body">{group.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
