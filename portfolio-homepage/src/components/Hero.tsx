import Image from "next/image";
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
              image; the orange flourish keeps the right-hand column. */}
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

        <div className="min-w-0 flex flex-col justify-center">
          {/* Hand-drawn flourish, matching the logo's mark treatment
              (swapped in from the Claude Design canvas — was concentric
              orbit ellipses before). */}
          <LiquidHover strength={7} className="w-full">
            <svg
              viewBox="0 0 420 260"
              role="presentation"
              aria-hidden="true"
              className="w-full h-auto block overflow-visible"
            >
              {/* Draw-in on load: pathLength=100 normalizes every path's stroke-
                  dasharray/dashoffset to the same 0-100 scale regardless of its
                  real length, so each one just animates dashoffset 100 -> 0 (see
                  .hero-flourish-path / @keyframes hero-draw in globals.css).
                  Delays are grouped, not purely per-path: the thin "echo" stroke
                  riding each main petal curve shares its partner's delay so the
                  two are read as one hand-drawn line, not two competing draws,
                  and delays otherwise increase top-to-bottom. Every delay carries
                  a +650ms baseline, overlapping the tail of the header logo's own
                  draw-on (Logo.tsx, animated on this page only, 1300ms) rather
                  than waiting for it to fully finish -- ease-out front-loads most
                  of the logo's visible motion into roughly its first 60%, so by
                  650ms it already reads as essentially drawn, and starting the
                  line there keeps the entrance feeling continuous instead of
                  pausing after the logo before anything else moves. */}
              <g fill="none" stroke="#FC890C" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M 8 24 C 23 20 33 33 41 49 C 49 65 61 74 82 74 C 111 74 143 71 158 78"
                  strokeWidth="13"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "650ms" }}
                />
                <path
                  d="M 10 27 C 26 25 35 37 43 52 C 52 69 63 77 84 77 C 113 77 142 74 156 80"
                  strokeWidth="7"
                  opacity="0.85"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "650ms" }}
                />
                <path
                  d="M 88 72 C 104 68 122 67 138 69"
                  strokeWidth="4.5"
                  opacity="0.6"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "800ms" }}
                />
                <path
                  d="M 158 78 C 170 83 172 96 162 108 C 152 120 152 132 164 138"
                  strokeWidth="11"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "900ms" }}
                />
                <path
                  d="M 156 81 C 168 87 169 98 159 110 C 150 121 151 130 162 136"
                  strokeWidth="6.5"
                  opacity="0.8"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "900ms" }}
                />
                <path
                  d="M 152 102 C 147 111 148 121 155 128"
                  strokeWidth="5"
                  opacity="0.75"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1050ms" }}
                />
                <path
                  d="M 164 138 C 182 147 217 148 251 156 C 287 165 311 181 335 203"
                  strokeWidth="12.5"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1150ms" }}
                />
                <path
                  d="M 166 141 C 185 150 219 151 252 159 C 287 168 310 184 333 205"
                  strokeWidth="6"
                  opacity="0.8"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1150ms" }}
                />
                <path
                  d="M 244 154 C 268 158 290 166 308 178"
                  strokeWidth="4.5"
                  opacity="0.55"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1300ms" }}
                />
                <path
                  d="M 335 203 C 348 215 358 226 366 236"
                  strokeWidth="10"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1400ms" }}
                />
                <path
                  d="M 366 236 C 371 242 375 246 379 249"
                  strokeWidth="6"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1550ms" }}
                />
                <path
                  d="M 379 249 C 383 252 386 254 389 255"
                  strokeWidth="3.2"
                  opacity="0.85"
                  pathLength={100}
                  className="hero-flourish-path"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: "1650ms" }}
                />
              </g>
            </svg>
          </LiquidHover>
        </div>
      </div>
    </section>
  );
}
