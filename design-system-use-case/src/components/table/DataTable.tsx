"use client";

import { useId, useMemo, useState } from "react";
import { IconButton } from "@/components/buttons/IconButton";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Icon, type IconName } from "@/components/icons/Icon";
import { Table, TableBody, TableCell, TableColumnHeader, TableHead, TableRow } from "@/components/table/Table";

type Status = "On track" | "At risk" | "Blocked" | "Complete";
type WorkItem = { id: string; name: string; project: string; owner: string; status: Status; priority: "High" | "Medium" | "Low"; due: string; updated: string };

const initialRows: WorkItem[] = [
  { id: "DS-108", name: "Research workspace", project: "Customer portal", owner: "Mika Lee", status: "On track", priority: "High", due: "18 Sep", updated: "Today" },
  { id: "DS-107", name: "Approval flow", project: "Customer portal", owner: "Aino Salmi", status: "At risk", priority: "High", due: "15 Sep", updated: "Yesterday" },
  { id: "DS-106", name: "Data import", project: "Reporting", owner: "Oskar Niemi", status: "Complete", priority: "Medium", due: "12 Sep", updated: "12 Sep" },
  { id: "DS-105", name: "Permission model", project: "Customer portal", owner: "Mika Lee", status: "On track", priority: "Medium", due: "22 Sep", updated: "10 Sep" },
  { id: "DS-104", name: "Billing export", project: "Finance tools", owner: "Sofia Heikkinen", status: "Blocked", priority: "High", due: "16 Sep", updated: "9 Sep" },
  { id: "DS-103", name: "Notification settings", project: "Mobile app", owner: "Aino Salmi", status: "On track", priority: "Low", due: "30 Sep", updated: "8 Sep" },
  { id: "DS-102", name: "Onboarding checklist", project: "Mobile app", owner: "Oskar Niemi", status: "At risk", priority: "Medium", due: "19 Sep", updated: "5 Sep" },
  { id: "DS-101", name: "Audit log", project: "Reporting", owner: "Sofia Heikkinen", status: "Complete", priority: "Low", due: "2 Sep", updated: "2 Sep" },
];

const statusStyle: Record<Status, { icon: IconName; chip: string }> = {
  "On track": { icon: "check_circle", chip: "bg-[var(--preview-notice-surface-success,var(--color-status-success-subtle))] text-[var(--preview-notice-icon-success,var(--color-status-success-strong))]" },
  "At risk": { icon: "warning", chip: "bg-[var(--preview-notice-surface-warning,var(--color-status-warning-subtle))] text-[var(--preview-notice-icon-warning,var(--color-status-warning-strong))]" },
  Blocked: { icon: "error", chip: "bg-[var(--preview-notice-surface-error,var(--color-status-error-subtle))] text-[var(--preview-notice-icon-error,var(--color-status-error-strong))]" },
  Complete: { icon: "check", chip: "bg-[var(--preview-notice-surface-info,var(--color-status-info-subtle))] text-[var(--preview-notice-icon-info,var(--color-status-info-strong))]" },
};

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("");

/**
 * A work-item table with a search field, a status filter, a result count, sorting, row selection,
 * status chips, row actions and paging. The rows are sample data.
 */
