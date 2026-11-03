// Locale configuration: which languages the site is published in, and how
// each one is addressed in a URL.
//
// English is the default and keeps the original, unprefixed URLs (`/`,
// `/blog`, `/usecases/...`), so nothing that already links to the site breaks.
// Finnish lives under `/fi` with Finnish path words (`/fi/blogi`,
// `/fi/tyot/...`): the words in a URL are a ranking signal for Finnish
// searches and read naturally to a Finnish visitor.

export const locales = ["en", "fi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Value for `<html lang>` and `hreflang`. */
export const htmlLang: Record<Locale, string> = { en: "en", fi: "fi" };

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = { en: "en_GB", fi: "fi_FI" };

/** The language's own name, for the language switcher. */
export const languageName: Record<Locale, string> = { en: "English", fi: "Suomi" };
