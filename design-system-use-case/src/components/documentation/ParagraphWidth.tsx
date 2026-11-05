const rows = [
  ["12px", "300–500px"],
  ["14px", "350–585px"],
  ["15px (body text)", "375–625px"],
  ["16px", "400–670px"],
  ["18px (lead text)", "450–750px"],
];

/** Documentation only: how wide a paragraph can be at each font size for 45 to 75 characters per line. */
export function ParagraphWidth() {
  return (
    <section id="paragraph-width" aria-labelledby="paragraph-width-heading" className="mt-12 scroll-mt-24 rounded-2xl border border-[var(--color-border-default)] bg-white p-6 md:p-8">
      <h2 id="paragraph-width-heading" className="m-0 text-2xl font-bold">Paragraph width</h2>
      <p className="body-copy mt-3 text-sm">Long lines are hard to follow. A comfortable line holds 45 to 75 characters. The table shows what that means in pixels for Montserrat, which is a wide typeface, so the numbers are approximate.</p>
      <p className="body-copy mt-3 text-sm">The token <code className="token-name rounded bg-[var(--color-surface-raised)] px-1.5 py-1">width.text</code> sets the hard maximum to 800px. At 15px that is about 95 characters, so it is a ceiling, not a target: where you can, keep text closer to the range below, for example with <code className="token-name rounded bg-[var(--color-surface-raised)] px-1.5 py-1">width.text-narrow</code> (600px) for intros.</p>
      <table className="mt-6 w-full border-collapse text-left text-sm">
        <caption className="sr-only">Comfortable paragraph width for each font size</caption>
        <thead><tr className="bg-[var(--color-surface-subtle)]"><th scope="col" className="border border-[var(--color-border-default)] px-4 py-3 font-semibold">Font size</th><th scope="col" className="border border-[var(--color-border-default)] px-4 py-3 font-semibold">Comfortable width (45–75 characters)</th></tr></thead>
        <tbody>{rows.map(([size, width]) => <tr key={size}><th scope="row" className="border border-[var(--color-border-default)] px-4 py-3 font-normal">{size}</th><td className="border border-[var(--color-border-default)] px-4 py-3">{width}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
