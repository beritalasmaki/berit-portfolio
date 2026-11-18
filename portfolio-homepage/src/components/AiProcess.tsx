import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

// Where the template lives. Both links open in a new tab.
const templateRepoUrl = "https://github.com/beritalasmaki/project-set-up-template";
const templateGuideUrl = "https://github.com/beritalasmaki/project-set-up-template/blob/main/docs/using-this-template.md";

// The accent-underline text link used across the site.
const linkClass =
  "text-nav font-semibold text-ink border-b border-accent pb-2 whitespace-nowrap transition-[border-color] duration-200 ease-linear hover:border-accent-dark focus-visible:border-accent-dark";

/** How I work with AI, as a part of My process.
 *
 * Sits inside the process section (no eyebrow number and no section of its
 * own, like WhatIDo inside About), in the same `glass rounded-card
 * p-card-pad` card. The steps are on the left and a picture of the six
 * stages on the right, in a solid frame like the other images on the site.
 * Below `lg` the picture goes under the text.
 *
 * The status line is deliberate: the template is a first version and has not
 * been used on a real project yet, and the card says so.
 */
export default function AiProcess({ copy }: { copy: Dictionary["aiProcess"] }) {
  return (
    <div className="mt-grid-gap glass rounded-card p-card-pad grid grid-cols-1 lg:grid-cols-2 gap-x-grid-gap-lg gap-y-8">
      <div className="flex flex-col gap-4">
        <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.kicker}</p>
        <h3 className="m-0 text-card-h3 text-ink">{copy.heading}</h3>
        <p className="m-0 max-w-prose text-body-lg text-body">{copy.intro}</p>

        <ol role="list" className="list-none p-0 m-0 mt-4 flex flex-col gap-6">
          {copy.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span aria-hidden="true" className="font-mono-label text-mono-label text-accent-dark pt-1.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h4 className="m-0 text-sub-h4 text-ink text-pretty">{step.title}</h4>
                <p className="m-0 max-w-prose text-body-lg text-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-6 lg:justify-center">
        <figure className="relative m-0 aspect-[16/8] overflow-hidden rounded-frame border border-rule-strong shadow-frame">
          <Image
            src={copy.imageSrc}
            alt={copy.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-left-top"
          />
        </figure>

        <p className="m-0 text-body-sm text-muted text-pretty">{copy.status}</p>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {[
            { href: templateRepoUrl, label: copy.repoLabel },
            { href: templateGuideUrl, label: copy.guideLabel },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {link.label}
              <span className="sr-only">{copy.opensNewTab}</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
