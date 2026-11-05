import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Icon, type IconName } from "@/components/icons/Icon";
import { IconButton } from "@/components/buttons/IconButton";

export const metadata: Metadata = { title: "Icons" };

const icons: IconName[] = ["arrow_forward", "arrow_back", "chevron_left", "chevron_right", "add", "close", "check", "search", "person", "language", "calendar_month", "info", "check_circle", "warning", "error"];

export default function IconsPage() {
  return <ComponentPage
    name="Icons"
    eyebrow="Components / atoms"
    description="A small set of line icons, drawn inline so they work without an icon font."
    usage={<p className="m-0">Use an icon to support a label, not to replace it. Put an icon before or after the text of a button or input. An icon on its own is a button, so use IconButton and give it a label.</p>}
    contract={["Icon draws a small line icon as an inline image that takes the colour of the text around it, so it works in light and dark themes without a separate file. The icons are 24px by default and scale with the size set on them. The icon button is the icon-only button, and it always requires a text label.", "The set is kept small on purpose. An icon is added only when it supports a label or a state that is used in the system, so that the same meaning is always shown with the same picture."]}
    accessibility={["Icons are decorative and are hidden from assistive technology, so the meaning must always come from text next to them. A control that shows only an icon needs an accessible name, which the icon button provides through its label.", "An icon must never be the only sign of a status. A status is shown with an icon together with words, so it is understood by people who cannot see the icon or its colour."]}
    examples={[
      {
        title: "All icons",
        description: "Every icon in the set, with the name used in code.",
        content: <CodeTabs
          view={<ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5">{icons.map((name) => <li key={name} className="flex flex-col items-center gap-2 rounded-xl border border-[var(--preview-border,var(--color-border-default))] p-4"><Icon name={name} /><span className="token-name">{name}</span></li>)}</ul>}
          cssCode={".icon {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  fill: none;\n}"}
          javascriptCode={'<Icon name="search" />'}
        />,
      },
      {
        title: "Icon button",
        description: "An icon on its own is a button with a text label for assistive technology.",
        content: <CodeTabs
          view={<div className="flex items-center gap-2"><IconButton label="Close" icon={<Icon name="close" />} /><IconButton label="Previous" icon={<Icon name="chevron_left" />} /><IconButton label="Next" icon={<Icon name="chevron_right" />} /><IconButton label="Choose date" icon={<Icon name="calendar_month" />} /></div>}
          cssCode={".icon-button {\n  width: 44px;\n  height: 44px;\n  border-radius: 9999px;\n}"}
          javascriptCode={'<IconButton label="Close" icon={<Icon name="close" />} />'}
        />,
      },
    ]}
  />;
}
