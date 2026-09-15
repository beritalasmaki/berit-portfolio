import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Spacing" };

export default function SpacingPage() {
  return <TokenPage active="Spacing" title="Spacing" description="An 8px-based scale that keeps page rhythm, component gaps, and responsive layouts predictable." tokens={[...primitiveTokens.spacing, ...semanticTokens.filter((token) => token.name.startsWith("space."))]} />;
}
