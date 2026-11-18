import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Button } from "@/components/buttons/Button";
import { NavigationLink } from "@/components/navigation/NavigationLink";

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
    usage={<p className="m-0">Use top navigation for product-level movement and side navigation for a focused workspace. Both are built from NavigationLink, and tabs and breadcrumbs can be added inside a page when people need context within a deeper task.</p>}
    contract={["Navigation shows people where they are in a product and how to move around it. Top navigation is used for movement between the main areas of a product, and side navigation is used for movement inside one area. Both are built from the navigation link molecule, so they show the same default, active and disabled statuses. Links are round, and the current page and the link being pointed at sit on a frosted pill.", "Each navigation is wrapped in its own landmark with a distinct label, so that assistive technology can list them and tell them apart."]}
    accessibility={["Navigation uses the native navigation landmark and each one has a clear, different label. The current page is shown in bold, orange-toned text on a frosted pill and is marked for assistive technology, so it is never shown by colour alone.", "Menus that open and close return focus to the control that opened them when they are closed with Escape, so keyboard users never lose their place."]}
    examples={[
      {
        title: "Top navigation",
        description: "Product-level movement with brand context and primary destinations.",
        content: <CodeTabs
          view={<header className="rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] px-6 py-4 text-[var(--preview-content,var(--color-content-primary))]"><div className="flex flex-wrap items-center justify-between gap-4"><Link href="#home" className="flex items-center gap-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-action-accent)] font-mono text-xs text-[var(--color-content-primary)]">DS</span>DS by Berit</Link><nav aria-label="Top navigation" className="flex flex-wrap items-center gap-2"><NavigationLink href="#work" aria-current="page">Work</NavigationLink><NavigationLink href="#foundations">Foundations</NavigationLink><NavigationLink href="#components">Components</NavigationLink><NavigationLink href="#contact" disabled>Contact</NavigationLink><span aria-hidden="true" className="mx-2 block h-5 w-px bg-[var(--preview-border,var(--color-border-subtle))]" /><Button variant="primary">Get in touch</Button></nav></div></header>}
          cssCode={cssCode}
          javascriptCode={'<header>\n  <nav aria-label="Top navigation">\n    <NavigationLink href="/work" aria-current="page">Work</NavigationLink>\n    <NavigationLink href="/foundations">Foundations</NavigationLink>\n    <Button>Get in touch</Button>\n  </nav>\n</header>'}
        />,
      },
      {
        title: "Side navigation",
        description: "Workspace-level movement that keeps the current section visible.",
        content: <CodeTabs
          view={<aside className="max-w-xs rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] p-6 text-[var(--preview-content,var(--color-content-primary))]"><p className="eyebrow mb-4">Workspace</p><nav aria-label="Side navigation" className="space-y-2"><NavigationLink href="#overview" aria-current="page">Overview</NavigationLink><NavigationLink href="#activity">Activity</NavigationLink><NavigationLink href="#settings">Settings</NavigationLink><NavigationLink href="#billing" disabled>Billing</NavigationLink></nav></aside>}
          cssCode={cssCode}
          javascriptCode={'<aside><nav aria-label="Side navigation">...</nav></aside>'}
        />,
      },
    ]}
  />;
}
