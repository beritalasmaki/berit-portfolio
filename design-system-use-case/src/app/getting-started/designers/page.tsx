import Link from "next/link";
import type { Metadata } from "next";
import { GuideLayout } from "@/components/documentation/GuideLayout";

export const metadata: Metadata = { title: "For designers" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit";

export default function DesignersPage() {
  return (
    <GuideLayout
      eyebrow="Getting started / for designers"
      title="For designers"
      intro={<p className="m-0">How to find your way around the Figma file, use its variables and styles, and design a new component the way the system expects.</p>}
      sections={[
        { id: "figma", title: "Find your way around Figma", children: <><p>The <a href={figmaUrl} target="_blank" rel="noopener noreferrer">Figma UI kit<span className="sr-only"> (opens in a new tab)</span></a> follows the same structure as this site. Pages are grouped as Tokens (colours, type, spacing, layout, shape, elevation), then Atoms, Molecules, Organisms and Templates. Each component page labels every state and shows a Light and a Dark theme.</p><p>Principles and the reasons behind them are on the <Link href="/principles">Design principles</Link> page.</p></> },
        { id: "tokens", title: "Work with variables and styles", children: <ul><li>Bind every colour, space and radius to a variable. Do not type a raw value.</li><li>Use the semantic variables (for example <code>color/content/primary</code>). The raw palette is for the system only.</li><li>Every colour has a note on what it is for. If you are unsure, read <Link href="/foundations/colors">Which colour do I use?</Link>.</li><li>Use the layout grid styles and width variables so layouts follow the grid. See <Link href="/foundations/layout">Layout &amp; grid</Link>.</li></ul> },
        { id: "component", title: "Design a new component", children: <ul><li>Check first whether an existing atom, molecule or organism does the job.</li><li>Build it from existing atoms and show every state: default, hover, active, focus, disabled and where relevant loading and error.</li><li>Give it a Light and a Dark theme.</li><li>Write down what it is for, what it is not for, and how it behaves with a keyboard.</li><li>Place it at the right Atomic Design level.</li></ul> },
        { id: "accessibility", title: "Check accessibility while you design", children: <ul><li>Text has at least 4.5:1 contrast with its background.</li><li>Colour is never the only signal. Add an icon or text.</li><li>Targets are at least 44px.</li><li>The focus state is visible on every surface.</li></ul> },
        { id: "handover", title: "Hand over to development", children: <ul><li>Name layers and variables the way they are named in code.</li><li>Changes are designed in Figma first. The tokens and components in code are then updated by hand to match, so tell the developer what changed.</li><li>Add a short plain-language entry to the <Link href="/version-history">version history</Link>.</li></ul> },
      ]}
    />
  );
}
