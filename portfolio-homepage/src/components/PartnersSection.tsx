"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { partnerCompanies, type PartnerGroup, type PartnerPerson } from "@/data/partner-companies";

type Copy = Dictionary["partners"];

// Exactly two text styles, same dark ink for both; hierarchy comes from size
// and weight only.
const PRIMARY = "text-[20px] leading-[28px] font-semibold text-ink";
const SECONDARY = "text-[16px] leading-6 font-normal text-ink";

const AVATAR = 48; // px
const OVERLAP = 12; // px
const GAP = 16; // px between facepile and text
const MAX_FACES = 3;

// Same 2px ring on blob-shaped photos and round fallbacks: four hard
// drop-shadows follow the outline, in the card's own background color.
const RING = "[filter:drop-shadow(2px_0_0_#fff8ef)_drop-shadow(-2px_0_0_#fff8ef)_drop-shadow(0_2px_0_#fff8ef)_drop-shadow(0_-2px_0_#fff8ef)]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const firstName = (name: string) => name.trim().split(/\s+/)[0] ?? name;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function joinNames(names: string[], and = "&") {
  if (names.length <= 2) return names.join(` ${and} `);
  return `${names.slice(0, -1).join(", ")} ${and} ${names[names.length - 1]}`;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`w-5 h-5 block transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 8 L10 13 L15 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM4.94 13.44H2.4V5.98h2.54v7.46zM3.67 4.94c-.81 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.65 1.47-1.47 1.47zM13.6 13.44h-2.54V9.83c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.67H6.14V5.98h2.44v1.02h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v3.87z" />
    </svg>
  );
}

function Avatar({ person, covered = false }: { person: PartnerPerson; covered?: boolean }) {
  return (
    <span className={`block shrink-0 ${RING}`} style={{ width: AVATAR, height: AVATAR }}>
      {person.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={person.photo} alt="" width={AVATAR} height={AVATAR} loading="lazy" className="block w-full h-full object-contain" />
      ) : (
        // `covered`: the next avatar overlaps this one's right edge, so the
        // initials are centred in the part that stays visible.
        <span
          className={`flex w-full h-full items-center justify-center rounded-full bg-panel ${PRIMARY}`}
          style={covered ? { paddingRight: OVERLAP } : undefined}
        >
          {initials(person.name)}
        </span>
      )}
    </span>
  );
}

// Faces stay in the header in both states and are never repeated in the panel.
function Facepile({ people }: { people: PartnerPerson[] }) {
  const faces = people.slice(0, MAX_FACES);
  const extra = people.length - faces.length;
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center">
      {faces.map((p, i) => (
        <span key={`${p.name}-${i}`} className="flex" style={{ marginLeft: i === 0 ? 0 : -OVERLAP }}>
          <Avatar person={p} covered={i < faces.length - 1 || extra > 0} />
        </span>
      ))}
      {extra > 0 && (
        <span className={`flex ${RING}`} style={{ marginLeft: -OVERLAP, width: AVATAR, height: AVATAR }}>
          <span className={`flex w-full h-full items-center justify-center rounded-full bg-panel ${PRIMARY}`}>+{extra}</span>
        </span>
      )}
    </span>
  );
}

function facepileWidth(count: number) {
  const shown = Math.min(count, MAX_FACES) + (count > MAX_FACES ? 1 : 0);
  return AVATAR + (shown - 1) * (AVATAR - OVERLAP);
}

function LinkedInLink({ person, copy }: { person: PartnerPerson; copy: Copy }) {
  if (!person.linkedinUrl) return null;
  return (
    <a
      href={person.linkedinUrl}
      data-sound="social"
      target="_blank"
      rel="noopener noreferrer"
      className={`${SECONDARY} inline-flex items-center gap-2 min-h-6 underline underline-offset-4 hover:text-accent-dark ${focusRing}`}
    >
      <LinkedInIcon />
      <span>
        {copy.linkedin.replace("{name}", firstName(person.name))}
        <span className="sr-only"> {copy.newTab}</span>
      </span>
    </a>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3H3v10h10v-3M9 2h5v5M14 2 7.5 8.5" />
    </svg>
  );
}

// The organization's own site. It lives in the expanded panel, not the header:
// the header is one big button, and a link can't sit inside a button.
function OrgLink({ company, copy }: { company: { name: string; url?: string; logo?: { src: string; width: number; height: number } }; copy: Copy }) {
  if (!company.url) return null;
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${SECONDARY} col-span-full -mt-3 inline-flex items-center gap-2 min-h-6 self-start justify-self-start underline underline-offset-4 hover:text-accent-dark ${focusRing}`}
    >
      <ExternalIcon />
      <span>
        {copy.orgSite.replace("{org}", company.name)}
        <span className="sr-only"> {copy.newTab}</span>
      </span>
      {/* The logo is part of the link and decorative: the text names it. */}
      {company.logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={company.logo.src} alt="" width={company.logo.width} height={company.logo.height} className="h-6 w-auto ml-1" />
      )}
    </a>
  );
}