export function DataTable({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sortAscending, setSortAscending] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const rows = useMemo(
    () => initialRows
      .filter((row) => (status === "all" || row.status === status) && `${row.name} ${row.owner} ${row.project} ${row.status} ${row.id}`.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => (sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))),
    [query, status, sortAscending],
  );

  function toggleRow(rowId: string) { setSelected((current) => (current.includes(rowId) ? current.filter((item) => item !== rowId) : [...current, rowId])); }
  const columns = compact ? 5 : 7;
  const muted = "text-[var(--preview-content-muted,var(--color-content-muted))]";

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))]">
      <div className="flex flex-wrap items-center gap-3 border-b border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface-raised,var(--color-surface-subtle))] p-4">
        <div className="min-w-[14rem] flex-1">
          <label className="sr-only" htmlFor={`${id}-search`}>Search work items</label>
          <Input
            id={`${id}-search`}
            type="text"
            inputMode="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, owner or project"
            autoComplete="off"
            leadingIcon={<Icon name="search" />}
            trailingIcon={query ? <IconButton label="Clear search" icon={<Icon name="close" />} onClick={() => setQuery("")} /> : undefined}
          />
        </div>
        <div className="w-40">
          <label className="sr-only" htmlFor={`${id}-status`}>Filter by status</label>
          <Select id={`${id}-status`} value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">All statuses</option>
            <option value="On track">On track</option>
            <option value="At risk">At risk</option>
            <option value="Blocked">Blocked</option>
            <option value="Complete">Complete</option>
          </Select>
        </div>
        <p className={`m-0 text-sm ${muted}`} aria-live="polite">{selected.length ? `${selected.length} selected` : `${rows.length} of ${initialRows.length} items`}</p>
      </div>
      <div className="overflow-x-auto">
        <Table className={compact ? "min-w-[560px]" : "min-w-[760px]"}>
          <caption className="sr-only">Work items with owner, status and due date</caption>
          <TableHead>
            <TableRow>
              <TableColumnHeader className="w-12"><span className="sr-only">Select</span></TableColumnHeader>
              <TableColumnHeader sortable sortDirection={sortAscending ? "ascending" : "descending"}>
                <button type="button" onClick={() => setSortAscending((value) => !value)} className="inline-flex items-center gap-1 font-semibold hover:text-[var(--preview-content,var(--color-content-primary))]">Work item <span aria-hidden="true">{sortAscending ? "↑" : "↓"}</span></button>
              </TableColumnHeader>
              {compact ? null : <TableColumnHeader>Project</TableColumnHeader>}
              <TableColumnHeader>Owner</TableColumnHeader>
              <TableColumnHeader>Status</TableColumnHeader>
                            {compact ? null : <TableColumnHeader>Due</TableColumnHeader>}
              <TableColumnHeader className="w-14"><span className="sr-only">Actions</span></TableColumnHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? rows.map((row) => (
              <TableRow key={row.id} selected={selected.includes(row.id)}>
                <TableCell><input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)} aria-label={`Select ${row.name}`} className="h-4 w-4 accent-[var(--preview-accent,var(--color-action-accent-dark))]" /></TableCell>
                <th scope="row" className="px-4 py-3 text-left font-semibold"><span className="block">{row.name}</span><span className={`font-mono text-xs font-normal ${muted}`}>{row.id}</span></th>
                {compact ? null : <TableCell className={muted}>{row.project}</TableCell>}
                <TableCell><span className="flex items-center gap-2"><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--preview-notice-surface-info,var(--color-status-info-subtle))] text-[11px] font-bold text-[var(--preview-notice-icon-info,var(--color-status-info-strong))]">{initials(row.owner)}</span><span className={compact ? "sr-only" : "whitespace-nowrap"}>{row.owner}</span></span></TableCell>
                <TableCell><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[row.status].chip}`}><Icon name={statusStyle[row.status].icon} className="h-3.5 w-3.5" />{row.status}</span></TableCell>
                                {compact ? null : <TableCell className={`whitespace-nowrap ${muted}`}>{row.due}</TableCell>}
                <TableCell className="py-1"><IconButton label={`More actions for ${row.name}`} icon={<Icon name="more" />} /></TableCell>
              </TableRow>
            )) : (
              <TableRow><TableCell colSpan={columns} className={`py-14 text-center ${muted}`}>No work items match these filters. Try a different search or choose all statuses.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--preview-border,var(--color-border-default))] px-4 py-2">
        <p className={`m-0 text-sm ${muted}`}>Showing {rows.length ? `1–${rows.length}` : "0"} of 24 items</p>
        <div className="flex items-center gap-1">
          <IconButton label="Previous page" icon={<Icon name="chevron_left" />} disabled />
          <span className="px-2 text-sm font-semibold">Page 1 of 3</span>
          <IconButton label="Next page" icon={<Icon name="chevron_right" />} />
        </div>
      </div>
    </div>
  );
}
