import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import AboutMe from "./AboutMe";
import AiProcess from "./AiProcess";
import ProcessTimeline from "./ProcessTimeline";
import WhatIDo from "./WhatIDo";

export default function AboutSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Pick<Dictionary, "about" | "whatIDo" | "process" | "aiProcess">;
}) {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-rhythm">
      <div className="flex items-end justify-between gap-grid-gap-lg flex-wrap">
        <h2 id="about-heading" className="m-0 text-section-h2 text-ink">
          {copy.about.heading}
        </h2>
        <p className="m-0 text-[15px] leading-snug text-footer-meta max-w-[20em]">
          {copy.about.aside}
        </p>
      </div>

      <AboutMe copy={copy.about} />

      {/* Part of About (04), not a section of its own — no eyebrow and no
          number, so the page sequence still runs 04 About -> 05 My process.
          Placed after the bio and "Working with me" cards and before the
          numbered process block. */}
      <WhatIDo copy={copy.whatIDo} />

      {/* How I work with AI sits under the timeline, inside My process. */}
      <ProcessTimeline copy={copy.process}>
        <AiProcess locale={locale} copy={copy.aiProcess} />
      </ProcessTimeline>

      <div className="flex items-center gap-4 glass rounded-card p-card-pad mt-grid-gap">
        <span aria-hidden="true" className="text-xl text-accent-dark whitespace-nowrap">
          ↗
        </span>
        <p className="m-0 text-[clamp(16px,1.4vw,20px)] leading-snug font-bold text-ink">
          {copy.about.closing}
        </p>
      </div>
    </section>
  );
}
