import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { fi } from "./fi";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, fi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
