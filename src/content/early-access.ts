// Early access page copy, from the Figma desktop frame (validation errors shown).
// Items marked DRAFT have no copy in Figma yet.

// DRAFT: the frame only shows the placeholder "Type of goods or space".
export const EARLY_NEEDS = [
  { value: "goods", label: "General goods" },
  { value: "partial", label: "Partial load" },
  { value: "return", label: "Return trip space" },
  { value: "other", label: "Other" },
] as const;

export const EARLY_FREQUENCY = [
  { value: "one-off", label: "One-off" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
] as const;

export const EARLY = {
  hero: {
    back: { label: "← Back to home", href: "/" },
    title: "Request early access",
    lead: "Tell us what you need to move or store. We will review your request and contact you.",
  },
  next: {
    title: "What happens next",
    steps: ["We review your details.", "We contact you about next steps.", "You can book once we launch on your route."],
    footnote: "We use your details only to contact you about CAPACITY.",
    privacy: { label: "Privacy notice", href: "/privacy" },
  },
  form: {
    title: "Request early access",
    fields: {
      name: { label: "Full name", placeholder: "Your name", error: "Enter your name" }, // DRAFT error
      business: { label: "Business name", placeholder: "Registered business", error: "Enter your business name" }, // DRAFT error
      phone: { label: "Phone", placeholder: "801 234 5678", error: "Enter a valid phone number" },
      email: { label: "Email", placeholder: "you@company.com", error: "Enter a valid email, like name@company.com" },
      country: { label: "Country", placeholder: "Nigeria", error: "Choose a country" }, // DRAFT error
      route: { label: "Route or location needed", placeholder: "From and to", error: "Enter your route or location" }, // DRAFT error
      need: { label: "What you ship or need", placeholder: "Type of goods or space", error: "Choose what you ship or need" }, // DRAFT error
      frequency: { label: "How often", error: "Choose how often" }, // optional field; the error only shows if the value was tampered with
    },
    consentError: "Please agree to continue",
    submit: "Request early access",
    sending: "Sending…",
    retry: "Try again",
    note: "No account, no password, no uploads.",
  },
  // DRAFT: the same failed panel as Apply, until the Figma frames are checked.
  failed: {
    title: "We could not send your form",
    text: "Nothing was lost. Try again, or reach us:",
  },
  // DRAFT: replace with the "request received" frames. Only shows locally with CONTACT_DEMO=1.
  sent: {
    title: "Request received",
    steps: ["We review your request.", "We contact you about next steps."],
    home: { label: "Back to home", href: "/" },
  },
} as const;

/** "Thanks, Ada. We will contact you at ada@example.com." Without a name it drops "Ada". */
export function earlySentText(firstName: string, email: string): string {
  const lead = firstName ? `Thanks, ${firstName}.` : "Thanks.";
  return `${lead} We will contact you at ${email}.`;
}
