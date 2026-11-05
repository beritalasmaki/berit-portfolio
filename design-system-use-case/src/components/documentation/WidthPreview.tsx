import { primitiveTokens } from "@/data/tokens";

/** Documentation only: each maximum width as a bar, drawn to scale against the page width. */
export function WidthPreview() {
  const page = 1440;
  return (
    <section aria-labelledby="width-preview-heading" className="mt-12">
      <p className="eyebrow mb-3">Rendered preview</p>
      <h2 id="width-preview-heading" className="mb-5 text-2xl font-bold">The widths to scale</h2>
      <ul className="m-0 list-none space-y-4 p-0">
        {primitiveTokens.widths.map((token) => {
          const px = Number.parseInt(token.value, 10);
          return (
            <li key={token.name}>
              <div className="mb-1 flex flex-wrap items-baseline gap-x-4 text-sm"><span className="token-name">{token.name}</span><span className="font-semibold">{token.value}</span></div>
              <div aria-hidden="true" className="h-8 rounded-lg border border-[var(--color-action-accent-dark)] bg-[var(--color-status-warning-subtle)]" style={{ width: `${(px / page) * 100}%` }} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
