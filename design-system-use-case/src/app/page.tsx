import Link from "next/link";
import type { Metadata } from "next";
import { SystemDiagram } from "@/components/documentation/SystemDiagram";
import { BrandMark } from "@/components/navigation/BrandMark";

export const metadata: Metadata = { title: "DS by Berit" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit?node-id=4-4";

export default function Home() {
  return (
    <main id="main-content" className="surface-grid min-h-screen px-6 py-10 lg:flex lg:items-center lg:px-12 lg:py-6">
      <div className="mx-auto grid w-full max-w-[var(--width-page)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:items-center lg:gap-16">
        <div>
          <span role="img" aria-label="DS by Berit logo" className="mb-5 block"><BrandMark className="h-14 w-14" /></span>
          <h1 className="display-title !max-w-[12ch] !text-[clamp(34px,3.7vw,54px)]">A design system built in code and in Figma.</h1>
          <div className="mt-5 max-w-[var(--width-text-narrow)]">
            <p className="body-copy text-base">Berit Alasmäki built DS by Berit as a work sample, to show that she can create, build, develop and manage a design system.</p>
            <p className="body-copy mt-3 text-sm">The design system is connected to Figma, where the UI kit, components and tokens are designed. When something changes in Figma, the tokens and components in code are updated to match.</p>
            <p className="body-copy mt-3 text-sm">It exists to show that design and code can follow the same rules: tokens and components have the same names in Figma and in code, the parts cover what most product interfaces need, and accessibility is part of every component.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/getting-started" className="rounded-full bg-[var(--color-action-primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-action-accent-dark)]">How to get started <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link><a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold">Open the Figma UI kit <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true" className="ml-1">↗</span></a>
            </div>
          </div>
        </div>

        <section aria-labelledby="map-heading">
          <h2 id="map-heading" className="mb-3 mt-0 text-base font-bold">Start here: select a part of the map to open it.</h2>
          <SystemDiagram compact />
        </section>
      </div>
    </main>
  );
}
