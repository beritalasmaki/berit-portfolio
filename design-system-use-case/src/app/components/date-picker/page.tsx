import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { DatePickerDemo } from "@/components/documentation/DatePickerDemo";

export const metadata: Metadata = { title: "Date picker" };

export default function DatePickerPage() {
  return <ComponentPage
    name="Date picker"
    eyebrow="Components / forms"
    description="A date field in the European format DD/MM/YYYY. People can type the date or choose it from a calendar that starts on Monday."
    usage={<p className="m-0">Use it when a date is a single known day, such as a start date. For a date everyone knows by heart, such as a birth date, typing is often quicker, and the field still works that way.</p>}
    contract={["DatePicker is a text input plus a calendar button. The value is a string written DD/MM/YYYY.", "Calendar can be used on its own. It takes a value, onSelect, and optional minDate and maxDate.", "The format is explained in the hint above the field, not in a placeholder.", "A date that does not exist, such as 31/02/2026, shows an error message after the field is left."]}
    accessibility={["Arrow keys move by day and week, Home and End go to the start and end of the week, Page Up and Page Down change the month, and Shift with them changes the year.", "Enter or Space chooses the focused day, and Escape closes the calendar and returns focus to the button.", "Every day button has a full name such as \"17 November 2026\", and today is marked with aria-current=\"date\" and an outline, not colour alone.", "Day buttons are 44px and the text meets 4.5:1 contrast in Light and Dark."]}
    examples={[
      { title: "Date picker", description: "Type a date or open the calendar. Try the keyboard keys.", content: <CodeTabs view={<DatePickerDemo />} cssCode={".day { width: 44px; height: 44px; border-radius: 9999px; }"} javascriptCode={"<DatePicker id=\"start\" label=\"Start date\" value={value} onChange={setValue} required />"} /> },
      { title: "With an invalid date", description: "Leave the field to see the error.", content: <CodeTabs view={<DatePickerDemo defaultValue="31/02/2026" />} cssCode={".field-error { color: var(--color-status-error-strong); }"} javascriptCode={"<DatePicker id=\"start\" label=\"Start date\" value=\"31/02/2026\" onChange={setValue} />"} /> },
    ]}
  />;
}
