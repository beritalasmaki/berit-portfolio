import Link from "next/link";
import type { Metadata } from "next";
import { GuideLayout } from "@/components/documentation/GuideLayout";

export const metadata: Metadata = { title: "For product owners" };

export default function ProductOwnersPage() {
  return (
    <GuideLayout
      eyebrow="Getting started / for product owners"
      title="For product owners"
      intro={<p className="m-0">What the design system gives your team, how to read the documentation, and how to ask for a change.</p>}
      sections={[
        { id: "value", title: "What the system gives you", children: <ul><li>A consistent look and behaviour across the product, so users learn it once.</li><li>Faster delivery, because common parts already exist and are tested.</li><li>Accessibility built into every component instead of fixed at the end.</li><li>One place where design decisions are written down.</li></ul> },
        { id: "reading", title: "How to read the documentation", children: <ul><li><Link href="/principles">Principles</Link> explain how and why the system is designed.</li><li><Link href="/foundations">Foundations</Link> list the colours, type, spacing and layout.</li><li><Link href="/components">Components</Link> show what exists, from the smallest parts to whole page layouts.</li><li><Link href="/examples">Pages</Link> show the parts working together with real content.</li><li><Link href="/version-history">Version history</Link> tells in plain language what has changed.</li></ul> },
        { id: "change", title: "Ask for a change", children: <><p>A good request says:</p><ul><li>the problem people have, and how you know about it;</li><li>where in the product it happens;</li><li>what you have tried with the existing components;</li><li>how many places would use the change.</li></ul><p>New components and tokens have to earn their place. If an existing part can do the job, the answer is usually to use it.</p></> },
        { id: "decisions", title: "How decisions are made", children: <><p>Changes are judged against the <Link href="/principles">design principles</Link>: is it accessible, does it use roles instead of raw values, does it add a choice that is really needed, and can it be explained in plain language. Changes to a token value, a component&apos;s options or the folder structure are agreed before they are made.</p></> },
      ]}
    />
  );
}
