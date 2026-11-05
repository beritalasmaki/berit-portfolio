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
        { id: "value", title: "What the system gives you", children: <><p>A design system helps a product look and work the same everywhere, so people only have to learn it once. It also speeds up delivery, because the common parts already exist and have been tested, and teams do not have to design and build the same thing again.</p><p>Accessibility is built into every part from the start and is not added at the end, and the design decisions are written down in one place so that they can be found and followed.</p></> },
        { id: "reading", title: "How to read these pages", children: <p><Link href="/principles">Principles</Link> explain how and why the system is designed. <Link href="/foundations">Foundations</Link> list the colours, type, spacing and layout that everything is built from, and <Link href="/components">Components</Link> show the parts that exist, from the smallest to whole page layouts. <Link href="/examples">Pages</Link> show the parts working together with realistic content, and the <Link href="/version-history">version history</Link> says in plain words what has changed and why.</p> },
        { id: "change", title: "Ask for a change", children: <><p>A good request explains what problem people have and how you know about it, where in the product it happens, what has already been tried with the existing parts, and how many places would use the change. That gives the design and development team what they need to judge whether the change belongs in the system.</p><p>A new component or colour has to be needed before it is added, because every addition must be learned, documented and maintained. If an existing part can do the job, the answer is usually to use it or to improve it.</p></> },
        { id: "decisions", title: "How decisions are made", children: <p>Changes are checked against the <Link href="/principles">design principles</Link>. They have to work for everyone, match between design and code, be really needed, use colours named by their job, and be explainable in plain words. Changes to a value, to how a component works, or to the folder structure are agreed before they are made, so that nothing surprising reaches the product.</p> },
      ]}
    />
  );
}
