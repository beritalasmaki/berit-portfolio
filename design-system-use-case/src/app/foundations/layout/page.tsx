import type { Metadata } from "next";
import { GridPreview } from "@/components/documentation/GridPreview";
import { TokenPage, type TokenSection } from "@/components/documentation/TokenPage";
import { WidthPreview } from "@/components/documentation/WidthPreview";
import { primitiveTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Layout & grid" };

const sections: TokenSection[] = [
  { id: "breakpoints", group: "Breakpoints and grid", title: "Breakpoints", description: "The screen widths where the layout changes. They are the same as Tailwind's sm, md, lg and xl, so a class such as md:grid-cols-2 changes at the value listed here.", tokens: primitiveTokens.breakpoints },
  { id: "grid", group: "Breakpoints and grid", title: "Grid", description: "Columns, gutter (the space between columns) and margin (the space at the left and right edge) for each screen size. Gutter and margin use values from the spacing scale.", tokens: primitiveTokens.grid },
  { id: "widths", group: "Maximum widths", title: "Maximum widths", description: "Content is never wider than these. Body text stops at 800px so lines do not become too long to follow.", tokens: primitiveTokens.widths },
];

export default function LayoutPage() {
  return <TokenPage active="Layout & grid" title="Layout & grid" description="Breakpoints, a column grid and maximum widths. The grid has 4 columns on a phone, 8 on a tablet and 12 on a desktop. Text and page content have a maximum width so they stay readable on large screens." sections={sections} groupEyebrow={{ "Breakpoints and grid": "Layout", "Maximum widths": "Widths" }} groupIntro={{ "Breakpoints and grid": "Use the layout-container and layout-grid classes in globals.css, or the --grid-columns, --grid-gutter and --grid-margin variables, instead of choosing columns and spacing page by page.", "Maximum widths": "Use the width variables, for example max-w-[var(--width-text)], instead of an arbitrary maximum width." }} lead={<><GridPreview /><WidthPreview /></>} />;
}
