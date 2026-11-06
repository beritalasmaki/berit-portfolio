import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Variation } from "@/components/documentation/Variation";
import { FormActions } from "@/components/forms/FormActions";
import { FormProgress } from "@/components/forms/FormProgress";

export const metadata: Metadata = { title: "Form progress and actions" };

const steps = ["Your details", "Contact", "Review"];

export default function FormProgressPage() {
  return <ComponentPage
    name="Form progress and actions"
    eyebrow="Components / molecules"
    description="Two parts that guide someone through a multi-step form: where they are, and the buttons that move them on."
    usage={<p className="m-0">Show FormProgress above a form with more than one step, and put FormActions at the bottom of every step. They are used together in the multi-step form organism.</p>}
    contract={["Form progress shows numbered steps with a status under each one, and it also states the position in words, for example step two of four. Form actions are the buttons at the bottom of a step: the first step offers cancel and next, the middle steps back and next, and the last step back and a button that submits the form.", "The primary action is always on the right and stays in the same place on every step. Arrows show the direction of movement and a cancel icon marks cancel, so the buttons can be understood at a glance."]}
    accessibility={["The position is always given as text as well, so it does not depend on colour or on the circles. The current step is marked for assistive technology, and every step has a status in words such as in progress or not started.", "The submit button says what will happen, for example send application, instead of a generic word. All of the buttons meet the 44px minimum target and can be reached and used with a keyboard."]}
    examples={[
      { title: "Form progress", description: "The same steps at the start, in the middle and at the end.", content: <CodeTabs view={<div className="grid w-full gap-8">{[1, 2, 3].map((current) => <Variation key={current} label={`Step ${current}`} className="w-full"><FormProgress steps={steps} current={current} className="w-full" /></Variation>)}</div>} cssCode={".step { border-radius: 9999px; min-width: 44px; min-height: 44px; }"} javascriptCode={'<FormProgress steps={["Your details", "Contact", "Review"]} current={2} />'} /> },
      { title: "Form actions", description: "The buttons change with the position of the step.", content: <CodeTabs view={<div className="grid w-full gap-8"><Variation label="First step" className="w-full"><FormActions position="first" /></Variation><Variation label="Middle step" className="w-full"><FormActions position="middle" /></Variation><Variation label="Last step" className="w-full"><FormActions position="last" submitLabel="Send application" /></Variation></div>} cssCode={".form-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}"} javascriptCode={'<FormActions position="last" submitLabel="Send application" onBack={back} />'} /> },
    ]}
  />;
}
