import Image from "next/image";
import HeroAurora from "./HeroAurora";
import { ArrowRightIcon } from "./icons";
import LiquidHover from "./LiquidHover";
import UntangleLine from "./UntangleLine";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-[clamp(48px,7vw,88px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-[clamp(32px,6vw,88px)] items-center py-8 lg:py-[clamp(32px,5vw,56px)]">
        <div className="min-w-0">
          {/* Entrance stagger: byline -> headline -> subheadline -> buttons,
              ~100-180ms apart, starting once the logo's draw is mostly
              visible (700ms into its 1300ms animation) rather than waiting
              for it to fully finish -- ease-out front-loads most of a logo's
              visible motion early, so waiting for the full duration read as
              a dead pause. Overlaps the hero line's own draw, "while the line
              draws", per spec. See .fade-up-item / @keyframes fade-up in
              globals.css. */}
          {/* Byline: who's talking, before the promise. The photo is small
              on purpose so it reads as a signature, not a second hero
              image; the glowing hero orb keeps the right-hand column. */}
          <div className="flex items-center gap-3 mb-6 fade-up-item" style={{ animationDelay: "700ms" }}>
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
            style={{ animationDelay: "800ms" }}
          >
            Your partner in
            <br />
            {/* The span only anchors the decorative string beneath the word:
                the heading still reads as one continuous phrase.
                `inline-block` so the string's `top-full`/`w-full` resolve
                against the word's own box; it's absolutely positioned and
                adds no height. At this size the string scales up with the
                word into a bold hand-drawn line, and it waits for the
                heading's fade-up before it untangles. */}
            <span className="relative inline-block">
              untangling
              {/* `top-[0.52em]`: "untangling" is ~5.1em wide, so the string's
                  22-unit-tall viewBox renders ~0.94em tall with its resting
                  line at 9/22 of that (~0.38em). Starting it at 0.52em puts
                  the line at ~0.9em, just under the baseline. The ratio is
                  em-based, so it holds across text-hero's clamp(). */}
              <UntangleLine delayMs={1300} positionClassName="top-[0.52em]" />
            </span>
            <br />
            complexity.
          </h1>
          <p
            className="mt-8 max-w-prose text-lead text-body fade-up-item"
            style={{ animationDelay: "980ms" }}
          >
            Good design moves you forward. I help teams turn complex products and services into
            experiences that are easier to use and easier to build.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 fade-up-item" style={{ animationDelay: "1160ms" }}>
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
          {/* Hero aurora: warm aurora light flowing like a river, left to
              right, fading in as it goes, to say "moving forward" (see
              HeroAurora.tsx). Hidden below lg: on phones it landed under the
              buttons and only added scroll, and the background orbs carry
              the warmth there. */}
          <div className="fade-up-item" style={{ animationDelay: "650ms" }}>
            <HeroAurora />
          </div>
        </div>
      </div>
    </section>
  );
}
