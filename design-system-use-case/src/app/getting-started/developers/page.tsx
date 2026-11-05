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
        { id: "install", title: "Install and run the project", children: <><p>Clone the repository, install the dependencies and start the development server. The documentation then opens at <code>http://localhost:3000</code>, where you can look at every component and value in the browser.</p><CodeBlock>{installCode}</CodeBlock></> },
        { id: "components", title: "Use a component", children: <><p>Import the component from its folder. The project uses <code>@/*</code> as a short way to write <code>src/*</code>. Each component has a documentation page that shows its states, its code and how it should be used with assistive technology, and the <Link href="/components">component overview</Link> is the best place to start.</p><CodeBlock>{importCode}</CodeBlock></> },
        { id: "tokens", title: "Use named colours, not raw values", children: <><p>Style components with names that describe what a colour is for, such as <code>--color-content-primary</code> for text, and never write a raw colour code. Then the look of the whole system can change without touching any component, and dark mode works without extra styling. A value that already has a name must not be copied anywhere else.</p><CodeBlock>{tokenCode}</CodeBlock><p>The <Link href="/foundations/colors">Colors page</Link> lists the raw colours and the named roles, together with a note on what each one is for.</p></> },
        { id: "layout", title: "Layout, grid and widths", children: <><p>The grid has 4 columns on a phone, 8 on a tablet and 12 on a desktop. Use <code>layout-container</code> for the page width and the space at the sides, <code>layout-grid</code> for the columns, and the width variables such as <code>max-w-[var(--width-text)]</code> to keep text at a readable line length. The values and the reasons are explained in <Link href="/foundations/layout">Layout &amp; grid</Link>.</p><CodeBlock>{layoutCode}</CodeBlock></> },
        { id: "accessibility", title: "Keep it accessible", children: <p>Use a real button for an action and a real link for going to another page, because browsers and screen readers understand them without extra work. Everything must work with a keyboard, in a logical order, with a visible focus outline. Tables use proper table markup, a status is never shown by colour alone, and every button and link is at least 44px so it is easy to hit.</p> },
        { id: "in-step", title: "Keep the code and Figma in step", children: <p>The values are kept in two places that are updated by hand. <code>src/data/tokens.ts</code> describes them for the documentation, and <code>src/app/globals.css</code> holds the values that the components actually use. When a value changes, it must be changed in both places and the matching Figma variable must be checked. Changes are always made in Figma first, so the Figma file stays the most current description of the system.</p> },
        { id: "new-component", title: "Add a component", children: <p>A new component goes in <code>src/components</code>, in a folder named after the type of component, and it is styled with the named colours and with existing components. It also needs its own documentation page under <code>src/app/components</code>, built with the <code>ComponentPage</code> template, at the right level: atom, molecule, organism or template. Finish by adding a short note in plain words to the version history.</p> },
      ]}
    />
  );
}
