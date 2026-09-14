import StatusPill from "./StatusPill";
import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-accent -mx-[clamp(24px,5vw,72px)] px-[clamp(24px,5vw,72px)] py-contact-y mt-rhythm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gap-lg items-end">
        <h2 id="contact-heading" className="m-0 text-contact-h2 text-ink">
          What could we
          <br />
          make better?
        </h2>
        <div className="flex flex-col gap-4">
          {/* Availability sits at the top of this column as a kicker above
              the invitation — by the time someone is reading "tell me what
              you're building", whether I'm actually free is the next thing
              they want to know. Moved here from the header, where it
              competed with the nav and was hidden below 1300px. */}
          <StatusPill />
          <p className="m-0 text-lead text-ink max-w-prose">
            Tell me what you&apos;re building, what&apos;s getting in the way, and where
            you want to go.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-[clamp(16px,1.5vw,22px)] font-bold text-ink border-b-2 border-ink pb-2 self-start whitespace-nowrap transition-transform duration-150 ease-out hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
          >
            {site.email}
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-nav font-bold text-ink border-b border-ink pb-2 self-start whitespace-nowrap transition-transform duration-150 ease-out hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-ink"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
