import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Radio } from "@/components/forms/Radio";
import { RadioGroup } from "@/components/forms/RadioGroup";
import { Select } from "@/components/forms/Select";
import { Variation } from "@/components/documentation/Variation";

export const metadata: Metadata = { title: "Form fields" };

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

export default function FormFieldsPage() {
  return <ComponentPage
    name="Form fields"
    eyebrow="Components / molecules"
    description="A form field puts a label, a hint and an error around a control, so people know what to enter and what went wrong."
    usage={<p className="m-0">Wrap every text input and select in a Field. Say the format in the hint above the control rather than in placeholder text, mark each field as required or optional, and explain the asterisk once at the top of the form. Use RadioGroup for a set of radios.</p>}
    contract={["Field takes the id that the control inside it also uses, so the label points at a real control.", "Field marks a control as required or optional. Required fields get an asterisk.", "The hint sits above the control. An error replaces the hint's job with a message and an icon.", "RadioGroup wraps radios in a fieldset with a legend and takes the same hint, error and required or optional marking."]}
    accessibility={["Every control has a visible, persistent label. Placeholder text is not a label.", "Hints and errors are connected with aria-describedby, and an invalid control has aria-invalid.", "Errors are text with an icon, never colour alone.", "Radio groups belong in a fieldset with a legend so the group has a name."]}
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
        title: "Radio group",
        description: "A fieldset with a legend gives the options a shared name and a place for the hint and the error.",
        content: <CodeTabs
          view={<RadioGroup id="demo-contact" legend="How should we contact you?" hint="Choose one" required><Radio name="demo-contact" label="Email" defaultChecked /><Radio name="demo-contact" label="Phone" /></RadioGroup>}
          cssCode={cssCode}
          javascriptCode={'<RadioGroup id="contact" legend="How should we contact you?" hint="Choose one" required>\n  <Radio name="contact" label="Email" />\n  <Radio name="contact" label="Phone" />\n</RadioGroup>'}
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
