import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Design principles" };

const principles = [
  {
    field: "Accessibility",
    title: "Everyone can use it",
    statement: "This is accessibility (a11y). Every part works for people with different needs, including people who use a keyboard or a screen reader and people who find small or pale text hard to read.",
    design: "Make text easy to read against its background (colour contrast, at least 4.5:1). Never use colour alone to show something. Make buttons and links big enough to tap (touch target, 44px).",
    code: "Use the right HTML element for each job (semantic HTML). Make everything work with a keyboard. Keep the focus outline visible (focus state).",
    example: "An error shows an icon and words, not only red. The focus outline is yellow with a dark edge, so it shows on any background.",
  },
  {
    field: "Design-code consistency",
    title: "Design and code match",
    statement: "A colour or a size has the same name in Figma and in the code (design tokens), so designers and developers talk about the same thing. This is a single source of truth.",
    design: "Use the variables in Figma (design tokens) instead of typing in values. Change things in Figma first.",
    code: "Use the same names in the code. When something changes in Figma, update the code to match (design-to-code sync).",
    example: "color/content/primary in Figma is --color-content-primary in the code.",
  },
  {
    field: "Lean system",
    title: "Keep it small",
    statement: "Fewer choices make it easier to pick the right one. A new colour or component is only added when it is really needed (governance: reuse before you create).",
    design: "Before you add something, check whether an existing part already does the job. Write down what each part is for (usage guidelines).",
    code: "Use what already exists. If something is missing, add it to the system so everyone can use it.",
    example: "There are two oranges, three dark greys and four gradients. Every colour has a note that says what it is for.",
  },
  {
    field: "Semantic tokens",
    title: "Colours are named by their job",
    statement: "Pick a colour by what it is used for, such as text, background or button (semantic naming). Do not pick it by how it looks.",
    design: "Choose the text colour or the button colour, not “orange”.",
    code: "Use a name such as --color-content-primary (a semantic token), not a code such as #1f2321 (a raw value, or primitive). Do not copy a value that already has a name.",
    example: "Dark mode only changes what each name points to. No component has its own dark colours.",
  },
  {
    field: "Plain language",
    title: "Say it simply",
    statement: "Use short, plain words in labels, messages and documentation (content design, UX writing). If a term needs explaining, explain it right there.",
    design: "Tell people what to do next. Avoid jargon, and give the expert term next to the plain one.",
    code: "Give things clear names. Put a plain explanation next to any value that needs one.",
    example: "A value such as clamp(22px, 2.4vw, 32px) / 1.1 / 800 has a sentence under it that says what it means.",
  },
];

const inspiration = [
  { name: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/", text: "for making clear, consistent and accessible design part of everyday work." },
  { name: "Google Material Design", href: "https://m3.material.io/", text: "for building accessibility and clear states into the components." },
  { name: "University of Helsinki design system", href: "https://designsystem.helsinki.fi/2de013a32/p/34207e-design-principles", text: "for stating principles openly and writing separate guides for designers, developers and product owners." },
];

export default function PrinciplesPage() {
  return (
    <DocsShell pageNav={[{ heading: "Principles", items: principles.map((principle, index) => ({ id: `principle-${index + 1}`, label: principle.title })) }, { heading: "More", items: [{ id: "inspiration", label: "Where these come from" }] }]}>
      <div className="max-w-[var(--width-page)]">
        <p className="eyebrow mb-4">Principles / design principles</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Design principles</h1>
        <p className="body-copy mt-5 text-lg">These five principles explain how DS by Berit is designed and built. Each one says what it means for designers, what it means in the code, and where you can see it in this system.</p>
        <ol className="m-0 mt-12 list-none space-y-6 p-0">
          {principles.map((principle, index) => (
            <li key={principle.title} id={`principle-${index + 1}`} className="scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 md:p-8">
              <p className="eyebrow mb-2">Principle 0{index + 1} · {principle.field}</p>
              <h2 className="m-0 text-3xl font-extrabold tracking-[-0.04em]">{principle.title}</h2>
              <p className="body-copy mt-3 text-lg">{principle.statement}</p>
              <dl className="mt-6 grid gap-6 md:grid-cols-3">
                <div><dt className="text-sm font-bold">In design</dt><dd className="body-copy m-0 mt-1 text-sm">{principle.design}</dd></div>
                <div><dt className="text-sm font-bold">In code</dt><dd className="body-copy m-0 mt-1 text-sm">{principle.code}</dd></div>
                <div><dt className="text-sm font-bold">In this system</dt><dd className="body-copy m-0 mt-1 text-sm">{principle.example}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
        <section id="inspiration" aria-labelledby="inspiration-heading" className="mt-12 scroll-mt-24 rounded-2xl bg-[var(--color-surface-inverse)] p-6 text-white md:p-8">
          <p className="eyebrow text-[var(--color-action-accent)]">Where these come from</p>
          <h2 id="inspiration-heading" className="mt-3 text-2xl font-bold">Systems I learn from</h2>
          <ul className="mt-4 space-y-3 pl-5 text-white/80">
            {inspiration.map((item) => <li key={item.name}><a href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-4">{item.name}<span className="sr-only"> (opens in a new tab)</span></a> {item.text}</li>)}
          </ul>
        </section>
      </div>
    </DocsShell>
  );
}
