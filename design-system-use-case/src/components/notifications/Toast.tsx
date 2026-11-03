"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Icon, type IconName } from "@/components/icons/Icon";

export type ToastStatus = "success" | "error" | "warning";

type ToastProps = {
  status: ToastStatus;
  title: string;
  children?: ReactNode;
  /** Called when the toast is dismissed with the close button or when its time runs out. */
  onDismiss?: () => void;
  /** Milliseconds before it dismisses itself. Use 0 for a toast that stays, as in documentation examples. */
  duration?: number;
  className?: string;
};

const icons: Record<ToastStatus, IconName> = { success: "check_circle", error: "error", warning: "warning" };
const iconColor: Record<ToastStatus, string> = {
  success: "text-[var(--preview-notice-icon-success,var(--color-status-success-strong))]",
  error: "text-[var(--preview-notice-icon-error,var(--color-status-error-strong))]",
  warning: "text-[var(--preview-notice-icon-warning,var(--color-status-warning-strong))]",
};
const timerColor: Record<ToastStatus, string> = {
  success: "bg-[var(--preview-notice-icon-success,var(--color-status-success-strong))]",
  error: "bg-[var(--preview-notice-icon-error,var(--color-status-error-strong))]",
  warning: "bg-[var(--preview-notice-icon-warning,var(--color-status-warning-strong))]",
};

/**
 * A temporary confirmation of something the person just did. It dismisses itself after `duration`,
 * pauses while the pointer or keyboard focus is on it, and never takes focus. Pair an error toast
 * with a NotificationPanel, because the toast will disappear.
 */
export function Toast({ status, title, children, onDismiss, duration = 5000, className = "" }: ToastProps) {
  const [paused, setPaused] = useState(false);
  const remaining = useRef(duration);
  const startedAt = useRef(0);

  useEffect(() => {
    if (!onDismiss || duration <= 0 || paused) return;
    startedAt.current = Date.now();
    const timer = setTimeout(onDismiss, remaining.current);
    return () => {
      clearTimeout(timer);
      remaining.current -= Date.now() - startedAt.current;
    };
  }, [paused, onDismiss, duration]);

  const timed = Boolean(onDismiss) && duration > 0;
  return (
    <div
      role={status === "success" ? "status" : "alert"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] text-[var(--preview-content,var(--color-content-primary))] shadow-[var(--shadow-m)] ${className}`}
    >
      <div className="flex items-start gap-3 py-1 pl-4 pr-1">
        <Icon name={icons[status]} className={`mt-3 ${iconColor[status]}`} />
        <div className="min-w-0 flex-1 py-3">
          <p className="m-0 text-sm font-semibold">{title}</p>
          {children ? <div className="mt-1 text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]">{children}</div> : null}
        </div>
        {onDismiss ? <IconButton label="Dismiss notification" icon={<Icon name="close" />} onClick={onDismiss} /> : null}
      </div>
      <div aria-hidden="true" className="h-1 w-full">
        <div className={`toast-timer h-full w-full ${timerColor[status]}`} style={{ animationDuration: `${timed ? duration : 0}ms`, animationPlayState: paused ? "paused" : "running", animationName: timed ? undefined : "none" }} />
      </div>
    </div>
  );
}
