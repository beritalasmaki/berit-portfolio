import AboutMe from "./AboutMe";
import ProcessTimeline from "./ProcessTimeline";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">04 / about</p>

      <div className="flex items-end justify-between gap-grid-gap-lg flex-wrap mt-4">
        <h2 id="about-heading" className="m-0 text-section-h2 text-ink">
          About Me
        </h2>
        <p className="m-0 text-[15px] leading-snug text-footer-meta max-w-[20em]">
          The person behind the pixels.
        </p>
      </div>

      <AboutMe />

      <ProcessTimeline />

      <div className="flex items-center gap-4 bg-panel rounded-card p-card-pad mt-grid-gap">
        <span aria-hidden="true" className="text-xl text-accent-dark whitespace-nowrap">
          ↗
        </span>
        <p className="m-0 text-[clamp(16px,1.4vw,20px)] leading-snug font-bold text-ink">
          We agree, together, on what success looks like before the work starts.
        </p>
      </div>
    </section>
  );
}
