import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import BackgroundVideo from "@/components/BackgroundVideo";
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
  title: "Berit Alasmäki — UX & Product Designer",
  description:
    "Senior UX & product designer based in Finland. Selected case studies in expert tools, service design and design systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>
        <BackgroundVideo />
        <div id="page-top" />
        {children}
      </body>
    </html>
  );
}
