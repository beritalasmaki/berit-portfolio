// Small line icons for buttons and nav links. All are 16px, 1.6px strokes in
// `currentColor`, so they follow the text color through hover/focus, and
// they're `aria-hidden`: the link or button text already carries the meaning.

type IconProps = { className?: string };

function Icon({ className = "", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`w-4 h-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/** Buttons' trailing arrow. Pair with `group` on the button to nudge it on hover. */
export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </Icon>
  );
}

export function ArrowLeftIcon({ className = "" }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M13 8H3M7 4L3 8l4 4" />
    </Icon>
  );
}

/** "Selected case studies": a grid of work. */
export function CaseStudiesIcon({ className = "" }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="2" y="2" width="5" height="5" rx="1.2" />
      <rect x="9" y="2" width="5" height="5" rx="1.2" />
      <rect x="2" y="9" width="5" height="5" rx="1.2" />
      <rect x="9" y="9" width="5" height="5" rx="1.2" />
    </Icon>
  );
}

/** "About": a person. */
export function AboutIcon({ className = "" }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="8" cy="5.5" r="2.75" />
      <path d="M2.75 14c.6-2.6 2.7-4.25 5.25-4.25S12.65 11.4 13.25 14" />
    </Icon>
  );
}

/** "My Process": connected steps. */
export function ProcessIcon({ className = "" }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="3.5" cy="4" r="1.75" />
      <circle cx="12.5" cy="8" r="1.75" />
      <circle cx="3.5" cy="12" r="1.75" />
      <path d="M5.2 4.6l5.6 2.6M10.8 8.8l-5.6 2.6" />
    </Icon>
  );
}
