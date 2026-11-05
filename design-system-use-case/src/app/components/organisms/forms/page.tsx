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
    contract={["A multi-step form is built from smaller parts: an introduction that explains what is asked and how long it takes, sections that break a long form into manageable groups, progress that shows where the person is, and the buttons at the bottom. Putting the instructions first lets people prepare before they start.", "The introduction also explains that fields marked with an asterisk are required. The hint for each field sits above it, and the buttons stay in the same place on every step."]}
    accessibility={["Progress is given in words as well as numbers, and the current step is marked for assistive technology. Hints are connected to their fields, and placeholder text is not used for instructions because it disappears when typing.", "The primary action is always in the same position, which helps people who use a keyboard or a screen magnifier to find it without searching."]}
    examples={[
      { title: "A three-step form", description: "The patterns working together. Move through the steps with the buttons.", content: <CodeTabs view={<FormPatternDemo />} cssCode={".step { border-radius: 9999px; min-width: 44px; min-height: 44px; }"} javascriptCode={"<FormIntro title=\"Apply for a place\">...</FormIntro>\n<FormProgress steps={steps} current={step} />\n<FormSection title=\"Your details\">...</FormSection>\n<FormActions position=\"first\" onNext={next} />"} /> },
    ]}
  />;
}
