import type { ReactNode } from "react";
import { DocsShell } from "@/components/navigation/DocsShell";

export type GuideSection = { id: string; title: string; children: ReactNode };

type GuideLayoutProps = { eyebrow: string; title: string; intro: ReactNode; sections: GuideSection[] };

/** Documentation only: a text page made of numbered sections, with an "on this page" list on the right. */
export function GuideLayout({ eyebrow, title, intro, sections }: GuideLayoutProps) {
  return (
    <DocsShell pageNav={[{ heading: "On this page", items: sections.map((section) => ({ id: section.id, label: section.title })) }]}>
      <div className="max-w-[var(--width-page)]">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">{title}</h1>
        <div className="body-copy mt-5 text-lg">{intro}</div>
        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24">
              <div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">0{index + 1}</span><h2 id={`${section.id}-heading`} className="m-0 text-2xl font-bold">{section.title}</h2></div>
              <div className="space-y-4 text-[var(--color-content-secondary)] [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-[var(--color-surface-raised)] [&_code]:px-1.5 [&_code]:py-1 [&_code]:text-xs [&_li]:max-w-[var(--width-text)] [&_p]:max-w-[var(--width-text)] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{section.children}</div>
            </section>
          ))}
        </div>
      </div>
    </DocsShell>
  );
}
