import Image from "next/image";
import Link from "next/link";
import CaseStudyThumbnail from "@/components/case-study/CaseStudyThumbnail";
import { getCaseStudies } from "@/data/case-studies";
import { caseStudyPath } from "@/data/case-studies/slugs";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/* Small marks that sit next to the image captions. Both are drawn at the same 16px height. */
function FigmaMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 38 57" className="h-4 w-auto shrink-0">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
    </svg>
  );
}

function GlobeCodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M15.5 10 13 7.5 15.5 5" />
      <path d="M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5" />
      <path d="M19.5 5 22 7.5 19.5 10" />
      <path d="M2 12h8.5" />
    </svg>
  );
}

const designSystemUrl = "https://design-system-use-case.vercel.app/";
const designSystemRepoUrl = "https://github.com/beritalasmaki/berit-portfolio/tree/main/design-system-use-case";
const figmaUiKitUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit?node-id=4-4";

export default function CaseStudyCards({ locale, copy }: { locale: Locale; copy: Dictionary["caseStudies"] }) {
  const caseStudies = getCaseStudies(locale);
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="mt-rhythm">
      <h2 id="case-studies-heading" className="m-0 text-section-h2 text-ink">
        {copy.heading}
      </h2>

      {/* The case studies sit under each other, one row each: the
          thumbnail on the left (a third of the row) and the text beside it,
          all in one glass card. On a phone the thumbnail goes above the
          text. The thumbnail keeps its own proportions, so it never
          stretches to the text's height. */}
      <div className="mt-8 flex flex-col gap-grid-gap">
        {caseStudies.map((study) => (
          <article key={study.slug} data-ripple className="glass rounded-card overflow-hidden">
            <Link
              href={caseStudyPath(locale, study.slug)}
              data-sound="open"
              className="group flex flex-col md:flex-row md:items-stretch rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
            >
              <div className="md:w-2/5 lg:w-1/3 md:shrink-0">
                <CaseStudyThumbnail
                  study={study}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-card-pad md:justify-center">
                <p className="font-mono-label text-mono-label uppercase text-muted m-0">
                  {study.label}{" "}
                  <span className="whitespace-nowrap">
                    · {study.projectCount} {study.projectCount === "1" ? copy.projectOne : copy.projectMany}
                  </span>
                </p>
                <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                  {study.headline}
                </h3>
                <p className="m-0 text-body-lg text-body max-w-prose">{study.description}</p>
                <span className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-200 ease-linear group-hover:border-accent-dark group-focus-visible:border-accent-dark">
                  {study.ctaLabel}
                </span>
              </div>
            </Link>
          </article>
        ))}

        {/* The design system is a work sample outside the case studies. It uses
            the same row as the case studies: two thumbnails on the left (each
            with a quiet caption underneath) and the
            text on the right. It has two links instead of one link around the
            whole card. */}
        <article className="glass rounded-card overflow-hidden flex flex-col md:flex-row md:items-stretch">
          <div className="flex flex-col gap-4 p-4 md:w-2/5 lg:w-1/3 md:shrink-0 md:justify-center">
            {[
              { src: "/ds/ui-kit-figma.png", alt: copy.designSystem.uiKitAlt, caption: copy.designSystem.uiKitCaption, mark: <FigmaMark /> },
              { src: "/ds/component-library.png", alt: copy.designSystem.libraryAlt, caption: copy.designSystem.libraryCaption, mark: <GlobeCodeIcon /> },
            ].map((figure) => (
              <figure key={figure.src} className="relative m-0 aspect-[16/8] overflow-hidden rounded-frame border border-rule-strong">
                <Image src={figure.src} alt={figure.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 36vw, 100vw" className="object-cover object-left-top" />
                <figcaption className="absolute top-3 left-0 inline-flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-r-pill bg-white py-1 pl-3 pr-4 font-mono-label text-mono-label uppercase text-ink shadow-[0_2px_8px_rgba(34,34,34,0.2)]">
                  {figure.mark}
                  <span className="min-w-0">{figure.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-4 p-card-pad md:justify-center">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.designSystem.label}</p>
            <h3 className="m-0 flex items-center gap-4 text-card-h3 text-ink">
              <Image src="/ds/ds-logo.svg" alt={copy.designSystem.logoAlt} width={48} height={48} className="shrink-0" />
              {copy.designSystem.headline}
            </h3>
            <p className="m-0 text-body-lg text-body max-w-prose">{copy.designSystem.description}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { href: designSystemUrl, label: copy.designSystem.siteLabel },
                { href: figmaUiKitUrl, label: copy.designSystem.figmaLabel },
                { href: designSystemRepoUrl, label: copy.designSystem.repoLabel },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav font-semibold text-ink border-b border-accent pb-2 whitespace-nowrap transition-[border-color] duration-200 ease-linear hover:border-accent-dark focus-visible:border-accent-dark"
                >
                  {link.label}
                  <span className="sr-only">{copy.designSystem.opensNewTab}</span>
                  <span aria-hidden="true"> ↗</span>
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
