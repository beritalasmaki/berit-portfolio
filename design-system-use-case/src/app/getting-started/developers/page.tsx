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
const tokenCode = `/* Use semantic roles in component styles, not raw values. */
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
      intro={<p className="m-0">How to run the project, use the components and tokens, and keep the code in step with the Figma file.</p>}
      sections={[
        { id: "install", title: "Install and run locally", children: <><p>Clone the repository, install the dependencies and start the Next.js development server. The documentation opens at <code>http://localhost:3000</code>.</p><CodeBlock>{installCode}</CodeBlock></> },
        { id: "components", title: "Use a component in a page", children: <><p>Import the component and its inner parts from the source folders. The project uses the <code>@/*</code> alias for <code>src/*</code>. Every component has a documentation page with its modes, code and accessibility notes: start from the <Link href="/components">component overview</Link>.</p><CodeBlock>{importCode}</CodeBlock></> },
        { id: "tokens", title: "Use semantic tokens", children: <><p>Build component styles from roles such as content, surface and action instead of raw colour values. Then the look of the system can change without changing the components. Never repeat a value that already exists as a variable.</p><CodeBlock>{tokenCode}</CodeBlock><p>The <Link href="/foundations/colors">Colors page</Link> lists the raw values and the roles, with a note on what each is for.</p></> },
        { id: "layout", title: "Layout, grid and widths", children: <><p>The grid has 4 columns on a phone, 8 on a tablet and 12 on a desktop. Use <code>layout-container</code> for the page width and margin, <code>layout-grid</code> for the columns, and the width variables such as <code>max-w-[var(--width-text)]</code> for text. See <Link href="/foundations/layout">Layout &amp; grid</Link>.</p><CodeBlock>{layoutCode}</CodeBlock></> },
        { id: "accessibility", title: "Keep the accessibility contract", children: <ul><li>Use native buttons for actions and links for navigation.</li><li>Keep visible focus states and test the keyboard path.</li><li>Use semantic table markup for tabular data.</li><li>Do not communicate state with colour alone.</li><li>Make every interactive target at least 44px.</li></ul> },
        { id: "in-step", title: "Keep code and Figma in step", children: <><p>Tokens live in two places that are maintained by hand: <code>src/data/tokens.ts</code> documents them and <code>src/app/globals.css</code> holds the CSS variables components use. When you change a value, change both, and check that the Figma variable matches. Changes are designed in Figma first.</p></> },
        { id: "new-component", title: "Add a component", children: <ul><li>Put it in <code>src/components</code>, in a folder named after the component type.</li><li>Build it from semantic tokens and existing components.</li><li>Add a documentation page under <code>src/app/components</code> with the <code>ComponentPage</code> template, at the right Atomic Design level.</li><li>Add a short entry to the version history in plain language.</li></ul> },
      ]}
    />
  );
}
