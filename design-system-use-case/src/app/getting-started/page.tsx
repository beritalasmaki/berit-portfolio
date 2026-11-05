import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Get started" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit";

const roles = [
  { href: "/getting-started/designers", title: "For designers", text: "Find your way around the Figma file, use variables and styles, and design a new component the way the system expects." },
  { href: "/getting-started/developers", title: "For developers", text: "Install and run the project, use components, tokens and the layout grid, and keep code and Figma in step." },
  { href: "/getting-started/product-owners", title: "For product owners", text: "See what the system gives your team, how to read the documentation and how to ask for a change." },
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
        <p className="body-copy mt-5 text-lg">DS by Berit is a design system with a Figma file and a coded component library that match each other. Pick the guide that fits your role.</p>

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

        <section aria-labelledby="figma-heading" className="mt-12 rounded-2xl bg-[var(--color-surface-subtle)] p-6 md:p-8">
          <h2 id="figma-heading" className="m-0 text-2xl font-bold">The Figma UI kit</h2>
          <p className="body-copy mt-3">The design system is connected to a Figma file with the UI kit, the components and the tokens. The variables there are named like the tokens in the code, and every component has a Light and a Dark theme. Changes are designed in Figma first. The tokens and components in code are then updated by hand to match.</p>
          <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-3 text-sm font-semibold">Open the Figma UI kit <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </DocsShell>
  );
}
