/** The orange arrow between diagram stages: points right on wide layouts and
 * down when the stages stack on a phone. */
export default function Chevron({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6 rotate-90 md:rotate-0 text-accent">
        <path
          d="M9 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
