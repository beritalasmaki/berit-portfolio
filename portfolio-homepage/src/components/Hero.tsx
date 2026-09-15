import Image from "next/image";
import UntangleLine from "./UntangleLine";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-[clamp(32px,6vw,88px)] items-center py-8 lg:py-[clamp(32px,5vw,56px)]">
        <div className="min-w-0">
          {/* Entrance stagger: headline -> subheadline -> buttons, ~180ms
              apart, starting once the logo's draw is mostly visible (800ms
              into its 1300ms animation) rather than waiting for it to fully
              finish -- ease-out front-loads most of a logo's visible motion
              early, so waiting for the full duration read as a dead pause.
              Overlaps the hero line's own draw, "while the line draws", per
              spec. See .fade-up-item / @keyframes fade-up in globals.css. */}
          <h1
            id="hero-heading"
            className="m-0 text-hero fade-up-item"
            style={{ animationDelay: "800ms" }}
          >
            Good design
            <br />
            moves you
            <br />
            {/* accent-hero, not raw accent: #FC890C on white is ~2.4:1,
                below WCAG AA even at this large bold size (needs 3:1).
                accent-hero (~3.2:1) is the closest-to-brand orange that
                still clears the large-text AA minimum. */}
            <span className="text-accent-hero">forward.</span>
          </h1>
          <p
            className="mt-8 max-w-prose text-lead text-body fade-up-item"
            style={{ animationDelay: "980ms" }}
          >
            Make your product easier to use. Give your team a clearer way forward. Turn
            complexity into value that people can feel.
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
              className="inline-block bg-ink text-white text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap transition-[background-color,transform] duration-150 ease-out hover:bg-ink-alt hover:text-white hover:-translate-y-px focus-visible:bg-ink-alt focus-visible:text-white focus-visible:-translate-y-px focus-visible:outline-white"
            >
              Get in touch
            </a>
            <a
              href="#case-studies"
              className="inline-block border border-rule-strong text-ink text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-ink hover:-translate-y-px focus-visible:border-ink focus-visible:-translate-y-px"
            >
              See the work
            </a>
          </div>
        </div>

        <div className="min-w-0 flex flex-col justify-center">
          {/* Hand-drawn flourish, matching the logo's mark treatment
              (swapped in from the Claude Design canvas — was concentric
              orbit ellipses before). */}
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
        </div>
      </div>

      <div className="flex items-center gap-6 py-2 pb-[clamp(48px,7vw,88px)]">
        <Image
          src="/photo.png"
          alt="Berit Alasmäki"
          width={92}
          height={92}
          className="w-[92px] h-[92px] object-contain block"
        />
        <p className="m-0 text-body-em font-semibold text-ink max-w-[22em]">
          {/* The span only anchors the decorative string beneath the word —
              the sentence's text is untouched and still reads as one
              continuous phrase. `inline-block` (not plain `relative`) so
              `top-full`/`w-full` resolve against the word's own box rather
              than the line box; the word can't wrap mid-way, so it never
              fragments. The SVG is absolutely positioned and therefore adds
              no height: verified the paragraph's box and line breaks are
              byte-identical before and after. */}
          Berit, your partner in{" "}
          <span className="relative inline-block">
            untangling
            <UntangleLine />
          </span>{" "}
          complexity.
        </p>
      </div>
    </section>
  );
}
