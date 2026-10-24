import Image from "next/image";
import HeroLine from "./HeroLine";
import { ArrowRightIcon } from "./icons";
import LiquidHover from "./LiquidHover";
import PenSpark from "./PenSpark";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-[clamp(48px,7vw,88px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-[clamp(32px,6vw,88px)] items-center py-8 lg:py-[clamp(32px,5vw,56px)]">
        <div className="min-w-0">
          {/* Entrance stagger: byline -> headline -> subheadline -> buttons,
              ~100-180ms apart. Timed to the logo: the ball fades in, the
              signature writes itself (150-1850ms), and the headline comes
              out at 1650ms, the moment the star lifts off the end of the
              signature (PenSpark.tsx), so the two arrive together. Keep
              these in step with .logo-mask-wipe in globals.css. See
              .fade-up-item / @keyframes fade-up there too. */}
          {/* Byline: who's talking, before the promise. The photo is small
              on purpose so it reads as a signature, not a second hero
              image; the Line keeps the right-hand column. */}
          <div className="flex items-center gap-3 mb-6 fade-up-item" style={{ animationDelay: "1550ms" }}>
            <LiquidHover strength={4} className="shrink-0">
              <Image
                src="/photo.png"
                alt="Berit Alasmäki"
                width={44}
                height={44}
                className="w-11 h-11 object-contain block"
              />
            </LiquidHover>
            <p className="m-0 text-body-em font-semibold text-ink">
              Hi, I&apos;m Berit <span aria-hidden="true">·</span>{" "}
              <span className="font-medium text-body">Senior UX &amp; Product Designer</span>
            </p>
          </div>
          <h1
            id="hero-heading"
            className="m-0 text-hero fade-up-item"
            style={{ animationDelay: "1650ms" }}
          >
            Your partner in
            <br />
            untangling
            <br />
            complexity.
          </h1>
          <p
            className="mt-8 max-w-prose text-lead text-body fade-up-item"
            style={{ animationDelay: "1830ms" }}
          >
            Good design moves you forward. I help teams turn complex products and services into
            experiences that are easier to use and easier to build.
          </p>
          {/* Below lg the right column is hidden, so the Line tells its
              story here instead, as a slim strip. */}
          <div className="lg:hidden mt-8 fade-up-item" style={{ animationDelay: "1910ms" }}>
            <HeroLine variant="strip" />
          </div>
          <div className="flex flex-wrap gap-4 mt-10 fade-up-item" style={{ animationDelay: "2010ms" }}>
            {/* Same target and same mechanism as the header's Contact
                button: a plain `#contact` anchor, with the smooth scroll
                coming from `scroll-behavior: smooth` on `html` in
                globals.css (and disabled there under
                prefers-reduced-motion). No scroll handler here — one
                behaviour, defined once. */}
            <a
              href="#contact"
              className="glass-button-ink group inline-flex items-center gap-2 text-white text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline-white"
            >
              Get in touch
              <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
            </a>
            <a
              href="#case-studies"
              className="glass-button group inline-flex items-center gap-2 text-ink text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap hover:text-ink focus-visible:text-ink"
            >
              See the work
              <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="min-w-0 hidden lg:flex flex-col justify-center">
          {/* The Line: arrives as a tangle and unwinds into a calm,
              flowing path, the headline acted out (see HeroLine.tsx). The
              star is the spark that lifts off the logo signature
              (PenSpark.tsx). */}
          <div className="fade-up-item w-full max-w-[600px] mx-auto" style={{ animationDelay: "650ms" }}>
            <HeroLine />
          </div>
        </div>
      </div>
      <PenSpark />
    </section>
  );
}
