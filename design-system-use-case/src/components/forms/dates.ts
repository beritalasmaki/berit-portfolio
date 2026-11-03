/** Date helpers for the Calendar and DatePicker. Dates are written DD/MM/YYYY and the week starts on Monday. */

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

/** Adds months and keeps the day inside the new month, so 31 January plus one month is 28 or 29 February. */
export function addMonths(date: Date, months: number) {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), lastDay));
}

export function isSameDay(a: Date | null | undefined, b: Date | null | undefined) {
  return Boolean(a && b) && a!.getFullYear() === b!.getFullYear() && a!.getMonth() === b!.getMonth() && a!.getDate() === b!.getDate();
}

/** The Monday on or before the date. */
export function startOfWeek(date: Date) {
  const day = (date.getDay() + 6) % 7;
  return addDays(date, -day);
}

export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

/** Returns the date for text such as 17/11/2026, or null when it is not written that way or the date does not exist. */
export function parseDate(text: string) {
  const match = text.trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const [, day, month, year] = match.map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

const longDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });
export const dayName = (date: Date) => longDate.format(date);
export const monthName = (date: Date) => new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date);
