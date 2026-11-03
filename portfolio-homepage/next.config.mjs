import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This project lives in a subdirectory of a larger personal repo that
  // has its own root package-lock.json (an unrelated sibling project) —
  // pin the workspace root so Next.js doesn't try to infer it.
  outputFileTracingRoot: __dirname,
  eslint: {
    // Linting is run separately via `npm run lint`.
    ignoreDuringBuilds: false,
  },
  // Public URLs -> the one internal route tree, `app/[locale]/...`.
  //
  // English keeps the original unprefixed URLs (`/`, `/blog`, `/usecases/...`)
  // and Finnish lives under `/fi` with Finnish path words (`/fi/blogi`,
  // `/fi/tyot/...`): words in the URL help a Finnish search engine and read
  // naturally to a Finnish visitor. Keep in step with src/i18n/paths.ts.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        { source: "/blog", destination: "/en/blog" },
        { source: "/blog/:slug", destination: "/en/blog/:slug" },
        { source: "/usecases/:slug", destination: "/en/usecases/:slug" },
        { source: "/fi/blogi", destination: "/fi/blog" },
        { source: "/fi/blogi/:slug", destination: "/fi/blog/:slug" },
        { source: "/fi/tyot/:slug", destination: "/fi/usecases/:slug" },
      ],
    };
  },
  // The internal route names are not public addresses: send anyone who lands
  // on one (a typed URL, an old link) to the real URL, so each page has
  // exactly one address.
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/fi/blog", destination: "/fi/blogi", permanent: true },
      { source: "/fi/blog/:slug", destination: "/fi/blogi/:slug", permanent: true },
      { source: "/fi/usecases/:slug", destination: "/fi/tyot/:slug", permanent: true },
    ];
  },
  images: {
    // Only the Kemira client logo is SVG; it's a trusted local asset.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
