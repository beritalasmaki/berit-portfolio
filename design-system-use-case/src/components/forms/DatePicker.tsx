"use client";

import { useRef, useState, type ReactNode } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Calendar } from "@/components/forms/Calendar";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { formatDate, parseDate } from "@/components/forms/dates";
import { Icon } from "@/components/icons/Icon";

type DatePickerProps = {
  id: string;
  label: string;
  /** Defaults to the format hint. Keep the format in the hint, not in a placeholder. */
  hint?: ReactNode;
  /** The date as text, written DD/MM/YYYY. */
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
};

/** A date field in the European format DD/MM/YYYY. The person can type the date or pick it from a calendar. */
export function DatePicker({ id, label, hint = "Use the format DD/MM/YYYY, for example 17/11/2026", value, onChange, required, optional, minDate, maxDate, className = "" }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const opener = useRef<HTMLButtonElement>(null);
  const parsed = parseDate(value);
  const invalid = touched && value.trim() !== "" && !parsed;
  const error = invalid ? "Enter a date that exists, like 17/11/2026." : undefined;

  function close() {
    setOpen(false);
    opener.current?.focus();
  }

  return (
    <div className={`relative ${className}`} onKeyDown={(event) => { if (open && event.key === "Escape") { event.stopPropagation(); close(); } }}>
      <Field id={id} label={label} hint={hint} error={error} required={required} optional={optional}>
        <Input
          id={id}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          required={required}
          mode={invalid ? "error" : "default"}
          aria-describedby={[hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setTouched(true)}
          trailingIcon={<IconButton ref={opener} label="Choose date" icon={<Icon name="calendar_month" />} aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen((current) => !current)} />}
        />
      </Field>
      {open ? (
        <div role="dialog" aria-label="Choose date" className="absolute left-0 top-full z-10 mt-2">
          <Calendar value={parsed} minDate={minDate} maxDate={maxDate} autoFocus onSelect={(date) => { onChange(formatDate(date)); setTouched(true); close(); }} />
        </div>
      ) : null}
    </div>
  );
}