function PartnerCard({ group, copy, id }: { group: PartnerGroup; copy: Copy; id: string }) {
  const { people } = group;
  const company = group.company ? partnerCompanies[group.company] : undefined;
  const orgName = company?.name;

  // Title / subtitle rule.
  let title: string;
  let subtitle: React.ReactNode = null;
  if (people.length === 1) {
    const p = people[0];
    title = p.name;
    subtitle =
      p.role && orgName ? copy.roleAtOrg.replace("{role}", p.role).replace("{org}", orgName) : p.role ?? orgName ?? null;
  } else if (people.length === 2) {
    title = joinNames(people.map((p) => firstName(p.name)));
    subtitle = orgName ? <OrgName company={company!} /> : null;
  } else if (orgName) {
    title = orgName;
    subtitle = joinNames(people.map((p) => firstName(p.name)));
  } else {
    title = joinNames(people.map((p) => firstName(p.name)));
  }
  if (group.title) title = group.title;

  const expandable = people.some((p) => p.bio || p.linkedinUrl);
  const multi = people.length > 1;
  const [expanded, setExpanded] = useState(false);

  const header = (
    <>
      <Facepile people={people} />
      <span className={`flex-1 flex flex-col break-words [overflow-wrap:anywhere] ${people.length > 2 ? "min-w-[9rem]" : "min-w-0"}`}>
        <span className={PRIMARY}>{title}</span>
        {subtitle && <span className={SECONDARY}>{subtitle}</span>}
      </span>
    </>
  );

  const cardClass = "rounded-card border border-rule-strong bg-cream";
  if (!expandable) {
    return <li className={`${cardClass} p-4 flex items-center gap-4`}>{header}</li>;
  }

  // An open multi-person card takes the whole row so the bios can sit side
  // by side instead of stacking into a very tall column.
  return (
    <li className={`${cardClass} ${multi && expanded ? "col-span-full" : ""}`}>
      <Expandable
        id={id}
        expanded={expanded}
        setExpanded={setExpanded}
        header={header}
        indent={facepileWidth(people.length) + GAP}
        wrap={people.length > 2}
        panel={[...people.map((p, i) => (
          <div key={`${p.name}-${i}`} className="flex flex-col gap-2">
            {multi && <p className={`m-0 ${PRIMARY}`}>{p.name}</p>}
            {multi && p.role && <p className={`m-0 ${SECONDARY}`}>{p.role}</p>}
            {p.bio && <p className={`m-0 ${SECONDARY} ${multi && p.role ? "mt-2" : ""}`}>{p.bio}</p>}
            <LinkedInLink person={p} copy={copy} />
          </div>
        )),
        company ? <OrgLink key="org" company={company} copy={copy} /> : null,
        ]}
      />
    </li>
  );
}

function OrgName({ company }: { company: { name: string; mark?: { src: string; width: number; height: number } } }) {
  return (
    <span className="inline-flex items-center gap-2">
      {company.mark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={company.mark.src} alt="" width={company.mark.width} height={company.mark.height} className="h-5 w-auto" />
      )}
      {company.name}
    </span>
  );
}

// The whole header is one button. The panel keeps the `hidden` attribute
// while collapsed (out of the tab order and the accessibility tree); it is
// un-hidden a frame before the height animates open, and re-hidden once the
// close animation has finished.
function Expandable({
  id,
  expanded,
  setExpanded,
  header,
  panel,
  indent,
  wrap,
}: {
  id: string;
  expanded: boolean;
  setExpanded: (v: boolean | ((prev: boolean) => boolean)) => void;
  header: React.ReactNode;
  panel: React.ReactNode;
  indent: number;
  /** Many faces: let the text drop below the facepile on narrow cards. */
  wrap: boolean;
}) {
  const [shown, setShown] = useState(false); // drives the height animation
  const [hidden, setHidden] = useState(true); // the `hidden` attribute
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = `${id}-panel`;

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (expanded) {
      setHidden(false);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    timer.current = setTimeout(() => setHidden(true), 200);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [expanded]);

  return (
    <>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((v) => !v)}
          className={`relative w-full text-left p-4 pr-12 flex items-center gap-x-4 gap-y-3 rounded-card ${wrap ? "flex-wrap" : ""} ${focusRing}`}
        >
          {header}
          {/* Absolutely centred on the whole header, whether or not the
              text wrapped under the facepile. */}
          <span aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 flex text-ink">
            <ChevronIcon open={expanded} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        hidden={hidden}
        className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${shown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          {/* Aligned with the header's text column from 480px up; below that
              there is no room to indent. */}
          <div
            className="px-4 pb-4 grid gap-x-10 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))] min-[480px]:pl-[var(--indent)]"
            style={{ ["--indent" as string]: `${indent + 16}px` }}
          >
            {panel}
          </div>
        </div>
      </div>
    </>
  );
}

export default function PartnersSection({ copy }: { copy: Copy }) {
  return (
    <section aria-labelledby="partners-heading" className="mt-rhythm">
      <h2 id="partners-heading" className="m-0 mb-6 text-card-h3 text-ink">
        {copy.heading}
      </h2>
      {/* align-items: start, so opening one card doesn't stretch or shift its
          neighbours. */}
      <ul className="m-0 p-0 list-none grid gap-4 items-start [grid-template-columns:repeat(auto-fill,minmax(min(100%,560px),1fr))]">
        {copy.groups.map((g, i) => (
          <PartnerCard key={`${g.company ?? g.title ?? g.people[0]?.name}-${i}`} group={g} copy={copy} id={`partner-${i}`} />
        ))}
      </ul>
    </section>
  );
}
