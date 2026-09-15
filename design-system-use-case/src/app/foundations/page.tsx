import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Foundations" };

const tokenPages = [
  ["Colors", "Color primitives and semantic roles for content, surfaces, actions, borders, and focus.", "/foundations/colors"],
  ["Spacing", "A measured scale for page rhythm, component gaps, and responsive composition.", "/foundations/spacing"],
  ["Typography", "Heading, body, label, and metadata definitions for a clear information hierarchy.", "/foundations/typography"],
  ["Shape & elevation", "Radii, borders, and shadows that give the system its physical language.", "/foundations/shape"],
];

export default function FoundationsPage() {
  return <DocsShell active="Foundations"><div className="max-w-5xl"><p className="eyebrow mb-4">Documentation / foundations</p><h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Foundations</h1><p className="body-copy mt-5 text-lg">The decisions underneath every DS by Berit component. Explore each token category independently, then see how the values become component contracts.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{tokenPages.map(([title, description, href], index) => <Link key={href} href={href} className="group rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-action-accent)]"><span className="eyebrow">0{index + 1}</span><h2 className="mt-8 text-2xl font-bold">{title}</h2><p className="body-copy mt-2 text-sm">{description}</p><span aria-hidden="true" className="material-symbols-outlined mt-8 block text-xl transition-transform group-hover:translate-x-1">arrow_forward</span></Link>)}</div></div></DocsShell>;
}
