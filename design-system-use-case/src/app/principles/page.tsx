import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Design principles" };

const principles = [
  {
    title: "Accessible from the start",
    statement: "Accessibility is part of every component, not a check at the end.",
    design: "Check contrast before choosing a colour. Never use colour as the only signal. Make every target at least 44px.",
    code: "Use semantic HTML, make everything work with a keyboard, keep a visible focus ring and announce changes with ARIA where needed.",
    example: "An error is shown with an icon and text, not just red. The focus ring is yellow with a dark edge, so it can be seen on any surface.",
  },
  {
    title: "One language for design and code",
    statement: "A token has the same name in Figma and in code, so nothing gets lost in handover.",
    design: "Bind every colour, space and radius to a variable instead of a raw value. Changes are designed in Figma first.",
    code: "Use the same names as CSS variables and keep the token files in step with the Figma file.",
    example: "color/content/primary in Figma is --color-content-primary in code. The Colors page lists both layers, raw values and semantic roles.",
  },
  {
    title: "Few choices, each with a job",
    statement: "Too many options make it unclear which one to use. A colour, token or component has to earn its place.",
    design: "Before adding something, check whether an existing part does the job. Write down what each one is for and what it is not for.",
    code: "Build from the existing tokens and components. If something is missing, say so and fix the gap in the system instead of working around it.",
    example: "The palette has two oranges and three charcoals, four gradients, and a note on every colour that says what it is for.",
  },
  {
    title: "Roles before values",
    statement: "Components use roles such as content, surface and action, never raw colours, so one change reaches everywhere.",
    design: "Pick colours by what they do. Use the semantic layer and leave the raw palette to the system.",
    code: "Write var(--color-content-primary), not a hex code. Never repeat a value that already exists as a variable.",
    example: "Dark mode works by pointing the same roles at other values. No component has its own dark colours.",
  },
  {
    title: "Plain language",
    statement: "Write so that anyone can understand it: labels, error messages and documentation alike.",
    design: "Use short words and say what to do. Explain unusual terms next to where they appear.",
    code: "Name things by what they are. Put a plain-language reading next to any value that needs one.",
    example: "A type value such as clamp(22px, 2.4vw, 32px) / 1.1 / 800 has a sentence under it explaining size, line height and weight.",
  },
];

const inspiration = [
  { name: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/", text: "for treating clarity, consistency and accessibility as everyday practice." },
  { name: "Google Material Design", href: "https://m3.material.io/", text: "for building accessibility and clear states into the components themselves." },
  { name: "University of Helsinki design system", href: "https://designsystem.helsinki.fi/2de013a32/p/34207e-design-principles", text: "for stating principles openly and writing separate guidance for designers, developers and product owners." },
];

export default function PrinciplesPage() {
  return (
    <DocsShell pageNav={[{ heading: "Principles", items: principles.map((principle, index) => ({ id: `principle-${index + 1}`, label: principle.title })) }, { heading: "More", items: [{ id: "inspiration", label: "Where these come from" }] }]}>
      <div className="max-w-[var(--width-page)]">
        <p className="eyebrow mb-4">Principles / design principles</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Design principles</h1>
        <p className="body-copy mt-5 text-lg">Five principles explain how DS by Berit is designed and built. Each one shows what it means for a designer, what it means in code, and where you can see it in this system.</p>
        <ol className="m-0 mt-12 list-none space-y-6 p-0">
          {principles.map((principle, index) => (
            <li key={principle.title} id={`principle-${index + 1}`} className="scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 md:p-8">
              <p className="eyebrow mb-2">Principle 0{index + 1}</p>
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
