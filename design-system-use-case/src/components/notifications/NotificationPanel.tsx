import type { ReactNode } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Icon, type IconName } from "@/components/icons/Icon";

export type NotificationStatus = "info" | "success" | "warning" | "error";

type NotificationPanelProps = {
  status: NotificationStatus;
  /** A short title that says what happened. The icon and title carry the status; colour only reinforces it. */
  title: string;
  /** What to do next. Optional. */
  children?: ReactNode;
  /** When given, shows a close button. Leave it out for a panel that must stay until the problem is fixed. */
  onDismiss?: () => void;
  className?: string;
};

const icons: Record<NotificationStatus, IconName> = { info: "info", success: "check_circle", warning: "warning", error: "error" };

const surface: Record<NotificationStatus, string> = {
  info: "bg-[var(--preview-notice-surface-info,var(--color-status-info-subtle))] border-[var(--preview-notice-border-info,var(--color-status-info-default))]",
  success: "bg-[var(--preview-notice-surface-success,var(--color-status-success-subtle))] border-[var(--preview-notice-border-success,var(--color-status-success-default))]",
  warning: "bg-[var(--preview-notice-surface-warning,var(--color-status-warning-subtle))] border-[var(--preview-notice-border-warning,var(--color-status-warning-default))]",
  error: "bg-[var(--preview-notice-surface-error,var(--color-status-error-subtle))] border-[var(--preview-notice-border-error,var(--color-status-error-default))]",
};

const iconColor: Record<NotificationStatus, string> = {
  info: "text-[var(--preview-notice-icon-info,var(--color-status-info-strong))]",
  success: "text-[var(--preview-notice-icon-success,var(--color-status-success-strong))]",
  warning: "text-[var(--preview-notice-icon-warning,var(--color-status-warning-strong))]",
  error: "text-[var(--preview-notice-icon-error,var(--color-status-error-strong))]",
};

/** A persistent message for a page or form. Error and warning use role="alert", info and success use role="status". */
export function NotificationPanel({ status, title, children, onDismiss, className = "" }: NotificationPanelProps) {
  return (
    <div role={status === "error" || status === "warning" ? "alert" : "status"} className={`flex items-start gap-3 rounded-2xl border border-l-[24px] py-1 pl-6 pr-1 text-[var(--preview-content,var(--color-content-primary))] ${surface[status]} ${className}`}>
      <Icon name={icons[status]} className={`mt-3 ${iconColor[status]}`} />
      <div className="min-w-0 flex-1 py-3">
        <p className="m-0 text-sm font-semibold">{title}</p>
        {children ? <div className="mt-1 text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]">{children}</div> : null}
      </div>
      {onDismiss ? <IconButton label="Dismiss notification" icon={<Icon name="close" />} onClick={onDismiss} /> : null}
    </div>
  );
}
