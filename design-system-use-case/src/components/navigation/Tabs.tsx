"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type TabItem = { id: string; label: string; content: ReactNode };

type TabsProps = {
  items: TabItem[];
  label: string;
};

export function Tabs({ items, label }: TabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));

  function moveFocus(index: number) {
    const nextIndex = (index + items.length) % items.length;
    setActiveId(items[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveFocus(items.length - 1);
    }
  }

  const activeItem = items[activeIndex];

  return <div><div role="tablist" aria-label={label} className="flex flex-wrap gap-1 border-b border-[var(--preview-border,var(--color-border-default))]">{items.map((item, index) => { const selected = item.id === activeId; const tabId = `${baseId}-tab-${item.id}`; const panelId = `${baseId}-panel-${item.id}`; return <button key={item.id} ref={(element) => { tabRefs.current[index] = element; }} id={tabId} type="button" role="tab" aria-selected={selected} aria-controls={panelId} tabIndex={selected ? 0 : -1} onClick={() => setActiveId(item.id)} onKeyDown={(event) => handleKeyDown(event, index)} className={`rounded-t-lg border-b-2 px-4 py-3 text-sm font-semibold transition ${selected ? "border-[var(--color-action-accent)] text-[var(--preview-content,var(--color-content-primary))]" : "border-transparent text-[var(--preview-content-muted,var(--color-content-muted))] hover:border-[var(--preview-border,var(--color-border-strong))] hover:bg-[var(--preview-surface-raised,var(--color-surface-subtle))] hover:text-[var(--preview-content,var(--color-content-primary))]"}`}>{item.label}</button>; })}</div><div id={`${baseId}-panel-${activeItem?.id}`} role="tabpanel" aria-labelledby={`${baseId}-tab-${activeItem?.id}`} tabIndex={0} className="pt-5">{activeItem?.content}</div></div>;
}
