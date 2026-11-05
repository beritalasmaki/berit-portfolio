import type { NextConfig } from "next";

// The component pages moved into Atomic Design groups. The old addresses still work.
const moved: Record<string, string> = {
  buttons: "atoms/buttons",
  forms: "atoms/form-controls",
  navigation: "organisms/navigation",
  cards: "organisms/cards",
  table: "organisms/table",
  "form-patterns": "organisms/forms",
  "date-picker": "molecules/date-picker",
  notifications: "molecules/notifications",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(moved).map(([from, to]) => ({ source: `/components/${from}`, destination: `/components/${to}`, permanent: true }));
  },
};

export default nextConfig;
