export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`${className} shrink-0`} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="var(--color-action-accent)" />
      <path d="M20 31c-3.6-2.4-8.4-5.2-8.4-10.1 0-2.1 1.3-3.7 3.1-3.7 2.1 0 3.7 2.1 5.3 4.2 1.6-2.1 3.2-4.2 5.3-4.2 1.8 0 3.1 1.6 3.1 3.7C28.4 25.8 23.6 28.6 20 31Z" fill="white" fillOpacity=".95" />
      <path d="M20 22.3c-1.5-2.8-4.3-5.6-3.5-8.2.5-1.6 2-2.4 3.5-1.2 1.5-1.2 3-.4 3.5 1.2.8 2.6-2 5.4-3.5 8.2Z" fill="white" />
      <path d="M20 22.3c2.8-1.5 5.6-4.3 8.2-3.5 1.6.5 2.4 2 1.2 3.5 1.2 1.5.4 3-1.2 3.5-2.6.8-5.4-2-8.2-3.5Z" fill="white" fillOpacity=".8" />
      <circle cx="20" cy="22" r="2.1" fill="var(--color-action-accent-dark)" />
    </svg>
  );
}
