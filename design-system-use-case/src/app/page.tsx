import Link from "next/link";
import type { Metadata } from "next";
import { SystemDiagram } from "@/components/documentation/SystemDiagram";
import { BrandMark } from "@/components/navigation/BrandMark";

export const metadata: Metadata = { title: "DS by Berit" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit?node-id=4-4";

const principles = [
  ["One shared language", "Tokens and components have the same names in Figma and in code."],
  ["Made for product work", "Navigation, buttons, cards, tables, forms and notifications: the parts most product interfaces need."],
  ["Accessible from the start", "Semantic HTML, keyboard use, visible focus and contrast are part of every component."],
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <section className="surface-grid border-b border-[var(--color-border-default)] px-6 py-10 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-[var(--width-page)] gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span role="img" aria-label="DS by Berit logo" className="mb-6 block"><BrandMark className="h-16 w-16" /></span>
            <h1 className="display-title">A design system built in code and in Figma.</h1>
          </div>
          <div className="max-w-[var(--width-text-narrow)] lg:pb-2">
            <p className="body-copy text-lg">Berit Alasmäki built DS by Berit as a work sample, to show that she can create, build, develop and manage a design system.</p>
            <p className="body-copy mt-5">The design system is connected to Figma, where the UI kit, components and tokens are designed. When something changes in Figma, the tokens and components in code are updated to match.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/getting-started" className="rounded-full bg-[var(--color-action-primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-action-accent-dark)]">How to get started <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link><a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold">Open the Figma UI kit <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true" className="ml-1">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="mx-auto max-w-[var(--width-page)] px-6 py-10 lg:px-12 lg:py-14">
        <p className="eyebrow mb-2">Start here</p>
        <h2 id="map-heading" className="m-0 text-2xl font-extrabold tracking-[-0.04em] md:text-4xl">Select a part of the map to open it.</h2>
        <p className="body-copy mt-3 max-w-[var(--width-text-narrow)]">The map shows how the system fits together and is also the way in. Every box with an arrow opens that part of the documentation.</p>
        <div className="mt-8"><SystemDiagram /></div>
      </section>

      <section className="mx-auto max-w-[var(--width-page)] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow mb-3">Why it exists</p><h2 className="m-0 max-w-sm text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">Design and code follow the same rules.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">{principles.map(([title, description], index) => <article key={title} className="border-t-2 border-[var(--color-action-accent)] pt-5"><span className="font-mono text-xs text-[var(--color-content-muted)]">0{index + 1}</span><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="body-copy mt-2 text-sm">{description}</p></article>)}</div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-6 py-20 lg:px-12 lg:py-28">
        <div className="on-dark mx-auto grid max-w-[var(--width-page)] gap-8 rounded-3xl bg-[var(--color-surface-inverse)] p-8 text-white md:grid-cols-[1fr_auto] md:items-end md:p-12"><div><p className="eyebrow text-[var(--color-action-accent)]">The structure</p><h2 className="mt-3 max-w-[var(--width-text-narrow)] text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">Start with foundations. Build with components.</h2><p className="mt-4 max-w-[var(--width-text-narrow)] text-white/70">Read about the foundations first: colours, type, spacing and shape. Then see how the components use them, and how they work together in the example screens.</p></div><Link href="/components" className="rounded-full bg-[var(--color-action-accent)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-content-primary)] hover:bg-white">Explore components <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link></div>
      </section>

      <footer className="mx-auto flex max-w-[var(--width-page)] flex-wrap justify-between gap-4 px-6 py-8 text-sm text-[var(--color-content-muted)] lg:px-12"><span>DS by Berit</span><span>Design system by Berit Alasmäki</span></footer>
    </main>
  );
}
