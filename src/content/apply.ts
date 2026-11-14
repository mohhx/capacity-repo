// Apply page copy, from the Figma desktop frames (default and failed) and the phone frame (failed).
// Items marked DRAFT have no copy in Figma.
import { COUNTRIES } from "@/config/platform";
import type { CountryCode } from "@/config/platform";

const COUNTRY_ORDER: CountryCode[] = ["NG", "KE"];

export const APPLY_COUNTRIES = COUNTRY_ORDER.map((code) => ({ value: code, label: COUNTRIES[code].name }));

export const APPLY_DIAL_CODES: Record<CountryCode, string> = { NG: "+234", KE: "+254" };
export const APPLY_DIAL_OPTIONS = COUNTRY_ORDER.map((code) => ({
  value: APPLY_DIAL_CODES[code],
  label: APPLY_DIAL_CODES[code],
}));

// DRAFT: Figma's placeholder says "Truck, van, refrigerated, other" and the error frame shows "Refrigerated truck".
export const APPLY_OFFERS = [
  { value: "truck", label: "Truck" },
  { value: "van", label: "Van" },
  { value: "refrigerated", label: "Refrigerated truck" },
  { value: "other", label: "Other" },
] as const;

export const APPLY = {
  hero: {
    back: { label: "← Back to home", href: "/" },
    title: "Apply to list capacity",
    lead: "Tell us about your business and routes. We will review your details and contact you.",
  },
  next: {
    title: "What happens next",
    steps: ["We review your details.", "We contact you about next steps.", "You list capacity once approved."],
    footnote: "We use your details only to contact you about CAPACITY.",
    privacy: { label: "Privacy notice", href: "/privacy" },
  },
  form: {
    title: "Apply to list capacity",
    fields: {
      // error copy is DRAFT: Figma only shows the "could not send" state
      name: { label: "Full name", placeholder: "Your name", error: "Enter your name" },
      business: { label: "Business name", placeholder: "Registered business", error: "Enter your business name" },
      phone: { label: "Phone", placeholder: "801 234 5678", error: "Enter a valid phone number" },
      email: { label: "Email", placeholder: "you@company.com", error: "Enter a valid email, like name@company.com" },
      country: { label: "Country", placeholder: "Nigeria or Kenya", error: "Choose a country" },
      offer: { label: "What you offer", placeholder: "Truck, van, refrigerated, other", error: "Choose what you offer" },
      routeFrom: { label: "Route from", placeholder: "e.g. Nyeri" },
      routeTo: { label: "Route to", placeholder: "e.g. Nairobi" },
      capacity: { label: "Typical spare capacity", placeholder: "e.g. 3 tonnes on return", error: "Tell us your typical spare capacity" },
    },
    routesError: "Enter where you travel from and to",
    addRoute: "+ Add another route (up to three)",
    consentError: "Please agree to continue",
    submit: "Apply to list capacity",
    sending: "Sending…",
    retry: "Try again",
    note: "No account, no password, no uploads.",
  },
  failed: {
    title: "We could not send your form",
    text: "Nothing was lost. Try again, or reach us:",
  },
  // DRAFT: no "sent" frame exists. It only shows locally with CONTACT_DEMO=1, never in production.
  sent: {
    title: "Application sent",
    steps: ["We review your details.", "We contact you about next steps."],
    home: { label: "Back to home", href: "/" },
  },
} as const;

/** "Thanks, Ada. We will contact you at ada@example.com." Without a name it drops "Ada". */
export function applySentText(firstName: string, email: string): string {
  const lead = firstName ? `Thanks, ${firstName}.` : "Thanks.";
  return `${lead} We will contact you at ${email}.`;
}
