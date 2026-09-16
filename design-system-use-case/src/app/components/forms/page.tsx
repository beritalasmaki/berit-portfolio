import type { Metadata } from "next";
import { Checkbox } from "@/components/forms/Checkbox";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Radio } from "@/components/forms/Radio";
import { Select } from "@/components/forms/Select";
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
  border-radius: 8px;
  background: var(--color-surface-canvas);
}

.control:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 3px;
}`;

function ModeGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export default function FormsPage() {
  return <ComponentPage
    name="Forms"
    eyebrow="Components / input"
    description="Form controls share one control shape, one focus treatment, and one set of modes, so a field behaves the same wherever it appears."
    usage={<p className="m-0">Wrap every control in a Field so it carries a real label, and use the hint before the control rather than placeholder text. The modes below are documentation states: in a live form the browser drives hover, active and focus, and only disabled and loading are set from code.</p>}
    contract={[
      "Controls are Input, Select, Checkbox and Radio, with Field supplying label, hint and error.",
      "Modes are default, hover, active, focus, disabled and loading, matching Button.",
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
