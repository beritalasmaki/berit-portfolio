import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { NotificationPanelDemo, ToastDemo } from "@/components/documentation/NotificationDemo";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsPage() {
  return <ComponentPage
    name="Notifications"
    eyebrow="Components / molecules"
    description="Notifications tell people what happened. A panel stays in the page until it is dealt with, and a toast appears briefly and goes away."
    usage={<p className="m-0">Use a panel for messages people must not miss, such as a form error summary, and a toast for short confirmations that need no action. Pair an error toast with an error panel in the page, because a toast can disappear before it is read.</p>}
    contract={["A notification panel stays in the page until the problem is dealt with, and a toast appears briefly and goes away by itself. The panel has four statuses, info, success, warning and error, and the toast has three, success, error and warning. Each shows an icon and a title so that the status is understood without relying on colour.", "Both can show a close button when it makes sense to dismiss them. A toast also takes a duration and stops counting down while it is hovered or focused. An error toast should be paired with an error panel in the page, because a toast can disappear before it is read."]}
    accessibility={["Errors and warnings are announced to assistive technology as alerts, and information and success messages are announced politely as status updates, so that people using a screen reader hear them without their focus being moved. The close button is a 44px icon button with a clear label.", "The timer on a toast is decorative: when reduced motion is turned on it does not animate, and the toast still goes away on time. A toast never takes focus, and a message that people must act on should be shown in a panel instead."]}
    examples={[
      { title: "Notification panel", description: "Four statuses. Try the close button.", content: <CodeTabs view={<NotificationPanelDemo />} cssCode={".notification {\n  border-left: 24px solid var(--color-status-info-default);\n  background: var(--color-status-info-subtle);\n  border-radius: 16px;\n}"} javascriptCode={"<NotificationPanel status=\"error\" title=\"We could not send your application\" onDismiss={dismiss}>\n  Check the fields marked below and try again.\n</NotificationPanel>"} /> },
      { title: "Toast", description: "Shows for six seconds, then goes away. Press a button to see one.", content: <CodeTabs view={<ToastDemo />} cssCode={".toast-timer {\n  animation: toast-timer 6s linear forwards;\n}"} javascriptCode={"<Toast status=\"success\" title=\"Saved\" duration={6000} onDismiss={clear}>\n  Your changes are saved.\n</Toast>"} /> },
    ]}
  />;
}
