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
