"use client";

import { useEffect, useRef, useState } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Icon } from "@/components/icons/Icon";
import { addDays, addMonths, dayName, isSameDay, monthName, startOfDay, startOfWeek } from "@/components/forms/dates";

type CalendarProps = {
  /** The chosen date. */
  value?: Date | null;
  onSelect: (date: Date) => void;
  /** Which day is marked as today. Defaults to the current day. */
  today?: Date;
  /** The month shown first. Defaults to the month of the value, or of today. */
  defaultMonth?: Date;
  minDate?: Date;
  maxDate?: Date;
  /** Move focus to the calendar when it appears, as a popup does. */
  autoFocus?: boolean;
  className?: string;
};

const weekdays = [["Mo", "Monday"], ["Tu", "Tuesday"], ["We", "Wednesday"], ["Th", "Thursday"], ["Fr", "Friday"], ["Sa", "Saturday"], ["Su", "Sunday"]];
const key = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

/**
 * A month calendar that replaces separate day, month and year dropdowns. Monday is the first day.
 * Arrow keys move by day and week, Home and End go to the start and end of the week,
 * Page Up and Page Down change the month, and Shift with them changes the year.
 */
export function Calendar({ value = null, onSelect, today, defaultMonth, minDate, maxDate, autoFocus = false, className = "" }: CalendarProps) {
  const [now] = useState(() => startOfDay(today ?? new Date()));
  const [focusDate, setFocusDate] = useState(() => startOfDay(value ?? defaultMonth ?? now));
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  const shouldFocus = useRef(autoFocus);

  useEffect(() => {
    if (shouldFocus.current) {
      buttons.current.get(key(focusDate))?.focus();
      shouldFocus.current = false;
    }
  }, [focusDate]);

  const first = new Date(focusDate.getFullYear(), focusDate.getMonth(), 1);
  const gridStart = startOfWeek(first);
  const weeks = Array.from({ length: 6 }, (_, week) => Array.from({ length: 7 }, (_, day) => addDays(gridStart, week * 7 + day)));
  const isOut = (date: Date) => Boolean((minDate && date < startOfDay(minDate)) || (maxDate && date > startOfDay(maxDate)));

  function move(next: Date, moveFocus: boolean) {
    shouldFocus.current = moveFocus;
    setFocusDate(next);
  }

  function onKeyDown(event: React.KeyboardEvent, date: Date) {
    const shift = event.shiftKey;
    const moves: Record<string, Date> = {
      ArrowLeft: addDays(date, -1),
      ArrowRight: addDays(date, 1),
      ArrowUp: addDays(date, -7),
      ArrowDown: addDays(date, 7),
      Home: startOfWeek(date),
      End: addDays(startOfWeek(date), 6),
      PageUp: addMonths(date, shift ? -12 : -1),
      PageDown: addMonths(date, shift ? 12 : 1),
    };
    if (moves[event.key]) {
      event.preventDefault();
      move(moves[event.key], true);
    }
  }

  return (
    <div className={`w-[21.25rem] max-w-full rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-popup-surface,var(--color-surface-canvas))] p-4 text-[var(--preview-content,var(--color-content-primary))] shadow-[var(--shadow-l)] ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <IconButton label="Previous month" icon={<Icon name="chevron_left" />} onClick={() => move(addMonths(focusDate, -1), false)} />
          <span aria-live="polite" className="w-12 text-center text-sm font-semibold">{monthName(focusDate).slice(0, 3)}</span>
          <IconButton label="Next month" icon={<Icon name="chevron_right" />} onClick={() => move(addMonths(focusDate, 1), false)} />
        </div>
        <div className="flex items-center">
          <IconButton label="Previous year" icon={<Icon name="chevron_left" />} onClick={() => move(addMonths(focusDate, -12), false)} />
          <span aria-live="polite" className="w-12 text-center text-sm font-semibold">{focusDate.getFullYear()}</span>
          <IconButton label="Next year" icon={<Icon name="chevron_right" />} onClick={() => move(addMonths(focusDate, 12), false)} />
        </div>
      </div>
      <table role="grid" aria-label={`${monthName(focusDate)} ${focusDate.getFullYear()}`} className="mt-2 border-collapse">
        <thead>
          <tr>
            {weekdays.map(([short, long]) => (
              <th key={short} scope="col" className="size-11 p-0 text-xs font-semibold text-[var(--preview-content-muted,var(--color-content-muted))]"><abbr title={long} className="no-underline">{short}</abbr></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={key(week[0])}>
              {week.map((date) => {
                const outside = date.getMonth() !== focusDate.getMonth();
                const selected = isSameDay(date, value);
                const isToday = isSameDay(date, now);
                const disabled = isOut(date);
                const style = selected
                  ? "bg-[image:var(--preview-action-gradient,var(--gradient-action-primary))] font-bold text-[var(--preview-action-text,var(--color-content-inverse))]"
                  : `hover:bg-[var(--preview-surface-raised,var(--color-surface-raised))] ${outside ? "text-[var(--preview-content-muted,var(--color-content-muted))]" : ""} ${isToday ? "border-2 border-[var(--preview-accent,var(--color-action-accent-dark))] font-semibold" : ""}`;
                return (
                  <td key={key(date)} role="gridcell" aria-selected={selected || undefined} className="p-0">
                    <button
                      ref={(element) => {
                        if (element) buttons.current.set(key(date), element);
                        else buttons.current.delete(key(date));
                      }}
                      type="button"
                      tabIndex={isSameDay(date, focusDate) ? 0 : -1}
                      aria-label={dayName(date)}
                      aria-current={isToday ? "date" : undefined}
                      disabled={disabled}
                      onClick={() => onSelect(date)}
                      onKeyDown={(event) => onKeyDown(event, date)}
                      className={`flex size-11 items-center justify-center rounded-full text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${style}`}
                    >
                      {date.getDate()}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
