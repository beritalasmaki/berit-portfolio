import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Colors" };

export default function ColorsPage() {
  return <TokenPage active="Colors" title="Colors" description="A restrained palette of primitives mapped to semantic roles, with contrast-aware content and action values, status colours for info, success, warning and error, and the gradients built from them." tokens={[...primitiveTokens.colors, ...primitiveTokens.gradients, ...semanticTokens.filter((token) => token.name.startsWith("color.") || token.name.startsWith("gradient."))]} />;
}
