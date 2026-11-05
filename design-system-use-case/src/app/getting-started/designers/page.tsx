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
        { id: "figma", title: "Find your way around Figma", children: <><p>The <a href={figmaUrl} target="_blank" rel="noopener noreferrer">Figma UI kit<span className="sr-only"> (opens in a new tab)</span></a> is organised in the same way as this site. First come the pages for colours, type, spacing, layout, shape and shadows. After those come the components, ordered from the smallest parts (atoms) through small groups of parts (molecules) to larger sections (organisms), and finally the page layouts (templates). Every component page shows each state in a light and a dark version, with a label on each one.</p><p>The reasons behind these choices are explained on the <Link href="/principles">Design principles</Link> page, which is a good place to start if you want to understand why the system works as it does.</p></> },
        { id: "tokens", title: "Use the colours and sizes in Figma", children: <><p>Every colour, space and corner radius in a design should come from a Figma variable and never be typed in by hand. That keeps the design connected to the code, because the variables have the same names as the values used by developers, and a change to one value then reaches every place that uses it.</p><p>Colours are chosen by their job, for example the text colour or the button colour, and not by their shade. The raw colours exist only so that each value is defined once. Each colour has a note that explains what it is for, and the <Link href="/foundations/colors">Which colour do I use?</Link> guide collects those notes. Layouts should follow the grid styles and the width variables described in <Link href="/foundations/layout">Layout &amp; grid</Link>.</p></> },
        { id: "component", title: "Design a new component", children: <><p>Start by checking whether an existing part already does the job, because a smaller system is easier for everyone to learn. If it does not, build the new part from existing parts and show every state that people can meet: default, hover, active, focus and disabled, and where it applies loading and error. A component also needs a light and a dark version, and it belongs on the page for the right level, which is atom, molecule, organism or template.</p><p>Write down what the component is for, when it should not be used, and how it works with a keyboard, so that developers and other designers can use it correctly without asking.</p></> },
        { id: "accessibility", title: "Check accessibility as you design", children: <p>Accessibility is easiest to get right while designing, and expensive to fix later. Text needs enough contrast against its background, at least 4.5 to 1, and a status or an error must never be shown by colour alone, so an icon or words should always go with it. Buttons and links must be large enough to hit easily, at least 44px, and the focus outline must be visible on every background so that people using a keyboard can see where they are.</p> },
        { id: "handover", title: "Hand over to development", children: <p>Give layers and variables the same names as in the code, so that nothing has to be translated during handover. Changes are made in Figma first, and the code is then updated by hand to match, which means that the developer should be told what changed and why. When a change is meaningful, add a short note to the <Link href="/version-history">version history</Link> in plain words, so that anyone outside the project can follow what happened.</p> },
      ]}
    />
  );
}
