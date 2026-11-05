import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { DatePickerDemo } from "@/components/documentation/DatePickerDemo";

export const metadata: Metadata = { title: "Date picker" };

export default function DatePickerPage() {
  return <ComponentPage
    name="Date picker"
    eyebrow="Components / molecules"
    description="A date field in the European format DD/MM/YYYY. People can type the date or choose it from a calendar that starts on Monday."
    usage={<p className="m-0">Use it when a date is a single known day, such as a start date. For a date everyone knows by heart, such as a birth date, typing is often quicker, and the field still works that way.</p>}
    contract={["The date picker is a text field for a date written in the European format day, month and year, with a button that opens a calendar. A person can type the date or choose it from the calendar, which starts the week on Monday. The format is explained in the hint above the field, not in a placeholder, and a date that does not exist shows an error once the field is left.", "The calendar can also be used on its own, with an optional earliest and latest date. Moving between months and years does not change the chosen date until a day is selected."]}
    accessibility={["The calendar can be used with a keyboard only. The arrow keys move between days and weeks, Home and End go to the start and end of the week, Page Up and Page Down change the month, and holding Shift with them changes the year. Enter or Space chooses the focused day, and Escape closes the calendar and returns focus to the button that opened it.", "Every day button has a full spoken name that includes the date, today is marked with an outline and not only by colour, and each button is 44px. The text keeps at least a 4.5:1 contrast in both light and dark themes."]}
    examples={[
      { title: "Date picker", description: "Type a date or open the calendar. Try the keyboard keys.", content: <CodeTabs view={<DatePickerDemo />} cssCode={".day { width: 44px; height: 44px; border-radius: 9999px; }"} javascriptCode={"<DatePicker id=\"start\" label=\"Start date\" value={value} onChange={setValue} required />"} /> },
      { title: "With an invalid date", description: "Leave the field to see the error.", content: <CodeTabs view={<DatePickerDemo defaultValue="31/02/2026" />} cssCode={".field-error { color: var(--color-status-error-strong); }"} javascriptCode={"<DatePicker id=\"start\" label=\"Start date\" value=\"31/02/2026\" onChange={setValue} />"} /> },
    ]}
  />;
}
