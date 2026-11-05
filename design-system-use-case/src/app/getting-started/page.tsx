import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Get started" };

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit";

const installCode = `git clone <repository-url>
cd design-system-use-case
npm install
npm run dev`;
const importCode = `import { Button } from "@/components/buttons/Button";
import { Card, CardBody } from "@/components/cards/Card";
import { semanticTokens } from "@/data/tokens";

export function ProjectActions() {
  return (
    <Card>
      <CardBody>
        <Button variant="primary">Create project</Button>
      </CardBody>
    </Card>
  );
}`;
const tokenCode = `/* Prefer semantic roles in component styles. */
.component {
  color: var(--color-content-primary);
  background: var(--color-surface-subtle);
  border-color: var(--color-border-default);
}`;

function CodeBlock({ children }: { children: string }) {
  return <pre className="overflow-x-auto rounded-xl bg-[var(--color-surface-inverse)] p-5 text-xs leading-6 text-[#dfe8df]"><code>{children}</code></pre>;
}

export default function GettingStartedPage() {
  return <DocsShell active="Getting started"><div className="max-w-[var(--width-page)]"><p className="eyebrow mb-4">Documentation / getting started</p><h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">How to get started</h1><p className="body-copy mt-5 text-lg">Install the project, learn how the tokens work, and use the components in your own pages.</p><section className="mt-12 space-y-10"><article><div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">01</span><h2 className="m-0 text-2xl font-bold">Install and run locally</h2></div><p className="body-copy mb-5">Clone the repository, install the dependencies, and start the Next.js development server.</p><CodeBlock>{installCode}</CodeBlock><p className="body-copy mt-4 text-sm">The documentation opens at <code className="rounded bg-[var(--color-surface-raised)] px-1.5 py-1 text-xs">http://localhost:3000</code>. Use the component pages to inspect the live examples and their implementation tabs.</p></article><article><div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">02</span><h2 className="m-0 text-2xl font-bold">Use a component in a page</h2></div><p className="body-copy mb-5">Import the component and its inner parts from the source folders. The current project uses the <code className="rounded bg-[var(--color-surface-raised)] px-1.5 py-1 text-xs">@/*</code> alias for <code className="rounded bg-[var(--color-surface-raised)] px-1.5 py-1 text-xs">src/*</code>.</p><CodeBlock>{importCode}</CodeBlock></article><article><div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">03</span><h2 className="m-0 text-2xl font-bold">Use semantic tokens</h2></div><p className="body-copy mb-5">Use semantic tokens in component styles instead of raw colour values. Then the look of the system can change without changing the components.</p><CodeBlock>{tokenCode}</CodeBlock><div className="mt-5 grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-[var(--color-border-default)] p-4"><p className="token-name">content</p><p className="body-copy mt-2 text-sm">Text and icon roles.</p></div><div className="rounded-xl border border-[var(--color-border-default)] p-4"><p className="token-name">surface</p><p className="body-copy mt-2 text-sm">Canvas and grouping roles.</p></div><div className="rounded-xl border border-[var(--color-border-default)] p-4"><p className="token-name">action</p><p className="body-copy mt-2 text-sm">Interactive emphasis roles.</p></div></div></article><article className="rounded-2xl bg-[var(--color-surface-subtle)] p-6"><div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">04</span><h2 className="m-0 text-2xl font-bold">Keep the accessibility contract</h2></div><ul className="space-y-3 text-sm text-[var(--color-content-secondary)]"><li>Use native buttons for actions and links for navigation.</li><li>Keep visible focus states and test the keyboard path.</li><li>Use semantic table markup for genuinely tabular data.</li><li>Do not communicate state with color alone.</li></ul></article><article><div className="mb-4 flex items-baseline gap-4"><span className="eyebrow">05</span><h2 className="m-0 text-2xl font-bold">Design with the Figma UI kit</h2></div><p className="body-copy mb-5">The design system is connected to a Figma file with the UI kit, the components and the tokens. The variables there are named like the tokens in this project (for example <code className="rounded bg-[var(--color-surface-raised)] px-1.5 py-1 text-xs">color/content/primary</code>), and every component has a Light and a Dark theme. Changes are designed in Figma first. The tokens and components in code are then updated by hand to match.</p><a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-3 text-sm font-semibold">Open the Figma UI kit <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a></article></section><div className="mt-12 flex flex-wrap gap-3"><Link href="/foundations" className="rounded-full bg-[var(--color-action-primary)] px-5 py-3 text-sm font-semibold text-white">Read foundations <span aria-hidden="true" className="ml-1">→</span></Link><Link href="/version-history" className="rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold">View version history <span aria-hidden="true" className="ml-1">→</span></Link></div></div></DocsShell>;
}
