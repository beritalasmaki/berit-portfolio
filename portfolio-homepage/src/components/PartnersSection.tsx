"use client";

import { useEffect, useRef, useState } from "react";
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

function LinkedInLink({ person, label }: { person: Person; label: string }) {
  return (
    <a
      href={person.linkedinUrl}
      data-sound="social"
      target="_blank"
      rel="noreferrer"
      aria-label={`${person.name} – ${label}`}
      className="glass-button inline-flex items-center justify-center w-11 h-11 rounded-pill text-body hover:text-ink focus-visible:text-ink"
    >
      <LinkedInIcon />
    </a>
  );
}

// Bios live in a native <dialog>: focus trapping, Esc to close and inert
// background come for free, and the card keeps the same height however many
// collaborators are added — each one is a fixed-size tile, and the grid wraps.
function BioDialog({ person, copy, onClose }: { person: Person | null; copy: Dictionary["partners"]; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (person && !d.open) d.showModal();
    if (!person && d.open) d.close();
  }, [person]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="partner-dialog-title"
      className="m-auto w-[min(92vw,560px)] max-h-[85vh] rounded-card border border-white/85 bg-[#fffaf3] p-0 text-ink shadow-2xl backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
    >
      {person && (
        <div className="p-card-pad flex flex-col gap-5">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={person.photo} alt="" width={241} height={258} className="w-16 h-auto shrink-0" />
            <div className="min-w-0">
              <h3 id="partner-dialog-title" className="m-0 text-card-h3 text-ink">{person.name}</h3>
              <p className="m-0 mt-1 text-body text-muted">{person.role}</p>
            </div>
          </div>
          <p className="m-0 text-body">{person.bio}</p>
          <div className="flex items-center justify-between gap-4">
            <LinkedInLink person={person} label={copy.linkedin} />
            <button
              type="button"
              onClick={onClose}
              className="text-nav font-bold text-ink border-b border-accent pb-2 transition-transform duration-500 ease-accel-decel hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
            >
              {copy.closeBio}
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function PartnersSection({ copy }: { copy: Dictionary["partners"] }) {
  const [active, setActive] = useState<Person | null>(null);
  // One slim card: title + logo on the left, one pill per person on the
  // right (wraps into extra pill rows as collaborators are added). Each pill
  // opens the dialog, which holds the bio and the LinkedIn link, so the card
  // itself carries no extra controls. Pills are plain tinted panes, not
  // nested .glass (a nested backdrop-filter only blurs its parent).
  return (
    <section aria-labelledby="partners-heading" className="mt-rhythm">
      <div className="glass rounded-card px-card-pad py-5 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
        <div className="flex items-center gap-4 shrink-0">
          <h2 id="partners-heading" className="m-0 text-card-h3 text-ink">
            {copy.heading}
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/empact/empact-logo.png" alt={copy.logoAlt} width={1206} height={435} className="h-9 w-auto" />
        </div>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-3 lg:flex-1 lg:justify-end">
          {copy.people.map((p) => (
            <li key={p.name} className="w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActive(p)}
                aria-haspopup="dialog"
                aria-label={`${copy.readBio}: ${p.name}`}
                className="group w-full text-left rounded-card bg-white/45 border border-white/70 pl-2 pr-4 py-2 flex items-center gap-3 transition-transform duration-500 ease-accel-decel hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.photo} alt="" width={241} height={258} loading="lazy" className="w-11 h-auto shrink-0" />
                <span className="min-w-0">
                  <span className="block text-[16px] font-bold leading-tight text-ink">{p.name}</span>
                  <span className="block mt-0.5 text-[13px] leading-snug text-muted">{p.role}</span>
                </span>
                <span className="ml-auto pl-3 font-mono-label text-mono-label uppercase text-muted whitespace-nowrap group-hover:text-accent-dark group-focus-visible:text-accent-dark">
                  {copy.readBio}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <BioDialog person={active} copy={copy} onClose={() => setActive(null)} />
    </section>
  );
}
