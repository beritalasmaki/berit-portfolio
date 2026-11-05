import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { FormPatternDemo } from "@/components/documentation/FormPatternDemo";

export const metadata: Metadata = { title: "Multi-step form" };

export default function MultiStepFormPage() {
  return <ComponentPage
    name="Multi-step form"
    eyebrow="Components / organisms"
    description="A complete form built from smaller parts: an introduction, sections of fields, progress through the steps and the buttons at the bottom."
    usage={<p className="m-0">Put FormIntro first so people know what is asked before they start. Break long forms into FormSections and, when there are several steps, show FormProgress and use FormActions for the buttons.</p>}
    contract={["FormIntro states what the form is for, how long it takes, and that * marked fields are required.", "FormSection groups related fields under a heading so a long form is read in chunks.", "FormProgress shows numbered steps with a status under each, and Step X of Y as text.", "FormActions puts Cancel and Next on the first step, Back and Next in the middle, and Back and a submit button on the last, with arrows and a cancel icon."]}
    accessibility={["Progress is also given as text, so it does not depend on colour or the circles.", "The current step is marked with aria-current=\"step\".", "Hints sit above the field and are linked with aria-describedby; placeholder text is not used for instructions.", "The primary action is always on the right, in the same place on every step."]}
    examples={[
      { title: "A three-step form", description: "The patterns working together. Move through the steps with the buttons.", content: <CodeTabs view={<FormPatternDemo />} cssCode={".step { border-radius: 9999px; min-width: 44px; min-height: 44px; }"} javascriptCode={"<FormIntro title=\"Apply for a place\">...</FormIntro>\n<FormProgress steps={steps} current={step} />\n<FormSection title=\"Your details\">...</FormSection>\n<FormActions position=\"first\" onNext={next} />"} /> },
    ]}
  />;
}
