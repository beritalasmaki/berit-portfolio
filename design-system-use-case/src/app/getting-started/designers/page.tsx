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
      intro={<p className="m-0">How to find your way around the Figma file, use its colours and sizes, and design a new part the way the system expects.</p>}
      sections={[
        { id: "figma", title: "Find your way around Figma", children: <><p>The <a href={figmaUrl} target="_blank" rel="noopener noreferrer">Figma UI kit<span className="sr-only"> (opens in a new tab)</span></a> is organised the same way as this site. First come the pages for colours, type, spacing, layout, shape and shadows. After those come the components, from the smallest (atoms) to the biggest (organisms), and then the templates. Every component page shows each state, in a light and a dark version.</p><p>The reasons behind these choices are on the <Link href="/principles">Design principles</Link> page.</p></> },
        { id: "tokens", title: "Use the colours and sizes in Figma", children: <ul><li>Use the Figma variables for every colour, space and corner radius. Do not type in a value.</li><li>Choose colours by their job, such as <code>color/content/primary</code> for text. The raw colours are only for the system itself.</li><li>Every colour has a note that says what it is for. If you are not sure, read <Link href="/foundations/colors">Which colour do I use?</Link>.</li><li>Use the grid styles and width variables so your layout lines up. See <Link href="/foundations/layout">Layout &amp; grid</Link>.</li></ul> },
        { id: "component", title: "Design a new component", children: <ul><li>First check whether an existing part already does the job.</li><li>Build it from existing parts, and show every state: default, hover, active, focus, disabled and, where needed, loading and error.</li><li>Make a light and a dark version.</li><li>Write down what it is for, what it is not for, and how to use it with a keyboard.</li><li>Put it on the right page: atom, molecule, organism or template.</li></ul> },
        { id: "accessibility", title: "Check accessibility as you design", children: <ul><li>Text is easy to read against its background (a contrast of at least 4.5 to 1).</li><li>Never use colour alone to show something. Add an icon or words.</li><li>Buttons and links are at least 44px tall and wide, so they are easy to tap.</li><li>The focus outline is visible on every background.</li></ul> },
        { id: "handover", title: "Hand over to development", children: <ul><li>Give layers and variables the same names as in the code.</li><li>Make changes in Figma first. The code is then updated by hand to match, so tell the developer what changed.</li><li>Add a short note to the <Link href="/version-history">version history</Link> in plain words.</li></ul> },
      ]}
    />
  );
}
