import Link from "next/link";
import type { Metadata } from "next";
import { CodeBlock } from "@/components/documentation/CodeBlock";
import { GuideLayout } from "@/components/documentation/GuideLayout";

export const metadata: Metadata = { title: "For developers" };

const installCode = `git clone <repository-url>
cd design-system-use-case
npm install
npm run dev`;
const importCode = `import { Button } from "@/components/buttons/Button";
import { Card, CardBody } from "@/components/cards/Card";

export function ProjectActions() {
  return (
    <Card>
      <CardBody>
        <Button variant="primary">Create project</Button>
      </CardBody>
    </Card>
  );
}`;
const tokenCode = `/* Use the named colours (roles) in styles, not raw values. */
.component {
  color: var(--color-content-primary);
  background: var(--color-surface-subtle);
  border-color: var(--color-border-default);
}`;
const layoutCode = `<div className="layout-container">
  <div className="layout-grid">
    <main className="col-span-4 md:col-span-8 lg:col-span-8">...</main>
    <aside className="col-span-4 md:col-span-8 lg:col-span-4">...</aside>
  </div>
</div>`;

export default function DevelopersPage() {
  return (
    <GuideLayout
      eyebrow="Getting started / for developers"
      title="For developers"
      intro={<p className="m-0">How to run the project, use the components, colours and grid, and keep the code in step with the Figma file.</p>}
      sections={[
        { id: "install", title: "Install and run the project", children: <><p>Clone the repository, install the dependencies and start the development server. The documentation opens at <code>http://localhost:3000</code>.</p><CodeBlock>{installCode}</CodeBlock></> },
        { id: "components", title: "Use a component", children: <><p>Import the component from its folder. The project uses <code>@/*</code> as a short way to write <code>src/*</code>. Every component has a documentation page with its states, its code and its accessibility notes. Start from the <Link href="/components">component overview</Link>.</p><CodeBlock>{importCode}</CodeBlock></> },
        { id: "tokens", title: "Use named colours, not raw values", children: <><p>Style components with names that say what a colour is for, such as <code>--color-content-primary</code> for text. Do not write a raw colour code. Then the look of the system can change without changing any component. Never copy a value that already has a name.</p><CodeBlock>{tokenCode}</CodeBlock><p>The <Link href="/foundations/colors">Colors page</Link> lists the raw colours and the named roles, with a note on what each one is for.</p></> },
        { id: "layout", title: "Layout, grid and widths", children: <><p>The grid has 4 columns on a phone, 8 on a tablet and 12 on a desktop. Use <code>layout-container</code> for the page width and side space, <code>layout-grid</code> for the columns, and width variables such as <code>max-w-[var(--width-text)]</code> to keep text a readable width. See <Link href="/foundations/layout">Layout &amp; grid</Link>.</p><CodeBlock>{layoutCode}</CodeBlock></> },
        { id: "accessibility", title: "Keep it accessible", children: <ul><li>Use a real button for an action and a real link for going to another page.</li><li>Make sure everything works with a keyboard, and keep the focus outline visible.</li><li>Use proper table markup for tables.</li><li>Never show something with colour alone.</li><li>Make every button and link at least 44px tall and wide.</li></ul> },
        { id: "in-step", title: "Keep the code and Figma in step", children: <p>Values are kept in two places that are updated by hand. <code>src/data/tokens.ts</code> describes them for the documentation, and <code>src/app/globals.css</code> holds the values the components actually use. When you change a value, change it in both places, and check that the Figma variable matches. Changes are made in Figma first.</p> },
        { id: "new-component", title: "Add a component", children: <ul><li>Put it in <code>src/components</code>, in a folder named after the type of component.</li><li>Style it with the named colours and with existing components.</li><li>Add a documentation page under <code>src/app/components</code> with the <code>ComponentPage</code> template, in the right level (atom, molecule, organism or template).</li><li>Add a short note to the version history in plain words.</li></ul> },
      ]}
    />
  );
}
