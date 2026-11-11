"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Person = Dictionary["partners"]["people"][number];

// "In collaboration with" card under the contact block. Same glass card,
// mono eyebrow and orange-underlined links as the rest of the site. Each
// bio sits behind a toggle (same grid-rows 0fr -> 1fr technique as
// AccordionSection) so the card stays calm until someone wants to read more.
function PersonBlock({ person, copy, id }: { person: Person; copy: Dictionary["partners"]; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-bio`;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.photo}
          alt={person.photoAlt}
          width={241}
          height={258}
          loading="lazy"
          className="w-20 h-auto shrink-0"
        />
        <div className="min-w-0">
          <h3 className="m-0 text-card-h3 text-ink">{person.name}</h3>
          <p className="m-0 mt-1 text-body text-muted">{person.role}</p>
        </div>
      </div>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-500 ease-accel-decel ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p className="m-0 text-body max-w-prose">{person.bio}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="text-nav font-bold text-ink border-b border-accent pb-2 whitespace-nowrap transition-transform duration-500 ease-accel-decel hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
        >
          {open ? copy.hideBio : copy.readBio.replace("{name}", person.short)}
        </button>
        <a
          href={person.linkedinUrl}
          data-sound="social"
          target="_blank"
          rel="noreferrer"
          aria-label={`${person.name} – ${copy.linkedin}`}
          className="font-mono-label text-mono-label uppercase text-muted hover:text-accent-dark focus-visible:text-accent-dark"
        >
          {copy.linkedin} ↗
        </a>
      </div>
    </div>
  );
}

export default function PartnersSection({ copy }: { copy: Dictionary["partners"] }) {
  return (
    <section aria-labelledby="partners-heading" className="mt-rhythm">
      <div className="glass rounded-card p-card-pad flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div>
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.eyebrow}</p>
            <h2 id="partners-heading" className="mt-4 m-0 text-section-h2 text-ink max-w-[22ch]">
              {copy.heading}
            </h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/empact/empact-logo.png" alt={copy.logoAlt} width={1206} height={435} className="h-14 w-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gap-lg items-start">
          {copy.people.map((p, i) => (
            <PersonBlock key={p.name} person={p} copy={copy} id={`partner-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
