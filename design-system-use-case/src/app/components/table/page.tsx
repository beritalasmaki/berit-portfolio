import { CodeTabs } from "@/components/documentation/CodeTabs";
import type { Metadata } from "next";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { DataTable } from "@/components/table/DataTable";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Variation } from "@/components/documentation/Variation";
import { Table, TableBody, TableCell, TableColumnHeader, TableHead, TableRow } from "@/components/table/Table";

export const metadata: Metadata = { title: "Table" };

const cssCode = `table {\n  width: 100%;\n  border-collapse: collapse;\n}\nth { text-align: left; }`;

const cellCss = `td {\n  padding: 16px;\n  vertical-align: middle;\n}`;

function FolderIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path d="M1.75 4.25A1.25 1.25 0 0 1 3 3h2.7l1.3 1.5H13a1.25 1.25 0 0 1 1.25 1.25v6A1.25 1.25 0 0 1 13 13H3a1.25 1.25 0 0 1-1.25-1.25v-7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path d="M6.5 3.5H3.25v9.25h9.25V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 3.25h3v3M12.5 3.5 7.75 8.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CellDemo({ label, caption, children }: { label: string; caption: string; children: React.ReactNode }) {
  return (
    <Variation label={label} className="w-full">
      <Table className="w-full">
        <caption className="sr-only">{caption}</caption>
        <TableBody>
          <TableRow>{children}</TableRow>
        </TableBody>
      </Table>
    </Variation>
  );
}

export default function TablePage() {
    return <ComponentPage name="Table" eyebrow="Components / data" description="Table presents dense information with semantic structure, predictable controls, and resilient loading, empty, and responsive states." usage={<p className="m-0">Use a table when people need to compare values across consistent records. Keep filters and actions close to the table, then preserve the table relationship on small screens with intentional overflow.</p>} contract={["Use real table, caption, thead, tbody, th, and td elements.", "Compose low-level Table, TableHead, TableRow, TableColumnHeader, and TableCell parts when markup needs custom behavior.", "Use DataTable as the higher-level pattern for common sorting, filtering, and selection.", "TableCell takes an optional decorative icon, its position, and a subtitle.", "A cell can hold a form control; use the Forms components rather than a bare input.", "Filtering, empty, and loading states are part of the component contract."]} accessibility={["Use scoped column and row headers.", "Keep a visually hidden caption for context.", "Give every selection control an accessible row-specific label.", "Do not replace genuinely tabular data with CSS grid."]} examples={[{ title: "Table structure", description: "The low-level parts preserve native table semantics.", content: <CodeTabs view={<Table><caption className="sr-only">Example table structure</caption><TableHead><TableRow><TableColumnHeader>Project</TableColumnHeader><TableColumnHeader>Owner</TableColumnHeader></TableRow></TableHead><TableBody><TableRow><th scope="row" className="px-4 py-4 font-semibold">Research workspace</th><TableCell>Mika Lee</TableCell></TableRow></TableBody></Table>} cssCode={cssCode} javascriptCode={'<Table><TableHead>...</TableHead><TableBody>...</TableBody></Table>'} /> }, { title: "Table cell", description: "One cell, in the shapes a product actually needs.", content: <CodeTabs view={<div className="grid gap-6 md:grid-cols-2"><CellDemo label="Default" caption="A plain cell"><TableCell>Research workspace</TableCell></CellDemo><CellDemo label="With subtitle" caption="A cell with supporting text"><TableCell subtitle="Updated today">Research workspace</TableCell></CellDemo><CellDemo label="Leading icon" caption="A cell with an icon before the text"><TableCell icon={<FolderIcon />}>Research workspace</TableCell></CellDemo><CellDemo label="Trailing icon" caption="A cell with an icon after the text"><TableCell icon={<ExternalIcon />} iconPosition="trailing">Research workspace</TableCell></CellDemo><CellDemo label="Icon and subtitle" caption="A cell with both an icon and supporting text"><TableCell icon={<FolderIcon />} subtitle="Updated today">Research workspace</TableCell></CellDemo><CellDemo label="With input" caption="A cell holding a text input"><TableCell><Input aria-label="Rename work item" defaultValue="Research workspace" /></TableCell></CellDemo><CellDemo label="With select" caption="A cell holding a select"><TableCell><Select aria-label="Set status" defaultValue="on-track"><option value="on-track">On track</option><option value="at-risk">At risk</option><option value="complete">Complete</option></Select></TableCell></CellDemo></div>} cssCode={cellCss} javascriptCode={'<TableCell icon={<FolderIcon />} subtitle="Updated today">\n  Research workspace\n</TableCell>'} /> }, { title: "DataTable behavior", description: "A higher-level table with filtering, sorting, and row selection.", content: <CodeTabs view={<DataTable />} cssCode={cssCode} javascriptCode={'<DataTable columns={columns} rows={rows} />'} /> }, { title: "Compact responsive table", description: "The same data pattern inside a narrower product surface.", content: <CodeTabs view={<DataTable compact />} cssCode={cssCode} javascriptCode={'<DataTable compact columns={columns} rows={rows} />'} /> }]} />;
}
