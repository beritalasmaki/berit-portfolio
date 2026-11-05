import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Foundations" };

const tokenPages = [
  ["Colors", "Raw colours, semantic colour roles by purpose, and gradients.", "/foundations/colors"],
  ["Spacing", "The spacing scale for gaps, padding and page layout.", "/foundations/spacing"],
  ["Layout & grid", "Breakpoints, the column grid and maximum widths for text and pages.", "/foundations/layout"],
  ["Typography", "Fonts and text styles for headings, body text, labels and metadata.", "/foundations/typography"],
  ["Shape & elevation", "Corner radii, borders and shadows.", "/foundations/shape"],
];

export default function FoundationsPage() {
  return <DocsShell active="Foundations"><div className="max-w-[var(--width-page)]"><p className="eyebrow mb-4">Documentation / foundations</p><h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Foundations</h1><p className="body-copy mt-5 text-lg">The values every DS by Berit component is built from. Each page lists the tokens and what they are used for.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{tokenPages.map(([title, description, href], index) => <Link key={href} href={href} className="group rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-action-accent)]"><span className="eyebrow">0{index + 1}</span><h2 className="mt-8 text-2xl font-bold">{title}</h2><p className="body-copy mt-2 text-sm">{description}</p><span aria-hidden="true" className="material-symbols-outlined mt-8 block text-xl transition-transform group-hover:translate-x-1">arrow_forward</span></Link>)}</div></div></DocsShell>;
}
