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
  // Plain tinted panes inside one glass card (nested .glass would only blur
  // its parent). Rows stack, so more collaborators just add one slim row each.
  const row = "rounded-card bg-white/45 border border-white/70 px-5 py-4 flex items-center gap-4 sm:gap-6";
  return (
    <section aria-labelledby="partners-heading" className="mt-rhythm">
      <div className="glass rounded-card p-card-pad flex flex-col gap-6">
        <h2 id="partners-heading" className="m-0 text-section-h2 text-ink">
          {copy.heading}
        </h2>
        <ul className="m-0 p-0 list-none flex flex-col gap-3">
          <li className={`${row} flex-wrap`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/empact/empact-logo.png" alt={copy.logoAlt} width={1206} height={435} className="h-10 w-auto shrink-0" />
            <p className="m-0 text-lead text-body sm:ml-4">{copy.tagline}</p>
          </li>
          {copy.people.map((p) => (
            <li key={p.name} className={`${row} flex-wrap`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.photo} alt={p.photoAlt} width={241} height={258} loading="lazy" className="w-14 h-auto shrink-0" />
              <div className="min-w-0 flex-1 basis-40">
                <h3 className="m-0 text-[clamp(17px,1.4vw,20px)] font-bold leading-tight text-ink">{p.name}</h3>
                <p className="m-0 mt-1 text-[14px] leading-snug text-muted">{p.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="text-[15px] font-bold text-ink border-b border-accent pb-1 whitespace-nowrap transition-transform duration-500 ease-accel-decel hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
              >
                {copy.readBio}
              </button>
              <LinkedInLink person={p} label={copy.linkedin} />
            </li>
          ))}
        </ul>
      </div>
      <BioDialog person={active} copy={copy} onClose={() => setActive(null)} />
    </section>
  );
}
