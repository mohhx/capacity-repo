// Pricing and fees page copy, from the Figma desktop and phone frames.
// Figma design notes (TBC tags, the dashed Naira box, "removable module" line) are not copied: they are notes, not live copy.
import { commissionPercent } from "@/config/platform";
import { FOR_PROVIDERS } from "@/content/for-providers";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/content/site";

const pct = commissionPercent();

export const PRICING = {
  hero: {
    eyebrow: "Pricing and fees",
    title: "One clear fee.",
    accent: "No surprises.",
    lead: `CAPACITY takes ${pct} percent of each completed booking, from the provider’s payout. Customers pay the listed price.`,
    cta: PRIMARY_CTA,
  },
  example: {
    title: "A worked example",
    receiveLabel: "Provider receives",
  },
  audience: [
    {
      id: "providers",
      title: "For providers",
      items: [
        { label: "What you receive", text: `The listed price, less ${pct} percent.` },
        { label: "When you are paid", text: "After delivery is confirmed and the dispute window closes." },
      ],
    },
    {
      id: "businesses",
      title: "For businesses",
      items: [
        { label: "What you pay", text: "The price shown on the listing." },
        { label: "How you pay", text: "Cards and bank transfer in both countries. M-Pesa in Kenya." },
      ],
    },
  ],
  // Same switch and options as the For providers page, so one flag hides both.
  promote: {
    enabled: FOR_PROVIDERS.promote.enabled,
    title: "Promoted listings",
    text: "Prices per duration and country.",
    options: FOR_PROVIDERS.promote.options,
  },
  cancellations: {
    title: "Cancellations",
    // Placeholder copy from Figma until the refund tiers are defined.
    text: "A summary of refund tiers will appear here once they are defined.",
  },
  closing: {
    title: "Ready to get started?",
    text: "Or request early access as a business.",
    cta: PRIMARY_CTA,
    textHref: SECONDARY_CTA.href,
  },
} as const;
