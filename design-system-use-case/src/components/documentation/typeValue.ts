const weights: Record<string, string> = { "400": "Regular", "500": "Medium", "600": "Semi bold", "700": "Bold", "800": "Extra bold" };

/** Turns a type token value such as "clamp(22px, 2.4vw, 32px) / 1.1 / 800" into short plain-language sentences. */
export function explainTypeValue(value: string): string[] {
  const parts = value.split(" / ").map((part) => part.trim());
  const lines: string[] = [];
  const [size, lineHeight, ...rest] = parts;

  const clamp = size?.match(/^clamp\(([^,]+),\s*([^,]+),\s*([^)]+)\)$/);
  if (clamp) {
    const [, min, preferred, max] = clamp;
    const vw = preferred.match(/^([\d.]+)vw$/);
    lines.push(`Size: grows with the screen, from ${min} on a small screen up to ${max} on a large one${vw ? ` (in between it is ${vw[1]}% of the screen width)` : ""}.`);
  } else if (size) {
    lines.push(`Size: ${size}, the same on every screen.`);
  }

  if (lineHeight) {
    const px = size && !clamp ? Math.round(Number.parseFloat(size) * Number.parseFloat(lineHeight)) : null;
    lines.push(`Line height: ${lineHeight} times the font size${px ? `, about ${px}px between lines` : ""}.`);
  }

  for (const part of rest) {
    if (weights[part]) lines.push(`Weight: ${part} (${weights[part]}).`);
    else if (/^[+-]?\d+%$/.test(part)) lines.push(`Letter spacing: ${part} of the font size, so letters sit slightly further apart.`);
    else if (part === "uppercase") lines.push("Capitals: the text is shown in capital letters.");
  }
  return lines;
}

const colourName = (r: number, g: number, b: number) => (r === 31 && g === 35 && b === 33 ? "dark charcoal" : r === 199 && g === 209 && b === 200 ? "light sage" : `rgb(${r}, ${g}, ${b})`);

/** Turns a shadow token value into plain-language sentences, one per layer. */
export function explainShadowValue(value: string): string[] {
  const layers: string[] = [];
  let depth = 0, current = "";
  for (const char of value) {
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (char === "," && depth === 0) { layers.push(current.trim()); current = ""; } else current += char;
  }
  layers.push(current.trim());
  const lines = layers.map((layer, index) => {
    const inset = layer.startsWith("inset");
    const match = layer.replace(/^inset\s+/, "").match(/^(-?[\d.]+)(?:px)?\s+(-?[\d.]+)(?:px)?\s+(-?[\d.]+)(?:px)?\s+rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
    if (!match) return `Layer ${index + 1}: ${layer}`;
    const [, x, y, blur, r, g, b, a] = match;
    const move = Number(x) === 0 ? `${y}px ${Number(y) >= 0 ? "down" : "up"}` : `${x}px sideways and ${y}px down`;
    return `Layer ${index + 1}${inset ? " (inside the shape)" : ""}: shifted ${move}, blurred by ${blur}px, in ${colourName(Number(r), Number(g), Number(b))} at ${Math.round(Number(a) * 100)}% strength.`;
  });
  return layers.length > 1 ? ["Layers are stacked on top of each other, so the shadow looks soft.", ...lines] : lines;
}
