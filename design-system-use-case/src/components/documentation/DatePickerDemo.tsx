"use client";

import { useState } from "react";
import { DatePicker } from "@/components/forms/DatePicker";

/** Documentation only: holds the typed value so the date picker can be tried. */
export function DatePickerDemo({ defaultValue = "" }: { defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);
  return <div className="w-full max-w-sm"><DatePicker id="demo-date" label="Start date" value={value} onChange={setValue} required /></div>;
}
