import type { CSSProperties, ReactNode } from "react";
import { DocsShell } from "@/components/navigation/DocsShell";
import { primitiveTokens } from "@/data/tokens";

const primitiveColorValues: Map<string, string> = new Map([...primitiveTokens.colors, ...primitiveTokens.gradients].map((token) => [token.name, token.value]));

function resolveColorValue(value: string) {
  const reference = value.match(/^\{(.+)\}$/)?.[1];
  return reference ? primitiveColorValues.get(reference) : value;
}

type Token = { name: string; value: string; description: string; type?: string };

type TokenPageProps = {
  active: string;
  title: string;
  description: string;
  tokens: readonly Token[];
  intro?: string;
  preview?: ReactNode;
};

export function TokenPage({ active, title, description, tokens, intro = "Foundations / tokens", preview }: TokenPageProps) {
  return <DocsShell active={active}><div className="max-w-5xl"><p className="eyebrow mb-4">Documentation / {intro.toLowerCase()}</p><h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">{title}</h1><p className="body-copy mt-5 text-lg">{description}</p>{preview ? <section className="mt-12" aria-labelledby="type-preview-heading"><p className="eyebrow mb-3">Rendered preview</p><h2 id="type-preview-heading" className="mb-5 text-2xl font-bold">See the scale in context.</h2>{preview}</section> : null}<article className="mt-12 rounded-2xl border border-[var(--color-border-default)] bg-white p-6 md:p-8"><div className="mb-6 flex items-center justify-between gap-4"><h2 className="m-0 text-2xl font-bold">{title} tokens</h2><span className="token-name text-[var(--color-content-muted)]">{tokens.length} values</span></div><div>{tokens.map((token) => { const isGradient = token.type === "gradient" || token.name.startsWith("gradient."); const isColor = token.type === "color" || token.name.startsWith("color."); const colorValue = isColor || isGradient ? resolveColorValue(token.value) : undefined; return <div key={token.name} className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[var(--color-border-default)] py-4 last:border-0"><span className="token-name min-w-[15rem]">{token.name}</span><span className="flex min-w-[15rem] items-center gap-2 text-sm font-semibold text-[var(--color-content-primary)]">{colorValue ? <span aria-hidden="true" className="h-6 w-6 shrink-0 rounded-md border border-[var(--color-border-strong)]" style={(isGradient ? { backgroundImage: colorValue } : { backgroundColor: colorValue }) as CSSProperties} /> : null}{token.value}</span><span className="w-full text-sm text-[var(--color-content-muted)] lg:w-auto">{token.description}</span></div>; })}</div></article></div></DocsShell>;
}
