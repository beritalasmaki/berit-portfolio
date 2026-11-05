import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { TemplateRegion } from "@/components/documentation/TemplateRegion";
import { FormActions } from "@/components/forms/FormActions";
import { FormProgress } from "@/components/forms/FormProgress";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export const metadata: Metadata = { title: "Form page template" };

export default function FormPageTemplatePage() {
  return <ComponentPage
    name="Form page template"
    eyebrow="Components / templates"
    showPageNav={false}
    description="A page layout for filling in a form: one narrow column with the instructions first, the steps, the fields in sections and the buttons last."
    usage={<p className="m-0">Use it for applications, sign-ups and any task where people enter information step by step. The template keeps one column so the eye moves straight down, and puts the buttons in the same place on every step.</p>}
    contract={["The form page template is a single, narrow column in the middle of the page, with the introduction first, then the progress, the form sections and the buttons last. One column keeps the eye moving straight down, and the buttons stay in the same place on every step.", "The introduction says what is asked, how long it takes and that fields marked with an asterisk are required. The form column uses the form width, and the primary action sits on the right."]}
    accessibility={["The page has one main heading, which is in the form introduction, and the form is a real form element with its sections grouped by headings or fieldsets. Progress is given in words as well as numbered steps.", "Errors appear next to the field they belong to and also in a panel at the top, so people can find them quickly. See the notifications component for how errors and warnings are announced."]}
    examples={[
      {
        title: "Layout",
        description: "Dashed boxes are content that is filled in per form. Navigation, breadcrumb, progress and buttons use the system's own components.",
        content: <CodeTabs
          view={<div className="w-full overflow-hidden rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] text-[var(--preview-content,var(--color-content-primary))]">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--preview-border,var(--color-border-default))] p-4">
              <Link href="#top" className="font-bold">DS by Berit</Link>
              <nav aria-label="Top navigation" className="flex flex-wrap gap-1"><NavigationLink href="#work">Work</NavigationLink><NavigationLink href="#applications" aria-current="page">Applications</NavigationLink><NavigationLink href="#help">Help</NavigationLink></nav>
            </header>
            <main className="mx-auto grid max-w-[var(--width-form)] gap-6 p-6">
              <Breadcrumb items={[{ label: "Applications", href: "#applications" }, { label: "New application" }]} />
              <TemplateRegion label="Form introduction" hint="Title, what is asked, how long it takes, * marked fields are required" className="min-h-24" />
              <FormProgress steps={["Your details", "Contact", "Review"]} current={1} />
              <TemplateRegion label="Form section" hint="A heading and the fields for this step" className="min-h-40" />
              <TemplateRegion label="Form section" hint="Optional second group of fields" className="min-h-32" />
              <FormActions position="first" />
            </main>
          </div>}
          cssCode={".form-page {\n  max-width: 40rem;\n  margin-inline: auto;\n  display: grid;\n  gap: 24px;\n}"}
          javascriptCode={'<main className="mx-auto grid max-w-[var(--width-form)] gap-6">\n  <Breadcrumb items={items} />\n  <FormIntro title="Apply for a place">...</FormIntro>\n  <FormProgress steps={steps} current={1} />\n  <FormSection title="Your details">...</FormSection>\n  <FormActions position="first" onNext={next} />\n</main>'}
        />,
      },
    ]}
  />;
}
