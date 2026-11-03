"use client";

import { useState } from "react";
import { Field } from "@/components/forms/Field";
import { FormActions } from "@/components/forms/FormActions";
import { FormIntro } from "@/components/forms/FormIntro";
import { FormProgress } from "@/components/forms/FormProgress";
import { FormSection } from "@/components/forms/FormSection";
import { Input } from "@/components/forms/Input";

const steps = ["Your details", "Contact", "Review"];

/** Documentation only: a three-step form that uses every form pattern together. */
export function FormPatternDemo() {
  const [step, setStep] = useState(1);
  const position = step === 1 ? "first" : step === steps.length ? "last" : "middle";
  return (
    <form className="grid w-full max-w-xl gap-6" onSubmit={(event) => event.preventDefault()}>
      <FormIntro title="Apply for a place">Answering takes about three minutes. You can go back to change an answer before you send.</FormIntro>
      <FormProgress steps={steps} current={step} />
      <FormSection title={steps[step - 1]} description={`Step ${step} of ${steps.length}`}>
        {step === 1 ? <Field id="demo-full-name" label="Full name" hint="As it appears on your passport" required><Input id="demo-full-name" required aria-describedby="demo-full-name-hint" /></Field> : null}
        {step === 2 ? <Field id="demo-contact-email" label="Email" hint="We send the confirmation here" required><Input id="demo-contact-email" type="email" required aria-describedby="demo-contact-email-hint" /></Field> : null}
        {step === 3 ? <p className="m-0 text-sm">Check your answers, then send your application.</p> : null}
      </FormSection>
      <FormActions position={position} submitLabel="Send application" onBack={() => setStep((current) => current - 1)} onNext={() => setStep((current) => current + 1)} onCancel={() => setStep(1)} />
    </form>
  );
}
