/**
 * Site-wide content. Name decided 1 Nov 2026: CAPACITY.
 * Anything with `tbc: true` is a placeholder and must be listed in the handover note.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const SITE = {
  name: "CAPACITY",
  tagline: "The invisible infrastructure exchange",
  description:
    "Turn idle infrastructure into opportunity. Empty return trips and idle space, now bookable. Launching in Nigeria and Kenya.",
  launchMarkets: "Nigeria and Kenya",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Trust and Safety", href: "/trust-and-safety" },
  { label: "FAQ", href: "/faq" },
];

/** Labels and order from the Figma menu drawer (frames "menu home" and siblings). */
export const MENU_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing and fees", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Trust and Safety", href: "/trust-and-safety" },
  { label: "Legal", href: "/legal" },
  { label: "FAQ", href: "/faq" },
];
export const PRIMARY_CTA: NavLink = { label: "Apply to list capacity", href: "/apply" };
export const SECONDARY_CTA: NavLink = { label: "Request early access", href: "/early-access" };

export const FOOTER = {
  pages: [
    { label: "For providers", href: "/providers" },
    { label: "For businesses", href: "/businesses" },
    { label: "Markets", href: "/markets" },
  ] satisfies NavLink[],
  legal: [
    { label: "Privacy notice", href: "/privacy" },
    { label: "Cookie notice", href: "/cookies" },
    { label: "Website terms", href: "/terms" },
  ] satisfies NavLink[],
};

/** Placeholders from Figma. Replace when the company details exist. */
export const COMPANY = {
  legalName: { value: "Company name and registration number: TBC", tbc: true },
  email: { value: "hello@capacity.example", tbc: true },
  phoneNG: { value: "+234 000 000 0000", tbc: true },
  phoneKE: { value: "+254 000 000 000", tbc: true },
} as const;

/** O12: launch routes are not named yet. Do not invent any. */
export const LAUNCH_ROUTES = {
  named: false,
  note: "Starting on selected routes. Route names TBC.",
} as const;