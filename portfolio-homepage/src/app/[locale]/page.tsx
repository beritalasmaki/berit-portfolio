import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import CaseStudyCards from "@/components/CaseStudyCards";
import ClientLogos from "@/components/ClientLogos";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MindTabs from "@/components/MindTabs";
import Reveal from "@/components/Reveal";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { homePath } from "@/i18n/paths";
import { JsonLd, homeJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.meta.home.title,
    description: t.meta.home.description,
    paths: { en: homePath("en"), fi: homePath("fi") },
    siteName: t.site.name,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale);
  const other: Locale = locale === "en" ? "fi" : "en";

  return (
    <>
      <JsonLd data={homeJsonLd(locale, t, other)} />
      <Header
        animateLogo
        locale={locale}
        copy={{ header: t.header, common: t.common, site: t.site }}
        switchHref={homePath(other)}
      />
      <main className="px-gutter pt-6 pb-24">
        {/* Hero plays its own bespoke load-in sequence (logo -> line ->
            headline/subhead/buttons) and is visible on first paint, so it
            isn't wrapped in the generic scroll Reveal below. */}
        <Hero copy={t.hero} />
        <Reveal>
          <ClientLogos copy={t.clients} />
        </Reveal>
        <Reveal>
          <MindTabs locale={locale} copy={t.mindTabs} />
        </Reveal>
        <Reveal>
          <CaseStudyCards locale={locale} copy={t.caseStudies} />
        </Reveal>
        <Reveal>
          <AboutSection copy={{ about: t.about, whatIDo: t.whatIDo, process: t.process }} />
        </Reveal>
        <Reveal>
          <ContactSection copy={t.contact} />
        </Reveal>
      </main>
      <Footer copy={{ footer: t.footer, site: t.site }} />
      <BackToTop label={t.common.backToTop} />
    </>
  );
}
