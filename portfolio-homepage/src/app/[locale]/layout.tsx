import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import GlowOrbs from "@/components/GlowOrbs";
import UiSounds from "@/components/UiSounds";
import { siteUrl } from "@/data/site";
import { htmlLang, isLocale, locales } from "@/i18n/config";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// One layout for both languages: `[locale]` is `en` or `fi`. English is served
// at the unprefixed URLs and Finnish under `/fi` (see next.config.mjs), so
// this segment never shows in an English address. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Per-page titles, descriptions, canonical and hreflang come from
// `pageMetadata` (src/lib/seo.ts); this is only what every page shares.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Berit Alasmäki",
  authors: [{ name: "Berit Alasmäki", url: siteUrl }],
  creator: "Berit Alasmäki",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={htmlLang[locale]} className={`${manrope.variable} ${plexMono.variable}`}>
      <body>
        <GlowOrbs />
        <UiSounds />
        <div id="page-top" />
        {children}
        {/* The logo's fade veil (Header.tsx): the page's own cream ground,
            above everything, invisible until the logo is clicked. */}
        <div
          id="page-fade"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] bg-[#fffaf4] opacity-0"
        />
      </body>
    </html>
  );
}
