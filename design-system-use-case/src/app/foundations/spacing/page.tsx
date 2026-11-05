import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Spacing" };

export default function SpacingPage() {
  return <TokenPage active="Spacing" title="Spacing" description="Eight steps from 4px to 64px, used for gaps, padding and page layout." tokens={[...primitiveTokens.spacing, ...semanticTokens.filter((token) => token.name.startsWith("space."))]} />;
}
