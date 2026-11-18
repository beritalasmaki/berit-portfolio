import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Button } from "@berit/ds";
import { SideNavigation } from "@berit/ds/next";
import { TopNavigation } from "@berit/ds/next";

export const metadata: Metadata = { title: "Navigation" };

const cssCode = `.navigation {
  border: 1px solid var(--color-border-glass);
  border-radius: 20px;
  background: var(--color-surface-glass);
  backdrop-filter: var(--blur-glass);
}

.navigation-item {
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 999px;
  font: 600 15px Manrope, sans-serif;
}

.navigation-item:hover,
.navigation-item[aria-current="page"] {
  border-color: var(--color-border-glass);
  background: var(--color-surface-glass-highlight);
}

.navigation-item[aria-current="page"] {
  color: var(--color-action-accent-dark);
  font-weight: 700;
}

.navigation-item[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}`;

export default function NavigationPage() {
  return <ComponentPage
    name="Navigation"
    eyebrow="Components / organisms"
    description="Navigation shows people where they are in a product and how to move around it."
    usage={<p className="m-0">Use top navigation for product-level movement and side navigation for a focused workspace. TopNavigation and SideNavigation are both built from NavigationLink, and tabs and breadcrumbs can be added inside a page when people need context within a deeper task.</p>}
    contract={["Navigation shows people where they are in a product and how to move around it. Top navigation is used for movement between the main areas of a product, and side navigation is used for movement inside one area. Both are built from the navigation link molecule, so they show the same default, active and disabled statuses. Links are round, and the current page and the link being pointed at sit on a frosted pill.", "Each navigation is wrapped in its own landmark with a distinct label, so that assistive technology can list them and tell them apart."]}
    accessibility={["Navigation uses the native navigation landmark and each one has a clear, different label. The current page is shown in bold, orange-toned text on a frosted pill and is marked for assistive technology, so it is never shown by colour alone.", "Menus that open and close return focus to the control that opened them when they are closed with Escape, so keyboard users never lose their place."]}
    examples={[
      {
        title: "Top navigation",
        description: "Product-level movement with brand context and primary destinations.",
        content: <CodeTabs
          view={<TopNavigation brand={<Link href="#home" className="flex items-center gap-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-action-accent)] font-mono text-xs text-[var(--color-content-primary)]">DS</span>DS by Berit</Link>} items={[{ href: "#work", label: "Work", current: true }, { href: "#foundations", label: "Foundations" }, { href: "#components", label: "Components" }, { href: "#contact", label: "Contact", disabled: true }]} action={<Button>Get in touch</Button>} />}
          cssCode={cssCode}
          javascriptCode={'<TopNavigation\n  brand={<Link href="/">DS by Berit</Link>}\n  items={[\n    { href: "/work", label: "Work", current: true },\n    { href: "/foundations", label: "Foundations" },\n  ]}\n  action={<Button>Get in touch</Button>}\n/>'}
        />,
      },
      {
        title: "Side navigation",
        description: "Workspace-level movement that keeps the current section visible.",
        content: <CodeTabs
          view={<SideNavigation className="max-w-xs" heading="Workspace" items={[{ href: "#overview", label: "Overview", current: true }, { href: "#activity", label: "Activity" }, { href: "#settings", label: "Settings" }, { href: "#billing", label: "Billing", disabled: true }]} />}
          cssCode={cssCode}
          javascriptCode={'<SideNavigation\n  heading="Workspace"\n  items={[\n    { href: "/overview", label: "Overview", current: true },\n    { href: "/activity", label: "Activity" },\n  ]}\n/>'}
        />,
      },
    ]}
  />;
}
