// Collaborators: types and the organizations people can belong to.
//
// A group in the dictionaries (`partners.groups`) is one card: one
// organization with its people, or one individual with no organization.
// A person points at an organization by key (`company: "empact"`).

export type PartnerPerson = {
  name: string;
  /** Shown in the subtitle (one person) or the expanded panel (2+). */
  role?: string;
  /** No photo: the card falls back to initials. */
  photo?: string;
  /** No bio and no link on anyone: the card is static (no button). */
  linkedinUrl?: string;
  bio?: string;
};

export type PartnerGroup = {
  /** Key into `partnerCompanies`. Omit for a freelancer / individual. */
  company?: string;
  /** Overrides the generated title. */
  title?: string;
  people: PartnerPerson[];
};

export type PartnerCompany = {
  name: string;
  /** Company site, linked from the expanded card. */
  url?: string;
  /** Full logo, shown beside the "Visit {org}" link in the expanded card. */
  logo?: { src: string; width: number; height: number };
  /** Symbol-only mark (16–20px), rendered before the name, alt="". */
  mark?: { src: string; width: number; height: number };
};

export const partnerCompanies: Record<string, PartnerCompany> = {
  empact: {
    name: "Empact",
    url: "https://empact.fi/",
    logo: { src: "/empact/empact-logo.png", width: 1206, height: 435 },
    // TODO: add a symbol-only mark (the gradient circle) as
    // `/empact/empact-mark.svg` and set `mark` here. `logo` is the full
    // wordmark: fine beside the site link, too wide for the card header, so
    // the header shows the name as text until `mark` exists.
  },
};
