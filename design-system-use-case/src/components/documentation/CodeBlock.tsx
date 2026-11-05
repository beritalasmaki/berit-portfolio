/** Documentation only: a dark block for short code samples. */
export function CodeBlock({ children }: { children: string }) {
  return <pre className="overflow-x-auto rounded-xl bg-[var(--color-surface-inverse)] p-5 text-xs leading-6 text-[#dfe8df]"><code>{children}</code></pre>;
}
