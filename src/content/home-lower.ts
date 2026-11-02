// DRAFT copy. Questions come from Figma; answers are drafts that follow the spec copy rules.
import { commissionPercent } from "@/config/platform";

export const HOME_LOWER = {
  route: {
    title: "Tell us your route",
    fields: [
      { name: "from", label: "From", placeholder: "City or town", error: "Enter the city or town you ship from." },
      { name: "to", label: "To", placeholder: "City or town", error: "Enter the city or town you ship to." },
      { name: "goods", label: "What you ship", placeholder: "Type of goods", error: "Tell us what you ship." },
      { name: "contact", label: "Phone or email", placeholder: "How to reach you", error: "Enter a phone number or email." },
    ],
    consentError: "Please agree to the privacy notice to continue.",
    submit: "Send my route",
    notice: {
      title: "Route requests are not open yet",
      text: "Nothing was sent. Early access is opening soon.",
    },
  },
  faq: {
    title: "Common questions",
    items: [
      {
        id: "what",
        question: "What is CAPACITY and who is it for?",
        answer:
          "CAPACITY lets transport providers sell empty return trips and idle space, and lets businesses book exactly the capacity they need. We are launching in Nigeria and Kenya.",
      },
      {
        id: "cost",
        question: "How much does it cost?",
        answer: `Providers pay a ${commissionPercent()} percent commission, deducted from their payout. Businesses see the price before they book.`,
      },
      {
        id: "verify",
        question: "How do I get verified?",
        answer: "Verification details will be shared when applications open.",
      },
      {
        id: "paid",
        question: "When and how do I get paid?",
        answer:
          "Payment is held securely until delivery is confirmed. It is then paid out to the provider.",
      },
    ],
    seeAll: { label: "See all questions →", href: "/faq" },
  },
  cta: {
    title: "Ready to get started?",
    text: "Or request early access as a business.",
  },
} as const;
