import type { ReactNode } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Input } from "@/components/forms/Input";
import { Icon, type IconName } from "@/components/icons/Icon";
import { BrandMark } from "@/components/navigation/BrandMark";
import { NavigationLink } from "@/components/navigation/NavigationLink";

const navItems: { label: string; icon: IconName; id: string; disabled?: boolean }[] = [
  { label: "Overview", icon: "bar_chart", id: "overview" },
  { label: "Projects", icon: "folder", id: "projects" },
  { label: "Tasks", icon: "checklist", id: "tasks" },
  { label: "Reports", icon: "trending_up", id: "reports" },
  { label: "Team", icon: "users", id: "team" },
  { label: "Billing", icon: "settings", id: "billing", disabled: true },
];

type AppShellProps = { active: string; mobile?: boolean; searchId: string; children: ReactNode };

function Search({ id }: { id: string }) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={id} className="sr-only">Search the workspace</label>
      <Input id={id} type="text" inputMode="search" autoComplete="off" placeholder="Search projects, tasks or people" aria-describedby={`${id}-hint`} leadingIcon={<Icon name="search" />} />
      <p id={`${id}-hint`} className="m-0 mt-1 text-xs text-[var(--color-content-muted)]">Try a project name, a person or a status such as “At risk”.</p>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="flex items-center gap-1">
      <span className="relative">
        <IconButton label="Notifications, 3 unread" icon={<Icon name="bell" />} />
        <span aria-hidden="true" className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-surface-canvas)] bg-[var(--color-status-error-default)]" />
      </span>
      <span role="img" aria-label="Signed in as Mika Lee" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-inverse)] text-xs font-bold text-white">ML</span>
    </div>
  );
}

/**
 * Documentation only: the frame of a product screen with a side navigation, a top bar with a search field,
 * notifications and the signed-in person. On a phone the side navigation is replaced by a menu button.
 */
export function AppShell({ active, mobile = false, searchId, children }: AppShellProps) {
  if (mobile) {
    return (
      <div className="min-w-0">
        <header className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-2">
          <span className="flex items-center gap-2 font-bold"><BrandMark className="h-7 w-7" />DS by Berit</span>
          <span className="flex items-center gap-1"><IconButton label="Notifications, 3 unread" icon={<Icon name="bell" />} /><IconButton label="Open menu" icon={<Icon name="menu" />} /></span>
        </header>
        <div className="my-4"><Search id={searchId} /></div>
        {children}
      </div>
    );
  }
  return (
    <div className="grid min-w-0 md:grid-cols-[13.5rem_minmax(0,1fr)]">
      <aside className="hidden border-r border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-4 md:flex md:flex-col md:gap-6">
        <span className="flex items-center gap-2 font-bold"><BrandMark className="h-8 w-8" />DS by Berit</span>
        <nav aria-label="Workspace" className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavigationLink key={item.id} href={`#${item.id}`} disabled={item.disabled} aria-current={item.id === active ? "page" : undefined}>
              <span className="flex items-center gap-2"><Icon name={item.icon} className="h-4 w-4" />{item.label}</span>
            </NavigationLink>
          ))}
        </nav>
        <p className="m-0 mt-auto text-xs text-[var(--color-content-muted)]">Workspace: Customer portal<br />Plan: Team</p>
      </aside>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border-default)] px-8 py-3">
          <Search id={searchId} />
          <UserMenu />
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

