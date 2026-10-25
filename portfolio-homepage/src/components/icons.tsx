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

// The nav's icons are animated: each has its outline (`.ni-line`) and a
// filled version in the brand orange (`.ni-fill`), whose pieces (`.ni-p`)
// arrive with a motion that fits the icon when the link is hovered,
// focused or current (`aria-current`, the section in view). Styles in
// globals.css ("Nav icons"); `--i` staggers the pieces.

/** "Selected case studies": a grid of work. Filling, the tiles pop in one
 * after another, from dots to full tiles. */
export function CaseStudiesIcon({ className = "" }: IconProps) {
  const tiles = [
    [2, 2],
    [9, 2],
    [9, 9],
    [2, 9],
  ];
  return (
    <Icon className={`nav-icon ${className}`}>
      <g className="ni-line">
        {tiles.map(([x, y]) => (
          <rect key={`${x}${y}`} x={x} y={y} width="5" height="5" rx="1.2" />
        ))}
      </g>
      <g className="ni-fill" fill="#FC890C" stroke="none">
        {tiles.map(([x, y], i) => (
          <rect
            key={`${x}${y}`}
            className="ni-p ni-pop"
            style={{ "--i": i } as React.CSSProperties}
            x={x - 0.8}
            y={y - 0.8}
            width="6.6"
            height="6.6"
            rx="1.8"
          />
        ))}
      </g>
    </Icon>
  );
}

/** "About": a person. Filling, the shoulders rise and the head bobs in
 * on top. */
export function AboutIcon({ className = "" }: IconProps) {
  return (
    <Icon className={`nav-icon ${className}`}>
      <g className="ni-line">
        <circle cx="8" cy="5.5" r="2.75" />
        <path d="M2.75 14c.6-2.6 2.7-4.25 5.25-4.25S12.65 11.4 13.25 14" />
      </g>
      <g className="ni-fill" fill="#FC890C" stroke="none">
        <path
          className="ni-p ni-rise"
          d="M2 14.6c.5-3.2 3-5.5 6-5.5s5.5 2.3 6 5.5c.05.4-.25.7-.65.7H2.65c-.4 0-.7-.3-.65-.7z"
        />
        <circle className="ni-p ni-drop" style={{ "--i": 1 } as React.CSSProperties} cx="8" cy="5.3" r="3.4" />
      </g>
    </Icon>
  );
}

/** "My Process": connected steps. Filling, the steps light up one by one
 * and the links between them draw on. */
export function ProcessIcon({ className = "" }: IconProps) {
  return (
    <Icon className={`nav-icon ${className}`}>
      <g className="ni-line">
        <circle cx="3.5" cy="4" r="1.75" />
        <circle cx="12.5" cy="8" r="1.75" />
        <circle cx="3.5" cy="12" r="1.75" />
        <path d="M5.2 4.6l5.6 2.6M10.8 8.8l-5.6 2.6" />
      </g>
      <g className="ni-fill">
        <path className="ni-p ni-draw" style={{ "--i": 1 } as React.CSSProperties} pathLength={1} stroke="#FC890C" d="M5.2 4.6l5.6 2.6" />
        <path className="ni-p ni-draw" style={{ "--i": 3 } as React.CSSProperties} pathLength={1} stroke="#FC890C" d="M10.8 8.8l-5.6 2.6" />
        {[
          [3.5, 4],
          [12.5, 8],
          [3.5, 12],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            className="ni-p ni-pop"
            style={{ "--i": i * 2 } as React.CSSProperties}
            cx={cx}
            cy={cy}
            r="2.4"
            fill="#FC890C"
            stroke="none"
          />
        ))}
      </g>
    </Icon>
  );
}
