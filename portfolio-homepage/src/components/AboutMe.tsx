"use client";

import Image from "next/image";
import { useEffect, useId, useState, type ReactNode } from "react";
import { site } from "@/data/site";

// Small brand mark for the LinkedIn button — same path Header.tsx uses for
// its own LinkedIn pill, duplicated locally rather than shared, matching
// this codebase's existing per-file icon convention (see ProcessTimeline's
// icon set).
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM4.94 13.44H2.4V5.98h2.54v7.46zM3.67 4.94c-.81 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.65 1.47-1.47 1.47zM13.6 13.44h-2.54V9.83c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.67H6.14V5.98h2.44v1.02h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v3.87z" />
    </svg>
  );
}

// "Working with me" row icons — same visual language as ProcessTimeline's
// icon set: viewBox 0 0 20 20, w-5 h-5, accent-stroke line art.
function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2.5 L16.5 4.8 V9.5 C16.5 13.5 13.6 16.7 10 17.8 C6.4 16.7 3.5 13.5 3.5 9.5 V4.8 Z" />
        <path d="M7 10 L9 12 L13.2 7.5" />
      </g>
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 8.5 H13.5 V13 C13.5 15.2 11.8 17 9.6 17 H8.4 C6.2 17 4.5 15.2 4.5 13 Z" />
        <path d="M13.5 9.5 H15 C16.1 9.5 17 10.4 17 11.5 C17 12.6 16.1 13.5 15 13.5 H13.3" />
        <path d="M7.3 3 C7.3 4 8.3 4 8.3 5 M10.7 3 C10.7 4 11.7 4 11.7 5" />
      </g>
    </svg>
  );
}

function DetailIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8.7" cy="8.7" r="5.2" />
        <path d="M12.6 12.6 L17 17" />
      </g>
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 5.5 H16.5 V12.5 H8.5 L5.5 15.2 V12.5 H3.5 Z" />
        <path d="M6.3 8.3 H13.7 M6.3 10.3 H11.2" />
      </g>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 shrink-0 block">
      <g fill="none" stroke="#FC890C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="2.6" />
        <path d="M2.5 16.2 C2.5 12.6 4.5 10.8 7 10.8 C9.5 10.8 11.5 12.6 11.5 16.2" />
        <circle cx="14.2" cy="8.2" r="2.1" />
        <path d="M11.9 16.2 C12.1 13.2 13.5 11.8 14.4 11.8 C16.3 11.8 17.5 13.4 17.5 16.2" />
      </g>
    </svg>
  );
}

// The site's standard grey mono eyebrow, shared by the two placements of
// the "hover/press for more" hint below so they can't drift apart.
const HINT_CLASS = "font-mono-label text-mono-label uppercase text-muted";

type WorkingWithMeItem = {
  icon: ReactNode;
  statement: string;
  detail: string;
};

const items: WorkingWithMeItem[] = [
  {
    icon: <ShieldIcon />,
    statement: "I'll push back, respectfully.",
    detail:
      "If something won't work for users or developers, I'll say so early. I always explain the reason, not just share an opinion.",
  },
  {
    icon: <CoffeeIcon />,
    statement: "I'll make the coffee and bring the snacks.",
    detail: "Good work happens in a good mood. I like keeping the atmosphere light, even during crunch time.",
  },
  {
    icon: <DetailIcon />,
    statement: "I'll notice the details that matter.",
    detail: "Not every detail needs attention, but the ones that affect trust or usability always get mine.",
  },
  {
    icon: <FeedbackIcon />,
    statement: "I'll ask for feedback early, not just at the end.",
    detail: "I'd rather show a rough version early than a polished one too late to change.",
  },
  {
    icon: <TeamIcon />,
    statement: "I'll speak up for both the user and the developer building it.",
    detail: "Good design has to work for the person using it and the person building it. I try not to forget either side.",
  },
];

