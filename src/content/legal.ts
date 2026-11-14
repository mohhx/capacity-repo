// Legal page copy, from the Figma desktop and phone frames.
// The three live rows come from the footer's Legal links, so labels and addresses always match.
import { FOOTER } from "@/content/site";

export const LEGAL = {
  hero: {
    eyebrow: "Legal",
    title: "Legal and",
    accent: "privacy.",
    lead: "The rules for using this site, in plain view.",
  },
  live: FOOTER.legal.map((link) => ({ label: link.label, href: link.href })),
  later: ["Marketplace terms", "Advertising terms", "Dispute policy"],
};

/* ------------------------------------------------------------------
   Legal documents: Website terms, Privacy notice and Cookie notice.
   Kept separate from the existing Legal landing page configuration.
------------------------------------------------------------------- */

export interface LegalSection {
  id: string;
  title: string;
  text: string;
  withEmail?: boolean;
  /** Text shown straight after the email address, for example a full stop. */
  afterEmail?: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  version: string;
  placeholder: boolean;
  sections: LegalSection[];
}

export const LEGAL_DOCUMENT_UI = {
  back: { label: "Legal", href: "/legal" },
  appliesTo: "Applies to:",
  lastUpdated: "Last updated:",
  version: "Version",
  tocTitle: "On this page",
  placeholderNote: "Placeholder text, final wording from the lawyer",
} as const;

export const TERMS: LegalDocument = {
  title: "Website terms",
  lastUpdated: "date TBC",
  version: "TBC",
  placeholder: true,
  sections: [
    {
      id: "using-this-website",
      title: "Using this website",
      text: "These terms explain how you may use this website.",
    },
    {
      id: "what-we-offer",
      title: "What we offer",
      text: "The details will be added here.",
    },
    {
      id: "contact",
      title: "Contact",
      text: "Questions can be sent to",
      withEmail: true,
    },
  ],
};

// Text is copied from the Figma Privacy frame. It is placeholder text: the final wording comes from the lawyer.
export const PRIVACY: LegalDocument = {
  title: "Privacy notice",
  lastUpdated: "date TBC",
  version: "TBC",
  placeholder: true,
  sections: [
    {
      id: "what-we-collect",
      title: "What we collect",
      text: "When you fill in a form on this website, we receive the details you give us, such as your name, business, phone number and email.",
    },
    {
      id: "how-we-use-it",
      title: "How we use it",
      text: "We use these details to contact you about CAPACITY and to understand which routes and services people need.",
    },
    {
      id: "your-choices",
      title: "Your choices",
      text: "You can ask what we hold about you and ask us to correct or delete it. Write to",
      withEmail: true,
      afterEmail: ".",
    },
  ],
};
