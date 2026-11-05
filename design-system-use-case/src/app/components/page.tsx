import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Components" };

const componentLinks = [
  ["Navigation", "Top and side navigation, links, tabs, and breadcrumbs."],
  ["Buttons", "Primary, secondary and tertiary buttons, with icons, loading and disabled states."],
  ["Cards", "Cards for metrics, actions, images and selectable content."],
  ["Table", "Sorting, filtering, selection and empty states for tabular data."],
  ["Forms", "Input, select, checkbox and radio, with labels, hints and errors.", "forms"],
  ["Form patterns", "Introduction, sections, progress and buttons for multi-step forms.", "form-patterns"],
  ["Date picker", "A date field in the format DD/MM/YYYY, with a calendar that starts on Monday.", "date-picker"],
  ["Notifications", "Panels and toasts for info, success, warning and error messages.", "notifications"],
];

export default function ComponentsPage() {
  return <DocsShell active="Components"><div className="max-w-5xl"><p className="eyebrow mb-4">Documentation / components</p><h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Components</h1><p className="body-copy mt-5 text-lg">Each page shows a component in its modes, with code, the rules it follows and its accessibility notes.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{componentLinks.map(([label, detail, slug], index) => <Link key={label} href={`/components/${slug ?? label.toLowerCase()}`} className="group rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-action-accent)]"><span className="eyebrow">0{index + 1}</span><h2 className="mt-8 text-2xl font-bold">{label}</h2><p className="body-copy mt-2 text-sm">{detail}</p><span aria-hidden="true" className="material-symbols-outlined mt-8 block text-xl transition-transform group-hover:translate-x-1">arrow_forward</span></Link>)}</div></div></DocsShell>;
}