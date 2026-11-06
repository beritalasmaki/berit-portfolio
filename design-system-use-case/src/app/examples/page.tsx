import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Pages" };

const pages = [
  { href: "/examples/project-management", title: "Project management", text: "A project workspace with a table, cards and filters." },
  { href: "/examples/analytics", title: "Analytics", text: "A metrics view with cards and a table." },
];

export default function ExamplesPage() {
  return (
    <DocsShell>
      <div className="max-w-[var(--width-page)]">
        <p className="eyebrow mb-4">Pages</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Pages</h1>
        <p className="body-copy mt-5 text-lg">Pages are templates filled with real content. They show how the components hold up together, on desktop and on a phone.</p>
        <ul className="m-0 mt-12 grid list-none gap-4 p-0 md:grid-cols-2">
          {pages.map((page) => <li key={page.href}><Link href={page.href} className="block h-full rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 hover:border-[var(--color-action-accent)]"><h2 className="m-0 text-xl font-bold">{page.title}</h2><p className="body-copy mt-2 text-sm">{page.text}</p></Link></li>)}
        </ul>
      </div>
    </DocsShell>
  );
}
