import type { InputHTMLAttributes } from "react";
import { controlClassName, isInert, Spinner, type FormMode } from "@/components/forms/controlStyles";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  mode?: FormMode;
};

export function Input({ mode = "default", disabled, className = "", ...props }: InputProps) {
  const isLoading = mode === "loading";

  return (
    <span className="relative block w-full">
      <input
        aria-busy={isLoading || undefined}
        disabled={disabled || isInert(mode)}
        className={controlClassName(mode, `${isLoading ? "pr-11" : ""} ${className}`)}
        {...props}
      />
      {isLoading ? <Spinner className="absolute right-3 top-1/2 -translate-y-1/2" /> : null}
    </span>
  );
}
