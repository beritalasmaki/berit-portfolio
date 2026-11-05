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
    contract={["FormProgress takes the step names and the current step, counting from 1. It shows numbered circles, a status under each step and Step X of Y as text.", "FormActions takes a position (first, middle or last). The first step has Cancel and Next, a middle step Back and Next, the last step Back and a submit button.", "The primary action is always on the right. Arrows show direction and a cancel icon marks Cancel."]}
    accessibility={["Progress is also given as text, so it does not depend on colour or on the circles.", "The current step is marked with aria-current=\"step\".", "The submit button says what will happen, for example Send application.", "All buttons meet the 44px minimum target."]}
    examples={[
      { title: "Form progress", description: "The same steps at the start, in the middle and at the end.", content: <CodeTabs view={<div className="grid w-full gap-8">{[1, 2, 3].map((current) => <Variation key={current} label={`Step ${current}`} className="w-full"><FormProgress steps={steps} current={current} className="w-full" /></Variation>)}</div>} cssCode={".step { border-radius: 9999px; min-width: 44px; min-height: 44px; }"} javascriptCode={'<FormProgress steps={["Your details", "Contact", "Review"]} current={2} />'} /> },
      { title: "Form actions", description: "The buttons change with the position of the step.", content: <CodeTabs view={<div className="grid w-full gap-8"><Variation label="First step" className="w-full"><FormActions position="first" /></Variation><Variation label="Middle step" className="w-full"><FormActions position="middle" /></Variation><Variation label="Last step" className="w-full"><FormActions position="last" submitLabel="Send application" /></Variation></div>} cssCode={".form-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}"} javascriptCode={'<FormActions position="last" submitLabel="Send application" onBack={back} />'} /> },
    ]}
  />;
}
