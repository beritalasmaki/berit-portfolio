/** Fills `{name}` placeholders: `fmt("Part {part} of {total}", { part: 1, total: 2 })`.
 * Placeholders rather than concatenation, because the order of the pieces
 * differs between languages. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
