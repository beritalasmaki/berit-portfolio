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

  const full = hasFullContent(study);

  const tocItems: TocItem[] = full
    ? ([
        { id: "starting-point", label: "Starting Point" },
        { id: "screens", label: "Examples of UI-screens" },
        { id: "impact", label: "The Impact" },
        { id: "started", label: "How it started" },
        { id: "challenges", label: "Challenges & Problem-Solving" },
        { id: "differently", label: "What I would do differently" },
        { id: "other", label: "Other case studies" },
        { id: "back-to-main", label: "Back to main page", href: "/" },
      ] satisfies TocItem[])
    : ([
        { id: "about-project", label: "About the project" },
        { id: "other", label: "Other case studies" },
      ] satisfies TocItem[]);

  return (
    <>
      <Header backHref="/" backLabel="← Back to work" />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-14">
          <TableOfContents items={tocItems} />

          <div className="min-w-0 flex flex-col gap-[clamp(40px,5vw,72px)]">
            {!full && (
              <Reveal>
                <CaseStudyHero study={study} />
              </Reveal>
            )}

            {full && (
              <>
                <Reveal>
                  <SneakPeekHero study={study} />
                </Reveal>

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

                <Reveal>
                  <ScreenshotGallery images={study.gallery} />
                </Reveal>

                <Reveal>
                  <ImpactSection intro={study.impactIntro} cards={study.impactCards} />
                </Reveal>

                <Reveal>
                  <AccordionSection id="started" label="Background" heading="How it started" defaultOpen>
                    <ParagraphList paragraphs={study.howItStarted} />
                  </AccordionSection>
                </Reveal>

                <Reveal>
                  <AccordionSection
                    id="challenges"
                    label="The hard parts"
                    heading="Challenges & Problem-Solving"
                  >
                    <ChallengesSection subsections={study.challenges} />
                  </AccordionSection>
                </Reveal>

                <Reveal>
                  <AccordionSection
                    id="differently"
                    label="In hindsight"
                    heading="What I would do differently"
                  >
                    <ParagraphList paragraphs={study.whatIWouldDoDifferently} />
                  </AccordionSection>
                </Reveal>
              </>
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
