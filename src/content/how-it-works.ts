// How it works page copy, from the Figma desktop frames (Providers and Businesses tabs).
import { commissionPercent } from "@/config/platform";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/content/site";

export type Role = "provider" | "business";

export const HOW_IT_WORKS = {
  hero: {
    eyebrow: "How it works",
    title: "One booking,",
    accent: "start to finish.",
    subtitle: "The same path for every booking.",
  },
} as const;

/** Closing panel per role. The button is the selected role's own action and the text points to the other role. */
export const CLOSING: Record<Role, { title: string; text: string; cta: { label: string; href: string } }> = {
  provider: {
    title: "Ready to start?",
    text: "Or request early access as a business.",
    cta: PRIMARY_CTA,
  },
  business: {
    title: "Ready to start?",
    text: "Or apply to list capacity as a provider.",
    cta: SECONDARY_CTA,
  },
};

export const ROLE_TABS: readonly { id: Role; label: string }[] = [
  { id: "provider", label: "Providers" },
  { id: "business", label: "Businesses" },
];

export interface PathStep {
  id: string;
  label: string;
  note?: string;
  highlight?: boolean;
  branch?: { label: string; detail: string; tone: "neutral" | "danger" };
}

export const PATH = {
  title: "The booking path",
  note: "Time windows are set by CAPACITY.",
};

export const PATH_STEPS: PathStep[] = [
  { id: "requested", label: "Requested", branch: { label: "Declined or", detail: "expired", tone: "neutral" } },
  { id: "accepted", label: "Accepted" },
  { id: "paid", label: "Paid (held)", branch: { label: "Cancelled", detail: "(refund by tier)", tone: "neutral" } },
  { id: "progress", label: "In progress", branch: { label: "Disputed", detail: "(admin decides)", tone: "danger" } },
  { id: "completed", label: "Completed" },
  { id: "settled", label: "Settled", note: "(provider paid)", highlight: true },
];

export const WHO_DOES_WHAT = {
  title: "Who does what",
  columns: { step: "Step", provider: "Provider", business: "Business", capacity: "CAPACITY" },
  rows: [
    { step: "Requested", provider: "Reviews the request", business: "Asks to book", capacity: "Passes it on" },
    { step: "Accepted", provider: "Confirms the booking", business: "Waits for confirmation", capacity: "Records it" },
    { step: "Paid (held)", provider: "Waits for payment", business: "Pays the listed price", capacity: "Holds payment securely" },
    { step: "In progress", provider: "Carries the goods", business: "Hands over goods", capacity: "Shows status updates" },
    { step: "Completed", provider: "Marks delivery done", business: "Confirms delivery", capacity: "Starts the dispute window" },
    {
      step: "Settled",
      provider: "Receives the payout",
      business: "Nothing more to do",
      capacity: `Pays out, less ${commissionPercent()} percent`,
    },
  ],
};
