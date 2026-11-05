import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Get started" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit";

const roles = [
  { href: "/getting-started/designers", title: "For designers", text: "Find your way around the Figma file, use its colours and sizes, and design a new part the way the system expects." },
  { href: "/getting-started/developers", title: "For developers", text: "Run the project, use the components, colours and grid in code, and keep the code in step with Figma." },
  { href: "/getting-started/product-owners", title: "For product owners", text: "See what the system gives your team, how to read these pages and how to ask for a change." },
];

const parts = [
  { href: "/principles", title: "Principles", text: "How the system is designed and why." },
  { href: "/foundations", title: "Foundations", text: "Colours, spacing, layout, type and shape." },
  { href: "/components", title: "Components", text: "Atoms, molecules, organisms and templates." },
  { href: "/examples", title: "Pages", text: "Example screens built from the components." },
];

export default function GettingStartedPage() {
  return (
    <DocsShell>
      <div className="max-w-[var(--width-page)]">
        <p className="eyebrow mb-4">Getting started</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">How to get started</h1>
        <p className="body-copy mt-5 text-lg">DS by Berit is a design system: a set of ready-made parts and rules for building a product. It has a Figma file for designers and a code library for developers, and the two match each other. Pick the guide that fits your role.</p>

        <section aria-labelledby="roles-heading" className="mt-12">
          <h2 id="roles-heading" className="m-0 text-2xl font-bold">Choose your role</h2>
          <ul className="m-0 mt-6 grid list-none gap-4 p-0 md:grid-cols-3">
            {roles.map((role) => (
              <li key={role.href}>
                <Link href={role.href} className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-action-accent)]">
                  <h3 className="m-0 text-xl font-bold">{role.title}</h3>
                  <p className="body-copy mt-2 flex-1 text-sm">{role.text}</p>
                  <span aria-hidden="true" className="material-symbols-outlined mt-6 block text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="parts-heading" className="mt-12">
          <h2 id="parts-heading" className="m-0 text-2xl font-bold">What is in the system</h2>
          <ul className="m-0 mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {parts.map((part) => <li key={part.href}><Link href={part.href} className="block h-full rounded-2xl border border-[var(--color-border-default)] p-5 hover:border-[var(--color-action-accent)]"><h3 className="m-0 text-lg font-bold">{part.title}</h3><p className="body-copy mt-1 text-sm">{part.text}</p></Link></li>)}
          </ul>
        </section>

        <section aria-labelledby="words-heading" className="mt-12">
          <h2 id="words-heading" className="m-0 text-2xl font-bold">Words used in these pages</h2>
          <dl className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["Token", "A named value, such as a colour or a size. Using the name instead of the value means one change updates everything."],
              ["Raw value (primitive)", "The actual value, such as the colour #f28b30. Components do not use raw values directly."],
              ["Role (semantic token)", "A name that says what a value is for, such as “text colour” or “button background”. Components use roles."],
              ["Atoms, molecules, organisms", "Three sizes of component. Atoms are the smallest parts (a button). Molecules are small groups of atoms (a field with its label). Organisms are bigger sections (a table)."],
              ["Template and page", "A template is a page layout without real content. A page is a template filled with real content."],
              ["Grid", "Invisible columns that line things up. It has 4 columns on a phone, 8 on a tablet and 12 on a desktop."],
            ].map(([term, text]) => <div key={term}><dt className="text-sm font-bold">{term}</dt><dd className="body-copy m-0 mt-1 text-sm">{text}</dd></div>)}
          </dl>
        </section>

        <section aria-labelledby="figma-heading" className="mt-12 rounded-2xl bg-[var(--color-surface-subtle)] p-6 md:p-8">
          <h2 id="figma-heading" className="m-0 text-2xl font-bold">The Figma UI kit</h2>
          <p className="body-copy mt-3">The Figma file has the UI kit: the components, colours, sizes and other values. Things have the same names in Figma and in the code, and every component comes in a light and a dark version. Changes are made in Figma first. The code is then updated by hand to match.</p>
          <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-3 text-sm font-semibold">Open the Figma UI kit <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </DocsShell>
  );
}
