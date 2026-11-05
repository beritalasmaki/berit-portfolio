import { TokenPage, type TokenSection } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Colors" };

const raw = (prefix: string) => primitiveTokens.colors.filter((token) => token.name.startsWith(prefix));
const semantic = (prefix: string) => semanticTokens.filter((token) => token.name.startsWith(prefix));

const guide = [
  ["Orange", "Two oranges. Orange 500 is for fills, icons, borders and the active marker, and for accent text on dark surfaces. Orange 700 is for accent text on light surfaces and for the hover state of a primary button."],
  ["Charcoal", "Three charcoals. Charcoal 950 is ink: headings, primary text, the primary button and the dark-mode canvas. Charcoal 800 is a surface raised above the dark canvas. Charcoal 700 is for body copy, hints and metadata."],
  ["Status", "Yellow, blue, green and red are only for info, success, warning and error, and for the focus ring. Do not use them as decoration."],
  ["Components", "Components use semantic colours only. If the colour you need has no semantic name, add one instead of using a raw value."],
];

const sections: TokenSection[] = [
  { id: "main-colors", group: "Primitives (raw values)", title: "Main colors", description: "Raw values are the actual colours. Components do not use them directly; they use the semantic roles further down the page. These are the orange accent, the charcoal ink and the neutral greys, greens and whites.", tokens: [...raw("color.orange."), ...raw("color.charcoal."), ...raw("color.sage."), ...raw("color.paper."), ...raw("color.border.")] },
  { id: "status-colors", group: "Primitives (raw values)", title: "Status colors", description: "Yellow, blue, green and red in four steps each: a pale surface (100), a soft tone for dark surfaces (300), a mid tone for borders and icons (500) and a dark tone for text (700). Yellow 500 is also the focus ring.", tokens: [...raw("color.yellow."), ...raw("color.blue."), ...raw("color.green."), ...raw("color.red.")] },
  { id: "raw-gradients", group: "Primitives (raw values)", title: "Gradients", description: "Four gradients, all running from top to bottom: ink and white for the primary button, and two orange ones for its hover state.", tokens: primitiveTokens.gradients },
  { id: "content", group: "Semantic (roles)", title: "Content", description: "Text and icons.", tokens: semantic("color.content.") },
  { id: "surface", group: "Semantic (roles)", title: "Surfaces", description: "Page backgrounds and grouping surfaces, in light and dark versions.", tokens: semantic("color.surface.") },
  { id: "action", group: "Semantic (roles)", title: "Actions", description: "Buttons, links and active markers.", tokens: semantic("color.action.") },
  { id: "border", group: "Semantic (roles)", title: "Borders", description: "Lines around components and controls.", tokens: semantic("color.border.") },
  { id: "focus", group: "Semantic (roles)", title: "Focus", description: "The keyboard focus ring.", tokens: semantic("color.focus.") },
  { id: "status", group: "Semantic (roles)", title: "Status", description: "Info, success, warning and error. Each has a surface (subtle), a colour for borders and icons (default), a colour for text on light surfaces (strong) and one for dark surfaces (on-dark). Always pair colour with an icon and text.", tokens: semantic("color.status.") },
  { id: "action-gradients", group: "Semantic (roles)", title: "Action gradients", description: "The gradient each state of the primary button uses.", tokens: semantic("gradient.") },
];

export default function ColorsPage() {
  return <TokenPage active="Colors" title="Colors" description="Colours come in two layers. Raw values are the palette. Semantic values give each colour a job, such as body text, page background or error, and components only use those. Four gradients cover the primary button." sections={sections} groupIntro={{ "Primitives (raw values)": "The actual colour values. Components never use these directly. They exist so each colour is defined once.", "Semantic (roles)": "Colours named by what they are for. Components use only these, so a colour can change in one place without touching any component." }} lead={<section aria-labelledby="colour-guide" className="mt-8 rounded-2xl bg-[var(--color-surface-subtle)] p-6"><h2 id="colour-guide" className="m-0 text-xl font-bold">Which colour do I use?</h2><dl className="mt-4 grid gap-4 md:grid-cols-2">{guide.map(([term, text]) => <div key={term}><dt className="text-sm font-bold">{term}</dt><dd className="body-copy m-0 mt-1 text-sm">{text}</dd></div>)}</dl></section>} />;
}
