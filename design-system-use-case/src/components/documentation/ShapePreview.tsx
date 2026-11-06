import { primitiveTokens } from "@/data/tokens";

const radii = primitiveTokens.shape.filter((token) => token.name.startsWith("radius."));
const shadows = primitiveTokens.shape.filter((token) => token.name.startsWith("shadow."));

/** Documentation only: draws each corner radius and each shadow so the values can be seen. */
export function ShapePreview() {
  return (
    <>
      <section id="radius-examples" aria-labelledby="radius-examples-heading" className="mt-12 scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-white p-6 md:p-8">
        <h2 id="radius-examples-heading" className="m-0 text-2xl font-bold">Corner radius examples</h2>
        <p className="body-copy mt-3 text-sm">The radius is how round a corner is. A bigger number gives a rounder corner.</p>
        <ul className="m-0 mt-6 grid list-none gap-6 p-0 sm:grid-cols-3">
          {radii.map((token) => (
            <li key={token.name} className="flex flex-col gap-3">
              <div aria-hidden="true" className="h-24 border-2 border-[var(--color-border-strong)] bg-[var(--color-surface-subtle)]" style={{ borderRadius: token.value }} />
              <div><span className="token-name">{token.name}</span> <span className="text-sm font-semibold">{token.value}</span><p className="m-0 mt-1 text-sm text-[var(--color-content-muted)]">{token.description}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section id="elevation-examples" aria-labelledby="elevation-examples-heading" className="mt-12 scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 md:p-8">
        <h2 id="elevation-examples-heading" className="m-0 text-2xl font-bold">Elevation examples</h2>
        <p className="body-copy mt-3 text-sm">Elevation is how far a surface seems to float above the page. A bigger, softer shadow means it floats higher. Use the small shadow for chips, the medium one for cards and menus, and the large one for dialogs and toasts.</p>
        <ul className="m-0 mt-6 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {shadows.map((token) => {
            const inset = token.name === "shadow.inset";
            return (
              <li key={token.name} className="flex flex-col gap-3">
                <div aria-hidden="true" className={`h-28 rounded-2xl ${inset ? "bg-[var(--color-surface-raised-dark)]" : "bg-white"}`} style={{ boxShadow: token.value }} />
                <div><span className="token-name">{token.name}</span><p className="m-0 mt-1 text-sm text-[var(--color-content-muted)]">{token.description}</p></div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
