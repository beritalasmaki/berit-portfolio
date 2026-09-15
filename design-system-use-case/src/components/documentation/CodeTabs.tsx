"use client";

import { useId, useState, type ReactNode } from "react";

type CodeTabsProps = {
  view: ReactNode;
  cssCode: string;
  javascriptCode: string;
};

const tabs = ["View", "CSS", "JavaScript"] as const;
type Tab = (typeof tabs)[number];

export function CodeTabs({ view, cssCode, javascriptCode }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("View");
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("light");
  const baseId = useId();
  const activeTabId = `${baseId}-${activeTab.toLowerCase()}`;
  const panelId = `${baseId}-panel`;

  const content = activeTab === "View" ? view : <pre className="max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-[#dfe8df]"><code>{activeTab === "CSS" ? cssCode : javascriptCode}</code></pre>;

  return <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white"><div className="flex flex-wrap items-end justify-between border-b border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-2 pt-2"><div role="tablist" aria-label="Component example mode" className="flex">{tabs.map((tab) => { const tabId = `${baseId}-${tab.toLowerCase()}`; return <button key={tab} id={tabId} type="button" role="tab" aria-selected={activeTab === tab} aria-controls={panelId} onClick={() => setActiveTab(tab)} className={`rounded-t-lg px-4 py-2 text-xs font-bold ${activeTab === tab ? "bg-[var(--color-surface-inverse)] text-white" : "text-[var(--color-content-secondary)] hover:text-[var(--color-content-primary)]"}`}>{tab}</button>; })}</div>{activeTab === "View" ? <div role="group" aria-label="Preview theme" className="mb-1 mr-1 flex rounded-lg border border-[var(--color-border-strong)] p-0.5"><button type="button" aria-pressed={previewTheme === "light"} onClick={() => setPreviewTheme("light")} className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${previewTheme === "light" ? "bg-white text-[var(--color-content-primary)] shadow-sm" : "text-[var(--color-content-muted)] hover:text-[var(--color-content-primary)]"}`}>Light</button><button type="button" aria-pressed={previewTheme === "dark"} onClick={() => setPreviewTheme("dark")} className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${previewTheme === "dark" ? "bg-[var(--color-surface-inverse)] text-white" : "text-[var(--color-content-muted)] hover:text-[var(--color-content-primary)]"}`}>Dark</button></div> : null}</div><div id={panelId} role="tabpanel" aria-labelledby={activeTabId} data-preview-theme={previewTheme} className={activeTab === "View" ? "preview-surface min-h-32 p-6 transition-colors" : "min-h-48 bg-[var(--color-surface-inverse)] p-6"}><p className="sr-only">{activeTab} content</p>{content}</div></div>;
}
