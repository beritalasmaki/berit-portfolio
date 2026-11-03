import type { ButtonHTMLAttributes } from "react";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/icons/Icon";

type FormActionsProps = {
  /** The first step offers Cancel and Next, a middle step Back and Next, the last step Back and a submit. */
  position: "first" | "middle" | "last";
  cancelLabel?: string;
  backLabel?: string;
  nextLabel?: string;
  /** Says what will happen, for example "Send application". */
  submitLabel?: string;
  onCancel?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onBack?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onNext?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className?: string;
};

/** The buttons at the bottom of a form or step. The primary action is on the right and the icons show direction and meaning. */
export function FormActions({ position, cancelLabel = "Cancel", backLabel = "Back", nextLabel = "Next", submitLabel = "Submit", onCancel, onBack, onNext, className = "" }: FormActionsProps) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 ${className}`}>
      {position === "first" ? (
        <Button variant="secondary" onClick={onCancel} leadingIcon={<Icon name="close" />}>{cancelLabel}</Button>
      ) : (
        <Button variant="secondary" onClick={onBack} leadingIcon={<Icon name="arrow_back" />}>{backLabel}</Button>
      )}
      {position === "last" ? (
        <Button type="submit" trailingIcon={<Icon name="check" />}>{submitLabel}</Button>
      ) : (
        <Button onClick={onNext} trailingIcon={<Icon name="arrow_forward" />}>{nextLabel}</Button>
      )}
    </div>
  );
}
