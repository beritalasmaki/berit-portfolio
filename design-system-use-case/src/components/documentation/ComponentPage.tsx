import type { ReactNode } from "react";
import type { PageNavGroup } from "@/components/navigation/PageNav";
import { DocsShell } from "@/components/navigation/DocsShell";

type ComponentExample = {
  title: string;
  description: string;
  content: ReactNode;
};

type ComponentPageProps = {
  name: string;
  eyebrow: string;
  description: string;
  usage: ReactNode;
  examples: ComponentExample[];
  contract: string[];
  accessibility: string[];
  /** Set to false on a page that needs the full width, such as a template wireframe. */
  showPageNav?: boolean;
};

export function ComponentPage({ name, eyebrow, description, usage, examples, contract, accessibility, showPageNav = true }: ComponentPageProps) {
  return (
    <DocsShell active={name} pageNav={showPageNav ? [
      { heading: "Overview", items: [{ id: "usage", label: "How it is used" }] },
      { heading: "Examples", items: examples.map((example, index) => ({ id: `example-${index + 1}`, label: example.title })) },
      { heading: "Reference", items: [{ id: "contract", label: "Contract" }, { id: "accessibility", label: "Accessibility" }] },
    ] satisfies PageNavGroup[] : undefined}>
      <div className="max-w-[var(--width-page)]">
        <header className="max-w-[var(--width-text)]">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">{name}</h1>
          <p className="body-copy mt-5 text-lg">{description}</p>
        </header>

        <section id="usage" className="mt-12 grid scroll-mt-24 gap-5 rounded-2xl bg-[var(--color-surface-inverse)] p-6 text-white md:grid-cols-[.7fr_1.3fr] md:p-8">
          <div><p className="eyebrow text-[var(--color-action-accent)]">Usage</p><h2 className="mt-3 text-2xl font-bold">When to use it</h2></div>
          <div className="max-w-[var(--width-text-narrow)] text-white/75">{usage}</div>
        </section>

        <section className="mt-14" aria-labelledby="examples-heading">
          <div className="mb-6"><p className="eyebrow mb-2">02 / examples</p><h2 id="examples-heading" className="m-0 text-3xl font-extrabold tracking-[-0.04em]">See the component in context.</h2></div>
          <div className="space-y-6">
            {examples.map((example, index) => <article key={example.title} id={`example-${index + 1}`} className="scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-5 md:p-6"><div className="mb-5 flex flex-wrap items-baseline justify-between gap-3"><div><p className="eyebrow mb-2">Variant 0{index + 1}</p><h3 className="m-0 text-xl font-bold">{example.title}</h3></div><p className="body-copy m-0 text-sm">{example.description}</p></div>{example.content}</article>)}
          </div>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          <article id="contract" className="scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] p-6"><p className="eyebrow mb-3">03 / contract</p><h2 className="text-2xl font-bold">Component contract</h2><ul className="mt-5 space-y-3 text-sm text-[var(--color-content-secondary)]">{contract.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-action-accent)]" />{item}</li>)}</ul></article>
          <article id="accessibility" className="scroll-mt-24 rounded-2xl bg-[var(--color-surface-subtle)] p-6"><p className="eyebrow mb-3">04 / accessibility</p><h2 className="text-2xl font-bold">Accessibility information</h2><ul className="mt-5 space-y-3 text-sm text-[var(--color-content-secondary)]">{accessibility.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-action-accent-dark)]" />{item}</li>)}</ul></article>
        </section>
      </div>
    </DocsShell>
  );
}
