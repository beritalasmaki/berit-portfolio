// Site-wide constants: contact info, nav, client logo row.
// Single source of truth so header/footer/contact block never drift.

export const site = {
  name: "Berit Alasmäki",
  email: "berit.alasmaki@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/berit-alasmaki/",
  githubUrl: "https://github.com/beritalasmaki/portfolio",
} as const;

/**
 * The site's public origin, for absolute links (canonical URLs, Open Graph).
 * Set `NEXT_PUBLIC_SITE_URL` (e.g. https://example.com) in the deployment;
 * on Vercel the production domain is picked up automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export type ClientLogo = {
  name: string;
  src: string;
};

// Every logo renders inside a uniform, evenly padded grid cell (see
// ClientLogos.tsx) — object-contain scales each logo to fit that shared
// box regardless of its own natural aspect ratio, so no per-logo sizing
// is needed here.
export const clientLogos: ClientLogo[] = [
  { name: "Kemira", src: "/logos/kemira.svg" },
  { name: "University of Helsinki", src: "/logos/ink-helsinki.png" },
  { name: "Suomen ympäristökeskus — Finnish Environment Institute", src: "/logos/ink-syke.png" },
  { name: "Digione", src: "/logos/ink-digione.png" },
  { name: "Espoo Esbo", src: "/logos/ink-espoo.png" },
  { name: "Vantaa", src: "/logos/ink-vantaa.png" },
  { name: "Fintraffic", src: "/logos/ink-fintraffic.png" },
  { name: "Cardiff University", src: "/logos/ink-cardiff.png" },
  { name: "CSC", src: "/logos/ink-csc.png" },
  { name: "Vero Skatt", src: "/logos/ink-vero.png" },
  { name: "Volkswagen", src: "/logos/ink-volkswagen.png" },
];
