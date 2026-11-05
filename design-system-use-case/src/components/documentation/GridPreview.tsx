import { primitiveTokens } from "@/data/tokens";

const tiers = [
  { key: "mobile", label: "Mobile", range: "below 768px" },
  { key: "tablet", label: "Tablet", range: "768px to 1023px" },
  { key: "desktop", label: "Desktop", range: "1024px to 1279px" },
  { key: "wide", label: "Wide", range: "1280px and up" },
] as const;

const value = (name: string) => primitiveTokens.grid.find((token) => token.name === name)?.value ?? "";

/** Documentation only: draws the columns, gutter and margin of each grid tier at their real pixel values. */
export function GridPreview() {
  return (
    <section aria-labelledby="grid-preview-heading" className="mt-12">
      <p className="eyebrow mb-3">Rendered preview</p>
      <h2 id="grid-preview-heading" className="mb-5 text-2xl font-bold">The four grids</h2>
      <div className="flex flex-col gap-8">
        {tiers.map((tier) => {
          const columns = Number(value(`grid.${tier.key}.columns`));
          const gutter = value(`grid.${tier.key}.gutter`);
          const margin = value(`grid.${tier.key}.margin`);
          return (
            <figure key={tier.key} className="m-0">
              <figcaption className="mb-2 flex flex-wrap items-baseline gap-x-4 text-sm"><span className="font-bold">{tier.label}</span><span className="token-name text-[var(--color-content-muted)]">{tier.range} · {columns} columns · gutter {gutter} · margin {margin}</span></figcaption>
              <div aria-hidden="true" className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] py-4" style={{ paddingInline: margin }}>
                <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, columnGap: gutter }}>
                  {Array.from({ length: columns }, (_, index) => <div key={index} className="h-16 rounded bg-[var(--color-status-info-subtle)] border border-[var(--color-status-info-default)]" />)}
                </div>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

