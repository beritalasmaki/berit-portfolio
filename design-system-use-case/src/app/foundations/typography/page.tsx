import { ParagraphWidth } from "@/components/documentation/ParagraphWidth";
import { TypeValueKey } from "@/components/documentation/TypeValueKey";
import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Typography" };

export default function TypographyPage() {
  return <TokenPage active="Typography" title="Typography" description="Fonts and text styles for page titles, sections, body text, labels and metadata." tokens={primitiveTokens.typography} leadNav={[{ id: "reading-values", label: "How to read the values" }, { id: "paragraph-width", label: "Paragraph width" }]} lead={<><TypeValueKey /><ParagraphWidth /></>} preview={<div className="grid gap-4"><article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6"><p className="eyebrow mb-4">H1 / page title</p><h1 className="m-0 text-[clamp(40px,6vw,82px)] font-extrabold leading-[.98] tracking-[-.045em]">A system for work that moves.</h1><p className="token-name mt-6">clamp(40px, 6vw, 82px) / 0.98 / 800</p></article><article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6"><p className="eyebrow mb-4">H2 / section heading</p><h2 className="m-0 text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-.04em]">The foundation layer.</h2><p className="token-name mt-6">clamp(30px, 4vw, 52px) / 1.05 / 800</p></article><article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6"><p className="eyebrow mb-4">H3 / component heading</p><h3 className="m-0 text-[clamp(22px,2.4vw,32px)] font-extrabold leading-[1.1] tracking-[-.035em]">Activation rate</h3><p className="token-name mt-6">clamp(22px, 2.4vw, 32px) / 1.1 / 800</p></article><article className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6"><p className="eyebrow mb-4">H4 / subsection heading</p><h4 className="m-0 text-[19px] font-bold leading-[1.2]">How it&apos;s used?</h4><p className="token-name mt-6">19px / 1.2 / 700</p></article></div>} />;
}
