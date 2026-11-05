import type { Metadata } from "next";
import { Checkbox } from "@/components/forms/Checkbox";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Radio } from "@/components/forms/Radio";
import { Select } from "@/components/forms/Select";
import { Icon } from "@/components/icons/Icon";
import { RadioGroup } from "@/components/forms/RadioGroup";
import { Variation } from "@/components/documentation/Variation";
import type { FormMode } from "@/components/forms/controlStyles";

export const metadata: Metadata = { title: "Forms" };

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

export default function FormsPage() {
  return <ComponentPage
    name="Forms"
    eyebrow="Components / input"
    description="Form controls share one shape, one focus style and the same modes, so a field looks and works the same wherever it is used."
    usage={<p className="m-0">Wrap every control in a Field so it carries a real label, and use the hint before the control rather than placeholder text. The modes below are documentation states: in a live form the browser drives hover, active and focus, and only disabled and loading are set from code.</p>}
    contract={[
      "Controls are Input, Select, Checkbox and Radio, with Field supplying label, hint and error.",
      "Modes are default, hover, active, focus, disabled, loading and error, matching Button.",
      "Field marks a control as required or optional. Input takes a leadingIcon and a trailingIcon. RadioGroup wraps radios in a fieldset.",
      "Loading renders the control disabled and exposes aria-busy.",
      "Field takes the id that the control inside it also uses, so the label points at a real control.",
      "Every control renders its native HTML element rather than a styled div.",
    ]}
    accessibility={[
      "Every control has a visible, persistent label. Placeholder text is not a label.",
      "The focus mode shows the same ring the browser draws on :focus-visible.",
      "Controls meet the 44px minimum touch target, including the checkbox and radio labels.",
      "Errors are text with an icon, never colour alone.",
      "Radio groups belong in a fieldset with a legend so the group has a name.",
    ]}
    examples={[
      {
        title: "Required, optional and hint text",
        description: "Mark every field as required or optional, say the format in a hint above the control, and explain the asterisk once. An error replaces the hint's job with a message and an icon.",
        content: <CodeTabs
          view={<div className="grid max-w-md gap-6"><p className="m-0 text-sm">* marked fields are required</p><Field id="demo-name" label="Full name" hint="As it appears on your passport" required><Input id="demo-name" required aria-describedby="demo-name-hint" /></Field><Field id="demo-phone" label="Phone number" hint="Include the country code" optional><Input id="demo-phone" type="tel" aria-describedby="demo-phone-hint" /></Field><Field id="demo-email" label="Email" hint="We will send the confirmation here" error="Enter an email address like name@example.com." required><Input id="demo-email" mode="error" defaultValue="name@" aria-invalid="true" aria-describedby="demo-email-hint demo-email-error" /></Field></div>}
          cssCode={cssCode}
          javascriptCode={'<Field id="email" label="Email" hint="We will send the confirmation here" error={error} required>\n  <Input id="email" mode={error ? "error" : "default"} aria-invalid={Boolean(error)} aria-describedby="email-hint email-error" />\n</Field>'}
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
        title: "Radio group",
        description: "A fieldset with a legend gives the options a shared name and a place for the hint and the error.",
        content: <CodeTabs
          view={<RadioGroup id="demo-contact" legend="How should we contact you?" hint="Choose one" required><Radio name="demo-contact" label="Email" defaultChecked /><Radio name="demo-contact" label="Phone" /></RadioGroup>}
          cssCode={cssCode}
          javascriptCode={'<RadioGroup id="contact" legend="How should we contact you?" hint="Choose one" required>\n  <Radio name="contact" label="Email" />\n  <Radio name="contact" label="Phone" />\n</RadioGroup>'}
        />,
      },
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
      {
        title: "Field in use",
        description: "Label, hint and error around a control, and a grouped set of radios.",
        content: <CodeTabs
          view={<div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-6">
              <Variation label="With hint" className="w-full">
                <Field id="project-name" label="Project name" hint="Shown in the sidebar and in search results." className="w-full">
                  <Input id="project-name" aria-describedby="project-name-hint" defaultValue="Research workspace" />
                </Field>
              </Variation>
              <Variation label="With error" className="w-full">
                <Field id="project-owner" label="Owner" error="Choose an owner before saving." className="w-full">
                  <Select id="project-owner" aria-describedby="project-owner-error" defaultValue=""><option value="" disabled>Select an owner</option><option value="mika">Mika Lee</option><option value="aino">Aino Salmi</option></Select>
                </Field>
              </Variation>
            </div>
            <Variation label="Grouped choices" className="w-full">
              <fieldset className="m-0 w-full rounded-lg border border-[var(--preview-border,var(--color-border-default))] p-4">
                <legend className="px-2 text-sm font-semibold text-[var(--preview-content,var(--color-content-primary))]">Email frequency</legend>
                <div className="mt-2 grid">
                  <Radio name="frequency" value="daily" label="Daily summary" defaultChecked />
                  <Radio name="frequency" value="weekly" label="Weekly digest" />
                  <Radio name="frequency" value="never" label="No email" />
                </div>
              </fieldset>
            </Variation>
          </div>}
          cssCode={cssCode}
          javascriptCode={'<Field id="project-name" label="Project name" hint="Shown in the sidebar.">\n  <Input id="project-name" aria-describedby="project-name-hint" />\n</Field>'}
        />,
      },
    ]}
  />;
}
