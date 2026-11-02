import Image from "next/image";
import { clientLogos } from "@/data/site";

export default function ClientLogos() {
  return (
    // `mt-rhythm` matches every other top-level section break on the page
    // (64px mobile / 120px desktop). Without it this section's divider rule
    // sat flush against the bottom of the hero — a 0px break where every
    // other section gets the full rhythm, which was the one genuinely
    // inconsistent gap on the homepage. `pt-8` stays as the internal space
    // between the rule and the heading.
    <section aria-labelledby="clients-heading" className="mt-rhythm border-t border-rule pt-8">
      {/* The number is `aria-hidden` here and only here: this eyebrow is a
          real `<h2>` doing double duty as the section's accessible name (see
          `aria-labelledby` above), and "01 slash Experience with…" is a worse
          name than the sentence on its own. Every other numbered eyebrow on
          the page is a plain `<p>` sitting beside its own `<h2>`, so the
          number is free to be read there. */}
      <h2 id="clients-heading" className="font-mono-label text-mono-label uppercase text-muted m-0">
        <span aria-hidden="true">01 / </span>
        Experience with well-known organisations
      </h2>
      {/* Infinite carousel: the logo list is rendered twice inside one flex
          track that slides left by 50% (see `.logo-marquee` in globals.css).
          Every logo gets the same fixed-size cell, scaled with object-contain.
          The second copy is `aria-hidden` so screen readers hear each logo
          once. Under reduced motion the track stops and the row scrolls. */}
      <div className="logo-marquee mt-8">
        <ul className="logo-marquee-track list-none p-0 m-0">
          {[0, 1].map((copy) =>
            clientLogos.map((logo) => (
              <li
                key={`${copy}-${logo.name}`}
                aria-hidden={copy === 1 ? true : undefined}
                className="relative h-16 w-28 sm:h-20 sm:w-36 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={copy === 1 ? "" : logo.name}
                  fill
                  sizes="144px"
                  className="object-contain p-4"
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
