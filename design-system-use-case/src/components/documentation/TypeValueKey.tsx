const items: [string, string][] = [
  ["size / line height / weight", "Type values are written in this order, separated by slashes. For example 15px / 1.6 means 15px text with a line height of 1.6."],
  ["clamp(22px, 2.4vw, 32px)", "A size that changes with the screen. The first number is the smallest size, the last is the largest, and the middle one is how fast it grows: 2.4vw is 2.4% of the browser window width. The text is never smaller than 22px or larger than 32px."],
  ["Line height 1.1", "The space for one line of text, as a multiple of the font size. 1.1 is tight and suits headings. 1.6 is airy and suits paragraphs."],
  ["Weight 800", "How thick the letters are. 400 is regular, 600 is semi bold, 700 is bold and 800 is extra bold."],
  ["+8% and uppercase", "Letter spacing adds space between letters, as a percentage of the font size. Uppercase shows the text in capital letters. Both are used on small labels and table headers."],
];

/** Documentation only: explains how to read the values in the type token list. */
export function TypeValueKey() {
  return (
    <section id="reading-values" aria-labelledby="reading-values-heading" className="mt-12 scroll-mt-24 rounded-2xl bg-[var(--color-surface-subtle)] p-6 md:p-8">
      <h2 id="reading-values-heading" className="m-0 text-2xl font-bold">How to read the values</h2>
      <p className="body-copy mt-3 text-sm">The type tokens below are written in a short form. Under each one there is a plain-language reading of what it means.</p>
      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        {items.map(([term, text]) => (
          <div key={term}>
            <dt><code className="token-name rounded bg-[var(--color-surface-raised)] px-1.5 py-1">{term}</code></dt>
            <dd className="body-copy m-0 mt-2 text-sm">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
