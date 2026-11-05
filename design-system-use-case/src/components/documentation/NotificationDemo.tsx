"use client";

import { useState } from "react";
import { Button } from "@/components/buttons/Button";
import { NotificationPanel, type NotificationStatus } from "@/components/notifications/NotificationPanel";
import { Toast, type ToastStatus } from "@/components/notifications/Toast";

const panels: { status: NotificationStatus; title: string; text: string }[] = [
  { status: "info", title: "Applications close on Friday", text: "You can save a draft and come back later." },
  { status: "success", title: "Application sent", text: "We emailed you a copy." },
  { status: "warning", title: "Your session ends in 5 minutes", text: "Save your answers to keep them." },
  { status: "error", title: "We could not send your application", text: "Check the fields marked below and try again." },
];

/** Documentation only: panels that can be closed, so the close button can be tried. */
export function NotificationPanelDemo() {
  const [closed, setClosed] = useState<string[]>([]);
  const visible = panels.filter((panel) => !closed.includes(panel.status));
  return (
    <div className="grid w-full max-w-[var(--width-text-narrow)] gap-4">
      {visible.map((panel) => (
        <NotificationPanel key={panel.status} status={panel.status} title={panel.title} onDismiss={() => setClosed((list) => [...list, panel.status])}>{panel.text}</NotificationPanel>
      ))}
      {closed.length > 0 ? <Button variant="secondary" onClick={() => setClosed([])}>Show all panels again</Button> : null}
    </div>
  );
}

const toasts: { status: ToastStatus; title: string; text: string }[] = [
  { status: "success", title: "Saved", text: "Your changes are saved." },
  { status: "error", title: "Could not save", text: "Check your connection and try again." },
  { status: "warning", title: "Almost out of space", text: "You have used 90% of your storage." },
];

/** Documentation only: shows a toast that dismisses itself after a few seconds. */
export function ToastDemo() {
  const [shown, setShown] = useState<ToastStatus | null>(null);
  const toast = toasts.find((item) => item.status === shown);
  return (
    <div className="grid w-full max-w-[var(--width-text-narrow)] gap-4">
      <div className="flex flex-wrap gap-3">
        {toasts.map((item) => <Button key={item.status} variant="secondary" onClick={() => setShown(item.status)}>Show {item.status} toast</Button>)}
      </div>
      <div className="min-h-24">
        {toast ? <Toast key={toast.status + String(shown)} status={toast.status} title={toast.title} duration={6000} onDismiss={() => setShown(null)}>{toast.text}</Toast> : null}
      </div>
    </div>
  );
}
