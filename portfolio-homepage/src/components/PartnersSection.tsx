"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Person = Dictionary["partners"]["people"][number];

// Same glyph as the header's LinkedIn icon (currentColor, so it follows the
// link's text color on hover/focus).
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM4.94 13.44H2.4V5.98h2.54v7.46zM3.67 4.94c-.81 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.65 1.47-1.47 1.47zM13.6 13.44h-2.54V9.83c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.67H6.14V5.98h2.44v1.02h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v3.87z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0 block">
      <path d="M5 8 L10 13 L15 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// One collaborator as an accordion row. The heading is the toggle (same
// pattern and grid-rows 0fr -> 1fr animation as the case-study
// AccordionSection). The "Read bio" label is real body-contrast text, not a
// muted caption, and the whole row is the 44px+ hit area.
function PersonRow({ person, copy, id }: { person: Person; copy: Dictionary["partners"]; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;
  return (
    <li className="rounded-card bg-white/45 border border-white/70">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group w-full min-h-[56px] text-left px-3 py-2 flex items-center gap-3 focus-visible:outline-ink"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={person.photo} alt="" width={241} height={258} loading="lazy" className="w-11 h-auto shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="block text-[16px] font-bold leading-tight text-ink">{person.name}</span>
            <span className="block mt-0.5 text-[14px] leading-snug text-body">{person.role}</span>
          </span>
          <span className="flex items-center gap-2 shrink-0 text-[14px] font-bold text-ink group-hover:text-accent-dark group-focus-visible:text-accent-dark">
            <span className="whitespace-nowrap">{open ? copy.hideBio : copy.readBio}</span>
            <span aria-hidden="true" className={`flex transition-transform duration-500 ease-accel-decel ${open ? "rotate-180" : ""}`}>
              <ChevronIcon />
            </span>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-500 ease-accel-decel ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="px-4 pb-4 pt-1 flex flex-col gap-4">
            <p className="m-0 text-body max-w-prose">{person.bio}</p>
            <a
              href={person.linkedinUrl}
              data-sound="social"
              target="_blank"
              rel="noreferrer"
              aria-label={`${person.name} – ${copy.linkedin}`}
              className="glass-button self-start inline-flex items-center gap-2 h-11 px-4 rounded-pill text-[14px] font-bold text-ink hover:text-accent-dark focus-visible:text-accent-dark"
            >
              <LinkedInIcon />
              {copy.linkedin}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function PartnersSection({ copy }: { copy: Dictionary["partners"] }) {
  // Title and logo stack in a left column with real space between them; the
  // collaborators are a column of slim accordion rows on the right. A new
  // collaborator adds one ~56px row, and bios only take space while open.
  return (
    <section aria-labelledby="partners-heading" className="mt-rhythm">
      <div className="glass rounded-card p-card-pad grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-grid-gap-lg items-start">
        <div className="flex flex-col gap-5 items-start">
          <h2 id="partners-heading" className="m-0 text-section-h2 text-ink">
            {copy.heading}
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/empact/empact-logo.png" alt={copy.logoAlt} width={1206} height={435} className="h-10 w-auto" />
        </div>
        <ul className="m-0 p-0 list-none flex flex-col gap-3">
          {copy.people.map((p, i) => (
            <PersonRow key={p.name} person={p} copy={copy} id={`partner-${i}`} />
          ))}
        </ul>
      </div>
    </section>
  );
}
