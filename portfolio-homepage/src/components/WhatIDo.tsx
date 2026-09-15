/** The four areas of work, as a scannable grid rather than a list to read
 * through. Four groups is small enough that two columns beat one long
 * column — the whole block fits on screen at once, which is the point.
 *
 * Sits inside the About section (no eyebrow, no number of its own) and takes
 * the same `bg-panel rounded-card p-card-pad` card as the bio block directly
 * above it, so it reads as one more part of About rather than a new section.
 * Inside the card the groups carry no borders: each one is marked by a short
 * accent rule above its title, the same 24×2px accent rule the design system
 * already uses to mark an emphasized label. That plus the weight jump from
 * `sub-h4` title to `body-lg` copy is what lets someone pick out the four
 * areas without reading the paragraphs.
 */
const groups = [
  {
    title: "Research and understanding",
    body: "User research and interviews, usability testing, journey mapping, service blueprints. Finding out how work actually happens before deciding what to build.",
  },
  {
    title: "Design and delivery",
    body: "UI flows and interface design, process diagrams, design systems from tokens to components. I read and modify front-end code, and build working components rather than only static screens.",
  },
  {
    title: "Working with AI tools",
    body: "I build prototypes and real components with AI tooling, and I know how to direct an agent rather than accept what it produces: writing the rules it works from, and reviewing what came out. I built my own design system this way.",
  },
  {
    title: "Leading the work",
    body: "Co-design workshops and facilitation, setting the measures that show whether a design worked, supporting a product owner through planning and prioritisation, and a lean approach to getting something usable in front of people early.",
  },
];

export default function WhatIDo() {
  return (
    <div className="mt-grid-gap flex flex-col gap-8 bg-panel rounded-card p-card-pad">
      <h3 id="what-i-do-heading" className="m-0 text-card-h3 text-ink">
        What I do
      </h3>
      {/* `md:` matches AboutMe's own two-column breakpoint, so the About
          section switches to one column all at once instead of in stages.
          The row gap is wider than the column gap: at two columns the
          vertical space between groups is what separates the rows, and a
          gap equal to the column gap reads as a loose four-cell table
          rather than as four distinct blocks. */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-grid-gap gap-y-8 list-none p-0 m-0">
        {groups.map((group) => (
          <li key={group.title} className="flex flex-col gap-3">
            <span aria-hidden="true" className="block w-6 h-0.5 rounded-pill bg-accent" />
            <h4 className="m-0 text-sub-h4 text-ink text-pretty">{group.title}</h4>
            <p className="m-0 max-w-prose text-body-lg text-body">{group.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
