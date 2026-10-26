import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import GlowOrbs from "@/components/GlowOrbs";
import UiSounds from "@/components/UiSounds";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Berit Alasmäki | Senior UX & Product Designer",
  description:
    "Senior UX & product designer based in Finland. Selected case studies in expert tools, service design and design systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
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
