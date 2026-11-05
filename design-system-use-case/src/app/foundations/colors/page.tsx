import { TokenPage, type TokenSection } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Colors" };

const raw = (prefix: string) => primitiveTokens.colors.filter((token) => token.name.startsWith(prefix));
const semantic = (prefix: string) => semanticTokens.filter((token) => token.name.startsWith(prefix));

const sections: TokenSection[] = [
  { id: "raw-brand", title: "Raw values: accent and neutrals", description: "Raw values are the actual colours. Components do not use them directly; they use the semantic roles further down the page.", tokens: [...raw("color.orange."), ...raw("color.charcoal."), ...raw("color.sage."), ...raw("color.paper."), ...raw("color.border.")] },
  { id: "raw-status", title: "Raw values: status colours", description: "Yellow, blue, green and red in four steps each: a pale surface (100), a soft tone for dark surfaces (300), a mid tone for borders and icons (500) and a dark tone for text (700). Yellow 500 is also the focus ring.", tokens: [...raw("color.yellow."), ...raw("color.blue."), ...raw("color.green."), ...raw("color.red.")] },
  { id: "content", title: "Semantic: content", description: "Text and icons.", tokens: semantic("color.content.") },
  { id: "surface", title: "Semantic: surfaces", description: "Page backgrounds and grouping surfaces, in light and dark versions.", tokens: semantic("color.surface.") },
  { id: "action", title: "Semantic: actions", description: "Buttons, links and active markers.", tokens: semantic("color.action.") },
  { id: "border", title: "Semantic: borders", description: "Lines around components and controls.", tokens: semantic("color.border.") },
  { id: "focus", title: "Semantic: focus", description: "The keyboard focus ring.", tokens: semantic("color.focus.") },
  { id: "status", title: "Semantic: status", description: "Info, success, warning and error. Each has a surface (subtle), a colour for borders and icons (default), a colour for text on light surfaces (strong) and one for dark surfaces (on-dark). Always pair colour with an icon and text.", tokens: semantic("color.status.") },
  { id: "gradients", title: "Gradients", description: "Raw gradients are built from the raw colours above. The action gradients below them are the roles buttons use.", tokens: [...primitiveTokens.gradients, ...semantic("gradient.")] },
];

export default function ColorsPage() {
  return <TokenPage active="Colors" title="Colors" description="Colours come in two layers. Raw values are the palette. Semantic values give each colour a job, such as body text, page background or error, and components only use those. Gradients have their own section at the end." sections={sections} />;
}
