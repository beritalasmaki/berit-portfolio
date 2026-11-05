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
    contract={["NotificationPanel has four statuses: info, success, warning and error. Toast has success, error and warning.", "Both show an icon and a title, so the status is never carried by colour alone.", "The coloured edge on the panel is 24px wide on the left. On the toast it runs the full width as a timer.", "Both take an onDismiss and then show a close button. Toast also takes a duration in milliseconds."]}
    accessibility={["Error and warning notifications use role=\"alert\"; info and success use role=\"status\", so a screen reader announces them without moving focus.", "The close button is a 44px icon button with the label \"Close\".", "A toast pauses its timer while it is hovered or focused so it can be read.", "The timer bar is decorative: with reduced motion on it does not animate, and the toast still goes away on time."]}
    examples={[
      { title: "Notification panel", description: "Four statuses. Try the close button.", content: <CodeTabs view={<NotificationPanelDemo />} cssCode={".notification {\n  border-left: 24px solid var(--color-status-info-default);\n  background: var(--color-status-info-subtle);\n  border-radius: 16px;\n}"} javascriptCode={"<NotificationPanel status=\"error\" title=\"We could not send your application\" onDismiss={dismiss}>\n  Check the fields marked below and try again.\n</NotificationPanel>"} /> },
      { title: "Toast", description: "Shows for six seconds, then goes away. Press a button to see one.", content: <CodeTabs view={<ToastDemo />} cssCode={".toast-timer {\n  animation: toast-timer 6s linear forwards;\n}"} javascriptCode={"<Toast status=\"success\" title=\"Saved\" duration={6000} onDismiss={clear}>\n  Your changes are saved.\n</Toast>"} /> },
    ]}
  />;
}
