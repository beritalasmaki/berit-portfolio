import { ShapePreview } from "@/components/documentation/ShapePreview";
import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Shape and elevation" };

export default function ShapePage() {
  return <TokenPage active="Shape & elevation" title="Shape & elevation" description="Corner radii and shadows, shown as examples, with the values underneath." tokens={[...primitiveTokens.shape, ...semanticTokens.filter((token) => token.name.startsWith("radius.") || token.name.startsWith("elevation."))]} leadNav={[{ id: "radius-examples", label: "Corner radius examples" }, { id: "elevation-examples", label: "Elevation examples" }]} lead={<ShapePreview />} />;
}