/**
 * One "Working with me" row. Four things worth calling out:
 *
 * 1. Hover/focus state is local to each row (not lifted to the parent), so
 *    hovering row N never programmatically forces row N-1 to close — each
 *    row only reacts to the mouse actually entering/leaving *its own*
 *    bounds.
 * 2. The detail card sits directly on top of the row it belongs to
 *    (`absolute inset-0`, exactly the button's own box), not in the space
 *    above or below it — the two cross-fade with a slow, soft transition
 *    (a blur filter was tried here first and read as fussy/distracting
 *    rather than calm, so it's gone). Since the detail card never leaves
 *    its own row's footprint, it can't encroach on a neighboring row the
 *    way an adjacent-space reveal could, so unlike that approach every row
 *    behaves identically — no "last row has nowhere to open into" case to
 *    special-case.
 * 3. Only the (non-interactive) overlay scales in — the button itself only
 *    fades, never scales. Scaling the button was tried first too, and
 *    broke hover almost immediately (confirmed by sampling `aria-expanded`
 *    every 50ms): shrinking the very element whose `onMouseLeave` drives
 *    `hovered` shrinks its own hit-tested hitbox out from under a
 *    stationary cursor, firing that `onMouseLeave` before the transition
 *    even finishes. The overlay has no such risk since it's
 *    `pointer-events-none` (see 4), so it's free to scale.
 * 4. The overlay is `pointer-events-none` in *every* state, not just while
 *    collapsed. It has to be: it sits precisely on top of the button that
 *    controls it, so if it ever accepted pointer events, the moment it
 *    faded in the cursor would suddenly be "over" the overlay instead of
 *    the button beneath it — firing that button's `onMouseLeave`, which
 *    hides the overlay, which hands hover back to the button, which
 *    re-fires `onMouseEnter`... a flicker loop. Letting every pointer
 *    event pass through to the button underneath avoids it entirely.
 */
