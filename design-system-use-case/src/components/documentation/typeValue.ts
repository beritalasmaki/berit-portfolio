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
