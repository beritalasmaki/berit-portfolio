import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AccordionSection from "@/components/case-study/AccordionSection";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ChallengesSection from "@/components/case-study/ChallengesSection";
import ImpactSection from "@/components/case-study/ImpactSection";
import OtherCaseStudies from "@/components/case-study/OtherCaseStudies";
import ParagraphList from "@/components/case-study/ParagraphList";
import ScreenshotGallery from "@/components/case-study/ScreenshotGallery";
import SectionBody from "@/components/case-study/SectionBody";
import SneakPeekHero from "@/components/case-study/SneakPeekHero";
import TableOfContents, { type TocItem } from "@/components/case-study/TableOfContents";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy, hasFullContent } from "@/data/case-studies";
import type { CaseStudySlug } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug as CaseStudySlug);
  if (!study) return {};
  return {
    title: `${study.title} — Berit Alasmäki`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug as CaseStudySlug);
  if (!study) notFound();

  // `full` still decides the *hero* — a sneak-peek needs a gallery to peek
  // at — but every section below renders on its own data being present
  // rather than on this one flag. That lets a study be written in pieces:
  // design-system has an intro and a "How it started" but no gallery yet,
  // and gets exactly those two sections instead of all-or-nothing.
  const full = hasFullContent(study);
  const hasIntro = study.intro !== undefined;
  const hasGallery = study.gallery !== undefined && study.gallery.length > 0;
  const hasImpact = study.impactIntro !== undefined && study.impactCards !== undefined;
  const hasStarted = study.howItStarted !== undefined && study.howItStarted.length > 0;
  const extraSections = study.additionalSections ?? [];
  const hasChallenges = study.challenges !== undefined && study.challenges.length > 0;
  const hasDifferently =
    study.whatIWouldDoDifferently !== undefined && study.whatIWouldDoDifferently.length > 0;

  // Built from what the page actually renders, so the TOC can never offer a
  // link to a section that isn't there.
  const tocItems: TocItem[] = [
    ...(!full ? [{ id: "about-project", label: "About the project" }] : []),
    ...(hasIntro ? [{ id: "starting-point", label: "Starting Point" }] : []),
    ...(hasGallery ? [{ id: "screens", label: "Examples of UI-screens" }] : []),
    ...(hasImpact ? [{ id: "impact", label: "The Impact" }] : []),
    ...(hasStarted ? [{ id: "started", label: "How it started" }] : []),
    // In content order, right after "How it started" — where they render.
    ...extraSections.map((section) => ({
      id: section.id,
      label: section.navLabel ?? section.heading,
    })),
    ...(hasChallenges ? [{ id: "challenges", label: "Challenges & Problem-Solving" }] : []),
    ...(hasDifferently ? [{ id: "differently", label: "What I would do differently" }] : []),
    { id: "other", label: "Other case studies" },
    ...(full ? [{ id: "back-to-main", label: "Back to main page", href: "/" }] : []),
  ] satisfies TocItem[];

  return (
    <>
      <Header backHref="/" backLabel="← Back to work" />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-14">
          <TableOfContents items={tocItems} />

          <div className="min-w-0 flex flex-col gap-[clamp(40px,5vw,72px)]">
            <Reveal>{full ? <SneakPeekHero study={study} /> : <CaseStudyHero study={study} />}</Reveal>

            {/* Each section is gated on its own field rather than on `full`.
                The checks are inline (not the `has*` consts above) because
                that is what narrows the optional props for TypeScript. */}
            {study.intro !== undefined && (
              <Reveal>
                <section
                  id="starting-point"
                  aria-labelledby="starting-point-heading"
                  className="rounded-card border border-rule bg-white p-card-pad"
                >
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">The brief</p>
                  <h2 id="starting-point-heading" className="mt-4 m-0 text-section-h2 text-ink">
                    Starting Point
                  </h2>
                  <div className="mt-6">
                    <ParagraphList paragraphs={[study.intro]} />
                  </div>
                </section>
              </Reveal>
            )}

            {study.gallery !== undefined && study.gallery.length > 0 && (
              <Reveal>
                <ScreenshotGallery images={study.gallery} />
              </Reveal>
            )}

            {study.impactIntro !== undefined && study.impactCards !== undefined && (
              <Reveal>
                <ImpactSection intro={study.impactIntro} cards={study.impactCards} />
              </Reveal>
            )}

            {study.howItStarted !== undefined && study.howItStarted.length > 0 && (
              <Reveal>
                <AccordionSection id="started" label="Background" heading="How it started" defaultOpen>
                  <SectionBody
                    paragraphs={study.howItStarted}
                    findings={study.howItStartedFindings}
                    closing={study.howItStartedClosing}
                  />
                </AccordionSection>
              </Reveal>
            )}

            {/* Content-defined sections, collapsed by default. Clicking their
                TOC entry scrolls here and expands the panel via the
                `cs:open-section` event every AccordionSection listens for. */}
            {extraSections.map((section) => (
              <Reveal key={section.id}>
                <AccordionSection id={section.id} label={section.label} heading={section.heading}>
                  <SectionBody
                    paragraphs={section.paragraphs}
                    findings={section.findings}
                    closing={section.closing}
                  />
                </AccordionSection>
              </Reveal>
            ))}

            {study.challenges !== undefined && study.challenges.length > 0 && (
              <Reveal>
                <AccordionSection id="challenges" label="The hard parts" heading="Challenges & Problem-Solving">
                  <ChallengesSection subsections={study.challenges} />
                </AccordionSection>
              </Reveal>
            )}

            {study.whatIWouldDoDifferently !== undefined &&
              study.whatIWouldDoDifferently.length > 0 && (
                <Reveal>
                  <AccordionSection
                    id="differently"
                    label="In hindsight"
                    heading="What I would do differently"
                  >
                    <ParagraphList paragraphs={study.whatIWouldDoDifferently} />
                  </AccordionSection>
                </Reveal>
              )}

            <Reveal>
              <OtherCaseStudies currentSlug={study.slug} />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