function WorkingWithMeRow({
  item,
  pinned,
  onTogglePin,
  hoverCapable,
  buttonId,
  panelId,
}: {
  item: WorkingWithMeItem;
  pinned: boolean;
  onTogglePin: () => void;
  hoverCapable: boolean;
  buttonId: string;
  panelId: string;
}) {
  const [hovered, setHovered] = useState(false);
  const expanded = pinned || (hoverCapable && hovered);
  // The hint names the gesture that actually opens the row, so it reads off
  // the same `hoverCapable` flag that decides which gesture that is — a
  // touch device has no hover to offer, and telling it to hover is an
  // instruction it cannot follow. Deriving both from one source keeps the
  // label from drifting out of step with the behaviour.
  const hint = hoverCapable ? "hover for more" : "press for more";

  return (
    <li className="relative">
      <button
        id={buttonId}
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onTogglePin}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={`group relative z-0 flex w-full min-h-[124px] items-center gap-4 bg-panel rounded-frame p-4 text-left transition-[background-color,opacity] duration-500 ease-out hover:bg-rule-strong focus-visible:bg-rule-strong ${
          expanded ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="w-11 h-11 flex items-center justify-center bg-white border border-rule rounded-frame shrink-0">
          {item.icon}
        </span>
        {/* `min-w-0` matters: without it this flex child refuses to shrink
            below its own content width, and the nowrap hint beside it spilled
            past the card's right edge instead of giving way. */}
        <span className="flex-1 min-w-0 flex flex-col gap-1.5">
          <span className="text-body-em font-semibold text-ink text-pretty">{item.statement}</span>
          {/* Below xl the hint drops onto its own line under the statement.
              Side by side, its ~130px of nowrap mono left roughly 85px for
              the statement in the narrow one-column mobile card — enough to
              wrap "I'll make the coffee and bring the snacks." to one word
              per line.
              `xl` and not `lg`, which is where this first landed: from `md`
              the About grid makes this a half-width column, so at 1024 a
              side-by-side hint left the statement just 173px — *narrower*
              than the 224px it gets stacked on a 414px phone. Measured
              statement widths with the hint beside it: 173px @1024 (too
              tight), 290px @1280, 346px @1440. */}
          <span aria-hidden="true" className={`${HINT_CLASS} xl:hidden`}>
            {hint}
          </span>
        </span>
        <span aria-hidden="true" className={`hidden xl:block shrink-0 whitespace-nowrap ${HINT_CLASS}`}>
          {hint}
        </span>
      </button>
      {/* See point 2 and 3 above: same box as the button (inset-0), always
          pointer-events-none, cross-fading opacity + scale in step with it. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!expanded}
        className={`absolute inset-0 z-10 flex items-center rounded-frame border border-rule bg-white shadow-frame-accent p-4 pointer-events-none transition-[opacity,transform] duration-500 ease-out ${
          expanded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        <p className="m-0 text-body-sm text-ink-alt text-pretty">{item.detail}</p>
      </div>
    </li>
  );
}

/**
 * Right-hand card of the About Me section: a list of rows that reveal a
 * short explanation each. Desktop (an actual mouse) reveals on hover;
 * touch devices have no hover, so they reveal on tap instead — detected via
 * `(hover: hover) and (pointer: fine)`, the standard feature query, rather
 * than a viewport-width guess or a long-press workaround. Independently of
 * input type, every row is a real `<button>`, so Tab + Enter/Space always
 * works; activating it "pins" the row open (persists on blur/mouse-leave)
 * so a keyboard user isn't required to keep focus on it to keep reading.
 */
function WorkingWithMe() {
  const [hoverCapable, setHoverCapable] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    function onChange() {
      setHoverCapable(query.matches);
    }
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-white border border-rule rounded-card p-card-pad">
      <h3 className="m-0 text-card-h3 text-ink">Working with me</h3>
      <ul className="flex flex-col gap-3 list-none p-0 m-0">
        {items.map((item, index) => (
          <WorkingWithMeRow
            key={item.statement}
            item={item}
            pinned={openIndex === index}
            onTogglePin={() => setOpenIndex((current) => (current === index ? null : index))}
            hoverCapable={hoverCapable}
            buttonId={`${baseId}-wwm-button-${index}`}
            panelId={`${baseId}-wwm-panel-${index}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-grid-gap items-stretch">
      <div className="flex flex-col gap-6 bg-panel rounded-card p-card-pad">
        <div className="flex items-center gap-4">
          <Image
            src="/photo.png"
            alt="Berit Alasmäki"
            width={80}
            height={80}
            className="w-20 h-20 object-contain shrink-0"
          />
          <p className="m-0 text-body-em font-semibold italic text-ink">Hey, happy to have you here! ♥</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="m-0 text-body-lg text-body">
            Growing up in a small town in Finland, I never expected to end up in tech, let alone design. I studied
            IT and web development, but my real start in design happened almost by accident: a friend brought me
            into his startup while I was still in high school, and that&apos;s where I first got hands-on
            experience with both design tools and code. I&apos;ve been curious about both ever since.
          </p>
          <p className="m-0 text-body-lg text-body">
            Ten years in design, nine of them as a consultant, taught me to move between very different worlds:
            public sector platforms, industrial tools, environmental data systems, often as the only designer in
            the room. I&apos;ve worked on more than 25 projects, and each one shaped how I work today. That kind of
            work forces you to care about your craft, because there might not be anyone else to catch what you
            miss.
          </p>
          <p className="m-0 text-body-lg text-body">
            I value quality work, clear focus, and strong collaboration. Instead of worrying about how AI is
            changing design, I take a practical approach: I use the tools that make sense, keep improving my
            process, and keep building solid product experiences.
          </p>
        </div>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-white text-nav font-semibold py-3 px-6 rounded-pill self-start whitespace-nowrap transition-[background-color,transform] duration-150 ease-out hover:bg-ink-alt hover:text-white hover:-translate-y-px focus-visible:bg-ink-alt focus-visible:text-white focus-visible:-translate-y-px focus-visible:outline-white"
        >
          <LinkedInIcon />
          Connect on LinkedIn
        </a>
      </div>

      <WorkingWithMe />
    </div>
  );
}
