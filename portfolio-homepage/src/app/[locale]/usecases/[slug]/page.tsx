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
import { getCaseStudies, getCaseStudyByUrlSlug, hasFullContent } from "@/data/case-studies";
import { caseStudyPath, caseStudyUrlSlugs } from "@/data/case-studies/slugs";
import { absoluteUrl, homePath } from "@/i18n/paths";
import { siteUrl } from "@/data/site";
import { isLocale, locales, htmlLang, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { wordsPerMinute } from "@/data/blog";
import { JsonLd, breadcrumbJsonLd, personNode } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudies(locale).map((study) => ({ locale, slug: caseStudyUrlSlugs[locale][study.slug] }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const study = getCaseStudyByUrlSlug(locale, slug);
  if (!study) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: `${study.tabTitle ?? study.title} | ${t.meta.titleSuffix}`,
    description: study.description,
    paths: { en: caseStudyPath("en", study.slug), fi: caseStudyPath("fi", study.slug) },
    siteName: t.site.name,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const study = getCaseStudyByUrlSlug(locale, slug);
  if (!study) notFound();
  const t = getDictionary(locale);
  const cs = t.caseStudy;
  const other: Locale = locale === "en" ? "fi" : "en";

  // `full` still decides the *hero* — a sneak-peek needs a gallery to peek
  // at — but every section below renders on its own data being present
  // rather than on this one flag. That lets a study be written in pieces:
  // one with an intro and a "How it started" but no gallery yet gets exactly
  // those two sections instead of all-or-nothing.
  const full = hasFullContent(study);
  const hasIntro = study.intro !== undefined && study.intro.length > 0;
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
    ...(!full ? [{ id: "about-project", label: cs.aboutProject }] : []),
    ...(hasIntro ? [{ id: "starting-point", label: cs.startingPoint }] : []),
    ...(hasGallery ? [{ id: "screens", label: cs.screensToc }] : []),
    ...(hasImpact ? [{ id: "impact", label: cs.impact }] : []),
    ...(hasStarted ? [{ id: "started", label: cs.started }] : []),
    // In content order, right after "How it started" — where they render.
    ...extraSections.map((section) => ({
      id: section.id,
      label: section.navLabel ?? section.heading,
    })),
    ...(hasChallenges ? [{ id: "challenges", label: cs.challenges }] : []),
    ...(hasDifferently ? [{ id: "differently", label: cs.differently }] : []),
    { id: "other", label: cs.other },
    ...(full ? [{ id: "back-to-main", label: cs.backToMain, href: homePath(locale) }] : []),
  ] satisfies TocItem[];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: study.title,
              description: study.description,
              inLanguage: htmlLang[locale],
              url: absoluteUrl(siteUrl, caseStudyPath(locale, study.slug)),
              mainEntityOfPage: absoluteUrl(siteUrl, caseStudyPath(locale, study.slug)),
              image: study.thumbnail ? `${siteUrl}${study.thumbnail}` : undefined,
              author: { "@id": `${siteUrl}/#person` },
              about: study.categoryTag ?? study.industry,
            },
            personNode(locale, t),
            breadcrumbJsonLd([
              { name: t.site.name, path: homePath(locale) },
              { name: study.title, path: caseStudyPath(locale, study.slug) },
            ]),
          ],
        }}
      />
      <Header
        locale={locale}
        copy={{ header: t.header, common: t.common, site: t.site }}
        switchHref={caseStudyPath(other, study.slug)}
        backHref={homePath(locale)}
        backLabel={cs.backLink}
      />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-16">
          <TableOfContents items={tocItems} title={cs.onThisPage} navigateLabel={cs.navigateTo} />

          <div className="min-w-0 flex flex-col gap-[clamp(48px,5vw,64px)]">
            <Reveal>{full ? (
                <SneakPeekHero study={study} copy={cs} wordsPerMinute={wordsPerMinute[locale]} />
              ) : (
                <CaseStudyHero study={study} copy={cs} />
              )}</Reveal>

            {/* Each section is gated on its own field rather than on `full`.
                The checks are inline (not the `has*` consts above) because
                that is what narrows the optional props for TypeScript. */}
            {study.intro !== undefined && study.intro.length > 0 && (
              <Reveal>
                <section
                  id="starting-point"
                  aria-labelledby="starting-point-heading"
                  className="rounded-card glass p-card-pad"
                >
                  <p className="font-mono-label text-mono-label uppercase text-muted m-0">{cs.startingPointEyebrow}</p>
                  <h2 id="starting-point-heading" className="mt-4 m-0 text-section-h2 text-ink">
                    {cs.startingPoint}
                  </h2>
                  <div className="mt-6">
                    <ParagraphList paragraphs={study.intro} />
                  </div>
                </section>
              </Reveal>
            )}

            {study.gallery !== undefined && study.gallery.length > 0 && (
              <Reveal>
                <ScreenshotGallery images={study.gallery} copy={cs} />
              </Reveal>
            )}

            {study.impactIntro !== undefined && study.impactCards !== undefined && (
              <Reveal>
                <ImpactSection intro={study.impactIntro} cards={study.impactCards} copy={cs} />
              </Reveal>
            )}

            {study.howItStarted !== undefined && study.howItStarted.length > 0 && (
              <Reveal>
                <AccordionSection
                  id="started"
                  label={cs.startedEyebrow}
                  heading={cs.started}
                  showMore={cs.showMore}
                  showLess={cs.showLess}
                  defaultOpen
                >
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
                <AccordionSection
                  id={section.id}
                  label={section.label}
                  heading={section.heading}
                  showMore={cs.showMore}
                  showLess={cs.showLess}
                >
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
                <AccordionSection
                  id="challenges"
                  label={cs.challengesEyebrow}
                  heading={cs.challenges}
                  showMore={cs.showMore}
                  showLess={cs.showLess}
                >
                  <ChallengesSection subsections={study.challenges} />
                </AccordionSection>
              </Reveal>
            )}

            {study.whatIWouldDoDifferently !== undefined &&
              study.whatIWouldDoDifferently.length > 0 && (
                <Reveal>
                  <AccordionSection
                    id="differently"
                    label={cs.differentlyEyebrow}
                    heading={cs.differently}
                    showMore={cs.showMore}
                    showLess={cs.showLess}
                  >
                    <ParagraphList paragraphs={study.whatIWouldDoDifferently} />
                  </AccordionSection>
                </Reveal>
              )}

            <Reveal>
              <OtherCaseStudies locale={locale} currentSlug={study.slug} copy={cs} />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer copy={{ footer: t.footer, site: t.site }} />
      <BackToTop label={t.common.backToTop} />
    </>
  );
}
