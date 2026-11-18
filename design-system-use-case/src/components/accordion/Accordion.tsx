"use client";

import { useId, useState, type ReactNode } from "react";
import { Chevron } from "@/components/forms/controlStyles";

type AccordionProps = {
  /** The heading. It is also the button that opens and closes the section. */
  title: string;
  /** A short mono kicker above the heading. It should say something the heading does not. */
  eyebrow?: string;
  /** Which heading level to use, so the page outline stays in order. */
  headingLevel?: 2 | 3 | 4;
  defaultOpen?: boolean;
  /** The words next to the chevron while the section is closed. */
  showMoreLabel?: string;
  /** The words next to the chevron while the section is open. */
  showLessLabel?: string;
  children: ReactNode;
  className?: string;
};

/** A card-shaped section whose content can be folded away. The heading is the toggle. */
export function Accordion({ title, eyebrow, headingLevel = 3, defaultOpen = false, showMoreLabel = "Show more", showLessLabel = "Show less", children, className = "" }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  return (
    <section className={`rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] p-6 text-[var(--preview-content,var(--color-content-primary))] ${className}`}>
      {eyebrow ? <p className="eyebrow m-0 mb-2">{eyebrow}</p> : null}
      <Heading className="m-0 text-xl font-extrabold tracking-[-0.02em]">
        <button id={buttonId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)} className="group flex min-h-11 w-full items-center justify-between gap-4 rounded-[var(--radius-sm)] text-left font-[inherit]">
          <span>{title}</span>
          <span className="flex shrink-0 items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--preview-content-muted,var(--color-content-muted))] group-hover:text-[var(--preview-accent,var(--color-action-accent-dark))]">
            {open ? showLessLabel : showMoreLabel}
            <Chevron className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </span>
        </button>
      </Heading>
      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div id={panelId} role="region" aria-labelledby={buttonId} inert={!open} className={`mt-4 border-t border-[var(--preview-border,var(--color-border-subtle))] pt-4 ${open ? "" : "invisible"}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
