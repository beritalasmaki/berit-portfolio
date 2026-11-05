import type { CSSProperties, ReactNode } from "react";
import type { PageNavGroup } from "@/components/navigation/PageNav";
import { DocsShell } from "@/components/navigation/DocsShell";
import { primitiveTokens } from "@/data/tokens";

const primitiveColorValues: Map<string, string> = new Map([...primitiveTokens.colors, ...primitiveTokens.gradients].map((token) => [token.name, token.value]));

function resolveColorValue(value: string) {
  const reference = value.match(/^\{(.+)\}$/)?.[1];
  return reference ? primitiveColorValues.get(reference) : value;
}

type Token = { name: string; value: string; description: string; type?: string };

/** A titled group of tokens. A page with several groups lists each one in its own card. */
export type TokenSection = { id: string; group: string; title: string; navLabel?: string; description?: string; tokens: readonly Token[] };

type TokenPageProps = {
  active: string;
  title: string;
  description: string;
  /** One flat list. Use `sections` instead when the tokens fall into groups. */
  tokens?: readonly Token[];
  sections?: readonly TokenSection[];
  intro?: string;
  preview?: ReactNode;
  /** Guidance shown above the token lists. */
  lead?: ReactNode;
};

function TokenRows({ tokens }: { tokens: readonly Token[] }) {
  return (
    <div>
      {tokens.map((token) => {
        const isGradient = token.type === "gradient" || token.name.startsWith("gradient.");
        const isColor = token.type === "color" || token.name.startsWith("color.");
        const colorValue = isColor || isGradient ? resolveColorValue(token.value) : undefined;
        return (
          <div key={token.name} className="grid gap-x-4 gap-y-2 border-b border-[var(--color-border-default)] py-4 last:border-0 lg:grid-cols-[15rem_17rem_1fr] lg:items-center">
            <span className="token-name">{token.name}</span>
            <span className="flex items-center gap-2 text-sm font-semibold text-[var(--color-content-primary)]">
              {colorValue ? <span aria-hidden="true" className="h-6 w-6 shrink-0 rounded-md border border-[var(--color-border-strong)]" style={(isGradient ? { backgroundImage: colorValue } : { backgroundColor: colorValue }) as CSSProperties} /> : null}
              <span className="min-w-0 break-words">{token.value.replace(/^\{(.+)\}$/, "$1")}{colorValue && token.value.startsWith("{") && !isGradient ? <span className="token-name ml-2 font-normal text-[var(--color-content-muted)]">{colorValue}</span> : null}</span>
            </span>
            <span className="text-sm text-[var(--color-content-muted)]">{token.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export function TokenPage({ active, title, description, tokens = [], sections, intro = "Foundations / tokens", preview, lead }: TokenPageProps) {
  const groups: readonly TokenSection[] = sections ?? [{ id: "tokens", group: title, title: `${title} tokens`, navLabel: "All tokens", tokens }];
  const pageNav: PageNavGroup[] = [];
  for (const group of groups) {
    const heading = sections ? group.group : title;
    let entry = pageNav.find((item) => item.heading === heading);
    if (!entry) { entry = { heading, items: [] }; pageNav.push(entry); }
    entry.items.push({ id: group.id, label: group.navLabel ?? group.title });
  }
  if (preview) pageNav[0]?.items.unshift({ id: "preview", label: "Rendered preview" });
  return (
    <DocsShell active={active} pageNav={pageNav}>
      <div className="max-w-5xl">
        <p className="eyebrow mb-4">Documentation / {intro.toLowerCase()}</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">{title}</h1>
        <p className="body-copy mt-5 text-lg">{description}</p>
        {lead}
        {preview ? <section id="preview" className="mt-12 scroll-mt-24" aria-labelledby="type-preview-heading"><p className="eyebrow mb-3">Rendered preview</p><h2 id="type-preview-heading" className="mb-5 text-2xl font-bold">See the scale in context.</h2>{preview}</section> : null}
        {groups.map((group) => (
          <article key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="mt-12 scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-white p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
              <h2 id={`${group.id}-heading`} className="m-0 text-2xl font-bold">{group.title}</h2>
              <span className="token-name text-[var(--color-content-muted)]">{group.tokens.length} values</span>
            </div>
            {group.description ? <p className="body-copy -mt-2 mb-6 max-w-3xl text-sm">{group.description}</p> : null}
            <TokenRows tokens={group.tokens} />
          </article>
        ))}
      </div>
    </DocsShell>
  );
}
