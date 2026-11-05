import Link from "next/link";
import type { Metadata } from "next";
import { GuideLayout } from "@/components/documentation/GuideLayout";

export const metadata: Metadata = { title: "For product owners" };

export default function ProductOwnersPage() {
  return (
    <GuideLayout
      eyebrow="Getting started / for product owners"
      title="For product owners"
      intro={<p className="m-0">What the design system gives your team, how to read these pages and how to ask for a change.</p>}
      sections={[
        { id: "value", title: "What the system gives you", children: <ul><li>A product that looks and works the same everywhere, so people learn it once.</li><li>Faster delivery, because the common parts already exist and have been tested.</li><li>Accessibility built in from the start, not added at the end.</li><li>One place where design decisions are written down.</li></ul> },
        { id: "reading", title: "How to read these pages", children: <ul><li><Link href="/principles">Principles</Link> explain how and why the system is designed.</li><li><Link href="/foundations">Foundations</Link> list the colours, type, spacing and layout.</li><li><Link href="/components">Components</Link> show the parts that exist, from the smallest to whole page layouts.</li><li><Link href="/examples">Pages</Link> show the parts working together with real content.</li><li><Link href="/version-history">Version history</Link> says in plain words what has changed.</li></ul> },
        { id: "change", title: "Ask for a change", children: <><p>A good request says:</p><ul><li>what problem people have, and how you know about it;</li><li>where in the product it happens;</li><li>what you have already tried with the existing parts;</li><li>how many places would use the change.</li></ul><p>A new component or colour has to be needed before it is added. If an existing part can do the job, the answer is usually to use it.</p></> },
        { id: "decisions", title: "How decisions are made", children: <p>Changes are checked against the <Link href="/principles">design principles</Link>. Can everyone use it? Does it match Figma? Is it really needed? Is it named by its job? Can it be explained in plain words? Changes to a value, to how a component works, or to the folder structure are agreed before they are made.</p> },
      ]}
    />
  );
}
