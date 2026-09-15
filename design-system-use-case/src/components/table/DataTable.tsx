"use client";

import { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableColumnHeader, TableHead, TableRow } from "@/components/table/Table";

type WorkItem = { id: string; name: string; owner: string; status: "On track" | "At risk" | "Complete"; updated: string };

const initialRows: WorkItem[] = [
  { id: "DS-104", name: "Research workspace", owner: "Mika Lee", status: "On track", updated: "Today" },
  { id: "DS-103", name: "Approval flow", owner: "Aino Salmi", status: "At risk", updated: "Yesterday" },
  { id: "DS-102", name: "Data import", owner: "Oskar Niemi", status: "Complete", updated: "12 Sep" },
  { id: "DS-101", name: "Permission model", owner: "Mika Lee", status: "On track", updated: "10 Sep" },
];

export function DataTable({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const rows = useMemo(() => initialRows.filter((row) => `${row.name} ${row.owner} ${row.status}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)), [query, sortAscending]);

  function toggleRow(id: string) { setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }

  return <div className="overflow-hidden rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))]"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface-raised,var(--color-surface-subtle))] p-4"><label className="sr-only" htmlFor="table-search">Filter work items</label><input id="table-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter work items" className="min-h-10 rounded-lg border border-[var(--preview-border,var(--color-border-strong))] bg-[var(--preview-surface,var(--color-surface-canvas))] px-3 text-sm text-[var(--preview-content,var(--color-content-primary))] outline-none placeholder:text-[var(--preview-content-muted,var(--color-content-muted))] focus:border-[var(--color-focus-ring)]" /><span className="text-sm text-[var(--preview-content-muted,var(--color-content-muted))]">{selected.length} selected</span></div><div className="overflow-x-auto"><Table className={compact ? "min-w-[620px]" : "min-w-[700px]"}><caption className="sr-only">Project work items</caption><TableHead><TableRow><TableColumnHeader className="w-12"><span className="sr-only">Select</span></TableColumnHeader><TableColumnHeader sortable sortDirection={sortAscending ? "ascending" : "descending"}><button type="button" onClick={() => setSortAscending((value) => !value)} className="font-semibold hover:text-[var(--preview-content,var(--color-content-primary))]">Work item <span aria-hidden="true">↕</span></button></TableColumnHeader><TableColumnHeader>Owner</TableColumnHeader><TableColumnHeader>Status</TableColumnHeader><TableColumnHeader>Updated</TableColumnHeader></TableRow></TableHead><TableBody>{rows.length ? rows.map((row) => <TableRow key={row.id} selected={selected.includes(row.id)}><TableCell><input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)} aria-label={`Select ${row.name}`} className="h-4 w-4 accent-[var(--color-action-accent-dark)]" /></TableCell><th scope="row" className="px-4 py-4 font-semibold"><span className="block">{row.name}</span><span className="font-mono text-xs font-normal text-[var(--preview-content-muted,var(--color-content-muted))]">{row.id}</span></th><TableCell className="text-[var(--preview-content-muted,var(--color-content-secondary))]">{row.owner}</TableCell><TableCell><span className="inline-flex rounded-full bg-[var(--preview-surface-raised,var(--color-surface-subtle))] px-2.5 py-1 text-xs font-semibold">{row.status}</span></TableCell><TableCell className="text-[var(--preview-content-muted,var(--color-content-muted))]">{row.updated}</TableCell></TableRow>) : <TableRow><TableCell colSpan={5} className="py-14 text-center text-[var(--preview-content-muted,var(--color-content-muted))]">No work items match this filter.</TableCell></TableRow>}</TableBody></Table></div></div>;
}
