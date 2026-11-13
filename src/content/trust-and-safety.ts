// Trust and safety page copy, from the Figma desktop and phone frames.
import type { IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/content/site";

export interface TrustCard {
  id: string;
  icon: IconName;
  title: string;
  text: string;
}

export const TRUST = {
  hero: {
    eyebrow: "Trust and safety",
    title: "How we keep",
    accent: "bookings safe.",
    lead: "Plain answers before you apply or request access.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
  },
  cards: [
    {
      id: "verified",
      icon: "verified",
      title: "Who is verified",
      text: "Every user verifies a phone number and a government ID. Providers also verify their business and address. Documents are never shown publicly.",
    },
    {
      id: "held",
      icon: "payment-held",
      title: "Payment held until delivery",
      text: "Payment is held securely and released after delivery is confirmed and the dispute window closes.",
    },
    {
      id: "wrong",
      icon: "dispute-support",
      title: "If something goes wrong",
      text: "Either side can open a dispute with evidence. Funds stay held while it is reviewed. An admin decides.",
    },
    {
      id: "ratings",
      icon: "ratings",
      title: "Ratings and reviews",
      text: "Both sides rate each other after a booking.",
    },
    {
      id: "carried",
      icon: "not-allowed",
      title: "What cannot be carried",
      text: "Prohibited goods are not allowed. The full list will be shown here.",
    },
    {
      id: "is-not",
      icon: "information",
      title: "What CAPACITY is and is not",
      text: "CAPACITY is an exchange, not the carrier. The provider is responsible for cargo in transit. Insurance is not offered yet.",
    },
  ] satisfies TrustCard[],
  closing: {
    title: "Ready to take the next step?",
    text: "Short form. No account or password.",
    cta: PRIMARY_CTA,
    link: { label: "Request early access as a business →", href: SECONDARY_CTA.href },
  },
};
