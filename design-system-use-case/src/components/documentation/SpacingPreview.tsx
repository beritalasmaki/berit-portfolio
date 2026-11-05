import { primitiveTokens } from "@/data/tokens";

/** Documentation only: draws each spacing value as a bar of that width. */
export function SpacingPreview() {
  return (
    <section id="spacing-examples" aria-labelledby="spacing-examples-heading" className="mt-12 scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-white p-6 md:p-8">
      <h2 id="spacing-examples-heading" className="m-0 text-2xl font-bold">Spacing examples</h2>
      <p className="body-copy mt-3 text-sm">Each bar is as wide as the space it stands for. Use only these values for gaps and padding, so that spacing looks consistent everywhere.</p>
      <ul className="m-0 mt-6 list-none space-y-3 p-0">
        {primitiveTokens.spacing.map((token) => (
          <li key={token.name} className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="token-name w-24">{token.name}</span>
            <span className="w-14 text-sm font-semibold">{token.value}</span>
            <span aria-hidden="true" className="h-4 rounded bg-[var(--color-action-accent)]" style={{ width: token.value }} />
            <span className="text-sm text-[var(--color-content-muted)]">{token.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
