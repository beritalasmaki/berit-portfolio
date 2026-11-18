import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { postPath } from "@/i18n/paths";
import { howIWorkWithAi } from "@/data/blog/how-i-work-with-ai";
import { howIWorkWithAiFi } from "@/data/blog/fi/how-i-work-with-ai";

/** How I work with AI, as a short part of My process.
 *
 * Deliberately small: a few sentences and a link. The full explanation (what
 * the template is, how a project goes, what it never does) is a blog post, so
 * the homepage does not carry it. Sits inside the process section, under the
 * timeline, in the same `glass rounded-card p-card-pad` card as WhatIDo, with
 * no eyebrow number and no section of its own.
 *
 * The status in the label is deliberate: it is a first version that has not
 * been used on a real project yet.
 */
export default function AiProcess({ locale, copy }: { locale: Locale; copy: Dictionary["aiProcess"] }) {
  const post = locale === "fi" ? howIWorkWithAiFi : howIWorkWithAi;
  return (
    <div className="mt-grid-gap glass rounded-card p-card-pad flex flex-col gap-4">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">{copy.kicker}</p>
      <h3 className="m-0 text-card-h3 text-ink">{copy.heading}</h3>
      <p className="m-0 max-w-prose text-body-lg text-body">{copy.body}</p>
      <Link
        href={postPath(locale, post.slug)}
        data-sound="open"
        className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-200 ease-linear hover:border-accent-dark focus-visible:border-accent-dark"
      >
        {copy.linkLabel}
      </Link>
    </div>
  );
}
