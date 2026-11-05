import type { ReactNode } from "react";

type DeviceMockupProps = {
  children: ReactNode;
  label: string;
  mode?: "desktop" | "mobile";
  /** The address shown in the browser bar of the desktop frame. */
  url?: string;
};

export function DeviceMockup({ children, label, mode = "desktop", url = "app.dsbyberit.example" }: DeviceMockupProps) {
  const isMobile = mode === "mobile";
  return (
    <figure className={isMobile ? "w-full max-w-[390px]" : "w-full"}>
      <figcaption className="mb-3 flex items-center gap-3 text-xs font-semibold text-[var(--color-content-muted)]">
        <span className="font-mono uppercase tracking-[0.08em]">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-[var(--color-border-default)]" />
      </figcaption>
      <div className={`overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-surface-canvas)] shadow-[var(--shadow-panel)] ${isMobile ? "rounded-[24px] p-2" : "rounded-2xl"}`}>
        <div className={isMobile ? "overflow-hidden rounded-[18px] border border-[var(--color-border-default)]" : "overflow-hidden rounded-xl"}>
          {!isMobile ? <div className="flex items-center gap-2 border-b border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[var(--color-status-error-default)]" /><span className="h-2.5 w-2.5 rounded-full bg-[var(--color-status-warning-default)]" /><span className="h-2.5 w-2.5 rounded-full bg-[var(--color-status-success-default)]" /><span className="ml-3 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-canvas)] px-3 py-0.5 font-mono text-[10px] text-[var(--color-content-muted)]">{url}</span></div> : <div className="flex items-center justify-center border-b border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-4 py-2"><span className="font-mono text-[10px] text-[var(--color-content-muted)]">{url}</span></div>}
          <div className={isMobile ? "max-h-[720px] overflow-y-auto p-4" : "p-0"}>{children}</div>
        </div>
      </div>
    </figure>
  );
}
