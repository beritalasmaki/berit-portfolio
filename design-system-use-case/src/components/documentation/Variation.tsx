import type { ReactNode } from "react";

type VariationProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export function Variation({ label, children, className = "" }: VariationProps) {
  return (
    <div className={`flex min-w-0 flex-col items-start gap-2 ${className}`}>
      <span className="variation-label">{label}</span>
      {children}
    </div>
  );
}
