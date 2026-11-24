import type { ReactNode } from "react";
import InlineText from "@/components/blog/InlineText";
import Reveal from "@/components/Reveal";
import type { CaseStory, CaseStudy, GalleryImage, StoryFigureSet, StorySection, StoryStep } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";
import { fmt } from "@/i18n/format";
import type { TocItem } from "../TableOfContents";
import CountUpStats from "./CountUpStats";
import StoryFigures from "./StoryFigures";

/*
 * The story layout: hero → TL;DR → background → problem → process →
 * what shipped → impact → reflections. One column of text at reading width,
 * screenshots inside the sections they belong to.
 *
 * Hierarchy rule used throughout: the mono eyebrow says *which* part of the
 * story this is (from the dictionary, same on every study), the heading says
 * *what happened* (from the content, different on every study).
 */

const EYEBROW = "font-mono-label text-mono-label uppercase text-accent-dark m-0";
const PARA = "m-0 max-w-prose-cs text-body-lg text-body text-pretty";

/** Section ids, shared by the page's table of contents and the sections. */
export function storyTocItems(story: CaseStory, copy: Dictionary["caseStudy"]): TocItem[] {
  const s = copy.story;
  return [
    { id: "tldr", label: s.tldr },
    { id: "background", label: s.background },
    { id: "problem", label: s.problem },
    { id: "process", label: s.process },
    { id: "shipped", label: story.shipped.eyebrow ?? s.shipped },
    { id: "impact", label: s.impact },
    { id: "reflections", label: s.reflections },
  ].filter((item) => item.id !== "background" || story.background.paragraphs.length > 0);
}

/** Reading time from the words a visitor actually reads. */
export function storyReadMinutes(story: CaseStory, wordsPerMinute: number): number {
  const text = [
    ...story.tldr,
    ...story.background.paragraphs,
    story.problem.statement,
    ...story.problem.paragraphs,
    ...story.problem.constraints,
    ...(story.problem.closing ?? []),
    ...(story.process.intro ?? []),
    ...story.process.steps.flatMap((step) => [step.title, ...step.paragraphs]),
    ...story.shipped.paragraphs,
    ...(story.shipped.list ?? []),
    ...(story.shipped.qa ?? []).flatMap((q) => [q.question, ...q.answers.flatMap((a) => [a.title, a.body])]),
    ...(story.shipped.closing ?? []),
    ...story.impact.intro,
    ...story.reflections.items.flatMap((item) => [item.title, item.body]),
  ].join(" ");
  return Math.max(3, Math.round(text.trim().split(/\s+/).length / wordsPerMinute));
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className={PARA}>
          <InlineText text={paragraph} />
        </p>
      ))}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  heading,
  children,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="flex flex-col gap-8 border-t border-rule pt-10">
      <div className="flex flex-col gap-4">
        <p className={EYEBROW}>{eyebrow}</p>
        <h2 id={`${id}-heading`} className="m-0 max-w-prose-cs text-section-h2 text-ink text-balance">
          {heading}
        </h2>
      </div>
      {children}
    </section>
  );
}

function figureRows(set: StoryFigureSet | undefined): GalleryImage[][] {
  if (!set || set.length === 0) return [];
  return Array.isArray(set[0]) ? (set as GalleryImage[][]) : [set as GalleryImage[]];
}

