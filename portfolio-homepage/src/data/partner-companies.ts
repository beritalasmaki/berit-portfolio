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
  /** Symbol-only mark (16–20px), rendered before the name, alt="". */
  mark?: { src: string; width: number; height: number };
};

export const partnerCompanies: Record<string, PartnerCompany> = {
  empact: {
    name: "Empact",
    // TODO: add a symbol-only mark (the gradient circle) as
    // `/empact/empact-mark.svg` and set `mark` here. The only asset we have,
    // /empact/empact-logo.png, is the full wordmark, and the design says not
    // to use the wordmark here, so the card shows the name as text for now.
  },
};
