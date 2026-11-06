import type { Metadata } from "next";
import { Checkbox } from "@/components/forms/Checkbox";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Field } from "@/components/forms/Field";
import { Icon } from "@/components/icons/Icon";
import { Input } from "@/components/forms/Input";
import { Radio } from "@/components/forms/Radio";
import { Select } from "@/components/forms/Select";
import { Variation } from "@/components/documentation/Variation";
import type { FormMode } from "@/components/forms/controlStyles";

export const metadata: Metadata = { title: "Form controls" };

const modes: { label: string; mode: FormMode }[] = [
  { label: "Default", mode: "default" },
  { label: "Hover", mode: "hover" },
  { label: "Active", mode: "active" },
  { label: "Focus", mode: "focus" },
  { label: "Disabled", mode: "disabled" },
  { label: "Loading", mode: "loading" },
];

const cssCode = `.control {
  min-height: 44px;
  border: 1px solid var(--color-border-strong);
  border-radius: 16px;
  background: var(--color-surface-canvas);
}

.control:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-surface-inverse);
}`;

function ModeGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export default function FormControlsPage() {
  return <ComponentPage
    name="Form controls"
    eyebrow="Components / atoms"
    description="Input, select, checkbox and radio share one shape, one focus style and the same modes, so a control looks and works the same wherever it is used."
    usage={<p className="m-0">These are the single controls. Put a text input or select inside a Field, so it has a visible label, a hint and an error; checkboxes and radios carry their own label. The modes below are documentation states: in a live form the browser drives hover, active and focus, and only disabled, loading and error are set from code.</p>}
    contract={["The form controls are the text input, the select, the checkbox and the radio. They share one shape, one focus style and the same set of states, which are default, hover, active, focus, disabled, loading and error, so a control looks and behaves the same wherever it is used. The input can also carry an icon before or after the text.", "A loading control is disabled and tells assistive technology that it is busy. Every control renders its native HTML element instead of a styled imitation, which keeps keyboard use, autofill and screen reader support working as the browser intends."]}
    accessibility={["The focus state shows the same ring that the browser draws when a control is reached with the keyboard. Every control meets the minimum touch target of 44px, including the clickable area of the checkbox and radio labels, so they are easy to use on a phone.", "An error is always explained with text and an icon, never by colour alone. Icons inside an input are decorative and are hidden from assistive technology, because the label already tells people what the field is for."]}
    examples={[
      {
        title: "Text input",
        description: "A single-line field in every documented mode.",
        content: <CodeTabs
          view={<ModeGrid>{modes.map(({ label, mode }) => <Variation key={label} label={label} className="w-full"><Input mode={mode} defaultValue="Research workspace" aria-label={`${label} text input`} /></Variation>)}</ModeGrid>}
          cssCode={cssCode}
          javascriptCode={'<Input id="project-name" mode="focus" />'}
        />,
      },
      {
        title: "Input with icons",
        description: "A decorative icon can sit before or after the text. Icons are hidden from assistive technology, so the label still does the naming.",
        content: <CodeTabs
          view={<div className="grid max-w-md gap-6"><Field id="demo-search" label="Search"><Input id="demo-search" leadingIcon={<Icon name="search" />} /></Field><Field id="demo-user" label="Username"><Input id="demo-user" leadingIcon={<Icon name="person" />} /></Field></div>}
          cssCode={cssCode}
          javascriptCode={'<Input id="search" leadingIcon={<Icon name="search" />} />'}
        />,
      },
      {
        title: "Select",
        description: "A native select with the system's own chevron, in every mode.",
        content: <CodeTabs
          view={<ModeGrid>{modes.map(({ label, mode }) => <Variation key={label} label={label} className="w-full"><Select mode={mode} defaultValue="on-track" aria-label={`${label} select`}><option value="on-track">On track</option><option value="at-risk">At risk</option><option value="complete">Complete</option></Select></Variation>)}</ModeGrid>}
          cssCode={cssCode}
          javascriptCode={'<Select id="status" mode="disabled">\n  <option value="on-track">On track</option>\n</Select>'}
        />,
      },
      {
        title: "Checkbox",
        description: "A checkbox carries its own label, so it needs no separate Field.",
        content: <CodeTabs
          view={<ModeGrid>{modes.map(({ label, mode }) => <Variation key={label} label={label} className="w-full"><Checkbox mode={mode} label="Notify the owner" defaultChecked={mode !== "default"} /></Variation>)}</ModeGrid>}
          cssCode={cssCode}
          javascriptCode={'<Checkbox label="Notify the owner" mode="loading" />'}
        />,
      },
      {
        title: "Radio",
        description: "One choice from a set. The set belongs in a fieldset with a legend.",
        content: <CodeTabs
          view={<ModeGrid>{modes.map(({ label, mode }) => <Variation key={label} label={label} className="w-full"><Radio mode={mode} name={`radio-${mode}`} label="Weekly digest" defaultChecked /></Variation>)}</ModeGrid>}
          cssCode={cssCode}
          javascriptCode={'<fieldset>\n  <legend>Email frequency</legend>\n  <Radio name="frequency" label="Weekly digest" />\n</fieldset>'}
        />,
      },
    ]}
  />;
}
