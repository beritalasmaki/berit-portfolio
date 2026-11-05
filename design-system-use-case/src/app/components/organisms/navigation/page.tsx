import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export const metadata: Metadata = { title: "Navigation" };

const cssCode = `.navigation-item:hover {
  background: var(--color-surface-raised);
}

.navigation-item[aria-current="page"] {
  background-image: var(--gradient-action-primary);
  color: var(--color-content-inverse);
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
    usage={<p className="m-0">Use top navigation for product-level movement and side navigation for a focused workspace. Both are built from NavigationLink, and tabs and breadcrumbs can be added inside a page when people need context within a deeper task.</p>}
    contract={["Navigation shows people where they are in a product and how to move around it. Top navigation is used for movement between the main areas of a product, and side navigation is used for movement inside one area. Both are built from the navigation link molecule, so they show the same default, active and disabled statuses.", "Each navigation is wrapped in its own landmark with a distinct label, so that assistive technology can list them and tell them apart."]}
    accessibility={["Navigation uses the native navigation landmark and each one has a clear, different label. The current page is shown with a filled background and is marked for assistive technology, so it is never shown by colour alone.", "Menus that open and close return focus to the control that opened them when they are closed with Escape, so keyboard users never lose their place."]}
    examples={[
      {
        title: "Top navigation",
        description: "Product-level movement with brand context and primary destinations.",
        content: <CodeTabs
          view={<header className="rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-4 text-[var(--preview-content,var(--color-content-primary))]"><div className="flex flex-wrap items-center justify-between gap-4"><Link href="#home" className="flex items-center gap-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-action-accent)] font-mono text-xs">DS</span>DS by Berit</Link><nav aria-label="Top navigation" className="flex flex-wrap items-center gap-1"><NavigationLink href="#work" aria-current="page">Work</NavigationLink><NavigationLink href="#foundations">Foundations</NavigationLink><NavigationLink href="#components">Components</NavigationLink><NavigationLink href="#contact" disabled>Contact</NavigationLink></nav></div></header>}
          cssCode={cssCode}
          javascriptCode={'<header><nav aria-label="Top navigation">...</nav></header>'}
        />,
      },
      {
        title: "Side navigation",
        description: "Workspace-level movement that keeps the current section visible.",
        content: <CodeTabs
          view={<aside className="max-w-xs rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-5 text-[var(--preview-content,var(--color-content-primary))]"><p className="eyebrow mb-4">Workspace</p><nav aria-label="Side navigation" className="space-y-1"><NavigationLink href="#overview" aria-current="page">Overview</NavigationLink><NavigationLink href="#activity">Activity</NavigationLink><NavigationLink href="#settings">Settings</NavigationLink><NavigationLink href="#billing" disabled>Billing</NavigationLink></nav></aside>}
          cssCode={cssCode}
          javascriptCode={'<aside><nav aria-label="Side navigation">...</nav></aside>'}
        />,
      },
    ]}
  />;
}