/** Each row is its own group: same height inside the row, own lightbox. */
function Figures({ set, copy }: { set: StoryFigureSet | undefined; copy: Dictionary["caseStudy"] }) {
  const rows = figureRows(set);
  if (rows.length === 0) return null;
  return (
    <div className="flex flex-col gap-8">
      {rows.map((row) => (
        <StoryFigures key={row.map((f) => f.src).join("|")} figures={row} copy={copy} />
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex max-w-prose-cs list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-body-lg text-body text-pretty">
          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-pill bg-accent" />
          <span>
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Steps in a row joined by arrows; stacks on small screens. Read as an
 * ordered list by assistive tech. */
function Flow({ steps, label }: { steps: string[]; label?: string }) {
  return (
    <ol aria-label={label} className="m-0 flex list-none flex-col gap-3 p-0 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center">
          <div className="flex h-full flex-1 flex-col gap-2 rounded-[16px] border border-rule bg-white p-5">
            <span aria-hidden="true" className="font-mono-label text-mono-label uppercase text-accent-dark">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-body-sm text-ink text-pretty">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="self-center py-1 text-muted md:px-2 md:py-0">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** A question at the top, the paths it splits into side by side, and the
 * shared steps they join into below. Read in order by assistive tech: the
 * question is a heading-like lead, each path a list. */
function Branches({ branches }: { branches: NonNullable<StoryStep["branches"]> }) {
  return (
    <div className="flex flex-col items-stretch gap-3">
      <p className="m-0 self-center rounded-pill border border-accent bg-white px-5 py-2 text-center text-body-sm font-semibold text-ink">
        {branches.question}
      </p>
      <div aria-hidden="true" className="flex justify-around text-muted">
        {branches.paths.map((path) => (
          <span key={path.title}>↓</span>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {branches.paths.map((path) => (
          <div key={path.title} className="flex flex-col gap-3 rounded-[16px] border border-rule bg-white p-5">
            <p className="m-0 font-mono-label text-mono-label uppercase text-accent-dark">{path.when}</p>
            <p className="m-0 text-sub-h4 text-ink">{path.title}</p>
            <ol className="m-0 flex list-none flex-col gap-2 p-0">
              {path.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-body-sm leading-snug text-ink">
                  <span aria-hidden="true" className="font-mono-label text-mono-label text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      {branches.then?.map((phase) => (
        <div key={phase.label} className="flex flex-col gap-3">
          <div aria-hidden="true" className="flex justify-center text-muted">↓</div>
          <div
            className={`flex flex-col gap-3 rounded-[20px] p-3 ${
              phase.loop ? "border border-dashed border-accent" : ""
            }`}
          >
            <p className="m-0 font-mono-label text-mono-label uppercase text-accent-dark">{phase.label}</p>
            <Flow steps={phase.steps} label={phase.label} />
            {phase.loop && (
              <p className="m-0 flex items-center gap-2 text-body-sm text-body">
                <span aria-hidden="true" className="text-accent-dark">↺</span>
                {phase.loop}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Question on the left, the decision that answers it on the right; one row
 * per question, stacked on small screens. */
function QuestionsAndAnswers({ items }: { items: NonNullable<StorySection["qa"]> }) {
  return (
    <dl className="m-0 flex flex-col">
      {items.map((item) => (
        <div
          key={item.question}
          className="grid grid-cols-1 gap-3 border-t border-rule py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-grid-gap"
        >
          <dt className="m-0 text-sub-h4 text-ink text-balance">{item.question}</dt>
          <dd className="m-0 flex flex-col gap-4">
            {item.answers.map((answer) => (
              <p key={answer.title} className="m-0 text-body-lg text-body text-pretty">
                <strong className="font-semibold text-ink">{answer.title}.</strong> {answer.body}
              </p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Closing({ section }: { section: StorySection }) {
  if (!section.closing || section.closing.length === 0) return null;
  return (
    <div className="flex flex-col gap-4">
      {section.closingLabel && <h3 className={EYEBROW}>{section.closingLabel}</h3>}
      <Paragraphs paragraphs={section.closing} />
    </div>
  );
}

function ProseWithFigures({ section, copy }: { section: StorySection; copy: Dictionary["caseStudy"] }) {
  return (
    <>
      {section.paragraphs.length > 0 && <Paragraphs paragraphs={section.paragraphs} />}
      {/* Figures before the list: the reader sees the screen before reading
          why it was designed that way. */}
      <Figures set={section.figures} copy={copy} />
      {section.list && section.list.length > 0 && (
        <div className="flex flex-col gap-4">
          {section.listLabel && <h3 className={EYEBROW}>{section.listLabel}</h3>}
          <BulletList items={section.list} />
        </div>
      )}
      {section.qa && section.qa.length > 0 && (
        <div className="flex flex-col gap-4">
          {section.listLabel && <h3 className={EYEBROW}>{section.listLabel}</h3>}
          <QuestionsAndAnswers items={section.qa} />
        </div>
      )}
      <Closing section={section} />
    </>
  );
}

/** Role, timeline, team and the rest in one card: two columns of short
 * lines, so a reader can scan it in a few seconds. A `wide` fact sits under a
 * rule across the full width, as a list. */
function FactsCard({ facts }: { facts: CaseStory["facts"] }) {
  const lines = (value: string | string[]) => (Array.isArray(value) ? value : [value]);
  const label = "font-mono-label text-mono-label uppercase text-muted m-0";
  const short = facts.filter((fact) => !fact.wide);
  const wide = facts.filter((fact) => fact.wide);
  return (
    <div className="rounded-card glass p-card-pad">
      <dl className="m-0 grid grid-cols-1 gap-x-grid-gap-lg gap-y-7 sm:grid-cols-2">
        {short.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <dt className={`${label} mb-1.5`}>{fact.label}</dt>
            {lines(fact.value).map((line) => (
              <dd key={line} className="m-0 text-body-sm leading-snug text-ink">
                {line}
              </dd>
            ))}
          </div>
        ))}
        {wide.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-3 border-t border-rule pt-6 sm:col-span-2">
            <dt className={label}>{fact.label}</dt>
            <dd className="m-0">
              <ul className="m-0 list-none p-0 sm:columns-2 sm:gap-x-grid-gap-lg">
                {lines(fact.value).map((line) => (
                  <li key={line} className="mb-2.5 flex break-inside-avoid gap-3 text-body-sm leading-snug text-ink">
                    <span aria-hidden="true" className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-pill bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M10 5.5 V10 L13 12" />
      </g>
    </svg>
  );
}

export default function StoryLayout({
  study,
  story,
  copy,
  wordsPerMinute,
}: {
  study: CaseStudy;
  story: CaseStory;
  copy: Dictionary["caseStudy"];
  wordsPerMinute: number;
}) {
  const s = copy.story;
  const readMinutes = storyReadMinutes(story, wordsPerMinute);

  return (
    <>
      {/* Hero: what it is and what came of it, then the one screen that
          sums it up, then the facts a reader scans for (role, time, team). */}
      <Reveal>
        <section aria-labelledby="case-study-title" className="flex flex-col gap-8 border-t border-rule pt-[clamp(32px,4vw,48px)]">
          <div className="flex flex-col gap-6">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">
              {copy.breadcrumbEyebrow} · {study.title}
            </p>
            <h1 id="case-study-title" className="m-0 max-w-[18em] text-section-h2 text-ink text-balance">
              {study.headline.replace(/\n/g, " ")}
            </h1>
            <p className="m-0 max-w-prose-cs text-lead text-body">{study.description}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {study.categoryTag && (
                <span className="font-mono-label text-mono-label-em uppercase text-accent-dark glass-pill rounded-pill py-2 px-4 whitespace-nowrap">
                  {study.categoryTag}
                </span>
              )}
              <span className="flex items-center gap-2 text-body-sm text-muted">
                <ClockIcon />
                {fmt(copy.readingTime, { min: readMinutes })}
              </span>
            </div>
          </div>

          {story.heroBundle ? (
            <StoryFigures figures={[story.heroImage]} copy={copy} frameless priority />
          ) : (
            <StoryFigures figures={[story.heroImage]} copy={copy} aspect={16 / 10} priority />
          )}

          <FactsCard facts={story.facts} />
        </section>
      </Reveal>

      {/* TL;DR: the only boxed block, because it's the one a skimming reader
          should be able to stop at. */}
      <Reveal>
        <section id="tldr" aria-labelledby="tldr-heading" className="rounded-card glass p-card-pad flex flex-col gap-5">
          <h2 id="tldr-heading" className={EYEBROW}>
            {s.tldr}
          </h2>
          {story.tldr.map((paragraph, i) => (
            <p key={i} className="m-0 max-w-prose-cs text-lead text-ink text-pretty">
              <InlineText text={paragraph} />
            </p>
          ))}
        </section>
      </Reveal>

      {story.background.paragraphs.length > 0 && (
        <Reveal>
          <Section id="background" eyebrow={s.background} heading={story.background.heading}>
            <ProseWithFigures section={story.background} copy={copy} />
          </Section>
        </Reveal>
      )}

      <Reveal>
        <Section id="problem" eyebrow={s.problem} heading={story.problem.heading}>
          <p className="m-0 max-w-prose-cs text-card-h3 text-ink text-balance border-l-4 border-accent pl-6">
            {story.problem.statement}
          </p>
          {story.problem.paragraphs.length > 0 && <Paragraphs paragraphs={story.problem.paragraphs} />}
          <div className="flex flex-col gap-4">
            <h3 className={EYEBROW}>{s.constraints}</h3>
            <BulletList items={story.problem.constraints} />
          </div>
          <Closing section={story.problem} />
          <Figures set={story.problem.figures} copy={copy} />
        </Section>
      </Reveal>

      <Section id="process" eyebrow={s.process} heading={story.process.heading}>
        {story.process.intro && <Paragraphs paragraphs={story.process.intro} />}
        <ol className="m-0 flex list-none flex-col gap-14 p-0">
          {story.process.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal>
                <article className="flex flex-col gap-6">
                  <div className="flex items-baseline gap-5">
                    <span aria-hidden="true" className="text-step-num text-accent-dark tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="m-0 text-card-h3 text-ink text-balance">{step.title}</h3>
                  </div>
                  <Paragraphs paragraphs={step.paragraphs} />
                  {step.branches && <Branches branches={step.branches} />}
                  {step.flow && step.flow.length > 0 && <Flow steps={step.flow} label={step.flowLabel} />}
                  <Figures set={step.figures} copy={copy} />
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Reveal>
        <Section id="shipped" eyebrow={story.shipped.eyebrow ?? s.shipped} heading={story.shipped.heading}>
          <ProseWithFigures section={story.shipped} copy={copy} />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="impact" eyebrow={s.impact} heading={story.impact.heading}>
          {story.impact.highlights.some((h) => h.work) ? (
            // Work → result chains lead, so a skimming reader sees the link first.
            <>
              <CountUpStats stats={story.impact.highlights} />
              <Paragraphs paragraphs={story.impact.intro} />
            </>
          ) : (
            <>
              <Paragraphs paragraphs={story.impact.intro} />
              <CountUpStats stats={story.impact.highlights} />
            </>
          )}
        </Section>
      </Reveal>

      <Reveal>
        <Section id="reflections" eyebrow={s.reflections} heading={story.reflections.heading}>
          <ul className="m-0 flex max-w-prose-cs list-none flex-col gap-10 p-0">
            {story.reflections.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-3">
                <h3 className="m-0 text-sub-h4 text-ink">{item.title}</h3>
                <p className="m-0 text-body-lg text-body text-pretty">
                  <InlineText text={item.body} />
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </Reveal>
    </>
  );
}
