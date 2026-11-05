import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Design principles" };

const principles = [
  {
    field: "Accessibility",
    title: "Everyone can use it",
    statement: "This is accessibility (a11y). Every part of the system has to work for people with different needs, including people who use a keyboard or a screen reader and people who find small or pale text hard to read. Accessibility is built into each component from the start and is not a check added at the end.",
    design: "Text must have enough colour contrast against its background (at least 4.5:1), and colour must never be the only way to show that something is selected, wrong or unavailable. Buttons and links need a large enough touch target (44px) so that they are easy to hit with a finger or a pointer.",
    code: "Use the HTML element that matches the job (semantic HTML), so that browsers and screen readers understand it without extra work. Everything that can be clicked must also work with a keyboard, in a logical order, and must show a visible focus state while it is selected.",
    example: "An error must be accompanied by an icon and text that explains the issue and how to fix it, rather than a generic warning or colour alone. The focus outline is yellow with a dark edge, ensuring high contrast on any background.",
  },
  {
    field: "Design-code consistency",
    title: "Design and code match",
    statement: "A colour, size or space has the same name in Figma and in the code (design tokens), so designers and developers always talk about the same thing. The system keeps one source of truth, and the design and the code are both read from it instead of each holding its own version.",
    design: "Use the variables in the Figma file (design tokens) for every colour, space and corner instead of typing values by hand. Changes are made in Figma first, so the file is always the most up-to-date description of how the system should look.",
    code: "Use the same names in the code as in Figma, and update the code whenever the Figma file changes (design-to-code sync). When a value changes, it is changed in every place that holds it, and the documentation shows both the design name and the code name.",
    example: "The text colour is named color/content/primary in Figma and --color-content-primary in the code, and both point to exactly the same value. The Colors page lists the raw values and the named roles side by side, so nobody has to guess which is which.",
  },
  {
    field: "Lean system",
    title: "Keep it small",
    statement: "A small set of well-explained parts is easier to use than a large set of similar ones. Each new colour, token or component has to be really needed before it is added, because every addition has to be learned, documented and maintained (governance: reuse before you create).",
    design: "Before adding something new, check whether an existing part already does the job, and if it almost does, improve that part. Every part should have usage guidelines that say what it is for and when it should not be used, so that people can choose the right one without asking.",
    code: "Build with the tokens and components that already exist. When something is missing, add it to the system in a way that others can reuse, with its documentation, instead of solving it once inside a single screen.",
    example: "The palette was reduced to two oranges and three dark greys, and the gradients to four, after it became unclear which shade to use where. Every remaining colour now has a note that explains what it is for.",
  },
  {
    field: "Semantic tokens",
    title: "Colours are named by their job",
    statement: "A colour is chosen by what it is used for, such as text, page background or primary button (semantic naming), and not by how it looks. This keeps the meaning of a colour stable even when its value changes, for example in dark mode or in a future rebrand.",
    design: "Choose the colour for the job at hand, such as the text colour or the button colour, rather than a named shade like orange. The raw palette exists so that each colour value is defined once, and designers normally never need to use it directly.",
    code: "Reference a semantic token such as --color-content-primary and never a raw value such as a hex code. A value that already has a name must not be repeated anywhere else in the code, so that one change updates everything that uses it.",
    example: "Dark mode works by pointing the same named roles at different values, so no component carries its own dark colours. This is why a component looks right in both themes without any extra styling.",
  },
  {
    field: "Plain language",
    title: "Say it simply",
    statement: "Labels, messages and documentation are written in short, clear sentences that any reader can follow (content design, UX writing). When a technical term is needed, it is explained at the point where it appears, and the professional term is given next to the plain one so experts can scan quickly.",
    design: "Write text that tells people what is happening and what to do next, and avoid jargon unless the audience needs it. Where an expert term is the standard name for something, include it next to the plain description rather than replacing it.",
    code: "Give components, props and variables names that describe what they are, and place a plain explanation next to any value that is hard to read at a glance. Documentation should be understandable without already knowing the system.",
    example: "A type value such as clamp(22px, 2.4vw, 32px) / 1.1 / 800 is followed by a sentence that explains the size range, the line height and the weight. The same rule applies to shadow values and to every grid and width value.",
  },
];

const inspiration = [
  { name: "University of Helsinki design system", href: "https://designsystem.helsinki.fi/2de013a32/p/34207e-design-principles", text: "I worked together with the University of Helsinki design system team, and I learned a great deal from them about how to build a good, high-quality design system. Their way of stating principles openly and writing separate guidance for designers, developers and product owners shaped this system." },
  { name: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/", text: "for making clear, consistent and accessible design part of everyday work." },
  { name: "Google Material Design", href: "https://m3.material.io/", text: "for building accessibility and clear states into the components themselves." },
  { name: "Chakra UI", href: "https://chakra-ui.com/", text: "for an accessible, composable component library where the building blocks are small and easy to combine." },
  { name: "Kela design system", href: "", text: "for how a public service design system serves a very wide group of users." },
  { name: "Suomi.fi design system", href: "https://designsystem.suomi.fi/", text: "for accessible, plain-language design in public digital services." },
  { name: "Aalto University design system", href: "https://brand.aalto.fi/en/ds/", text: "for how a university brand and its design system work together." },
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
          <h2 id="inspiration-heading" className="mt-3 text-2xl font-bold">Systems I learn from or find inspiration in</h2>
          <ul className="mt-4 list-disc space-y-4 pl-5 text-white/80">
            {inspiration.map((item) => <li key={item.name}>{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-4">{item.name}<span className="sr-only"> (opens in a new tab)</span></a> : <span className="font-semibold text-white">{item.name}</span>} {item.text.startsWith("I worked") ? <span className="mt-1 block">{item.text}</span> : <> {item.text}</>}</li>)}
          </ul>
        </section>
      </div>
    </DocsShell>
  );
}
