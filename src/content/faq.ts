// FAQ page copy. Questions and groups come from the Figma FAQ frames (Providers and Businesses).
// Answers use only facts already in the repo. "Answer to follow." marks text still to be supplied (TBC).
import { commissionPercent } from "@/config/platform";
import type { Role } from "@/content/how-it-works";

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: Record<Role, FaqEntry[]>;
}

const TBC = "Answer to follow.";

const COUNTRIES_ANSWER =
  "We are launching in Nigeria and Kenya. Businesses pay by card or bank transfer in both countries, and in Kenya also by M-Pesa. Nigeria uses NGN and Kenya uses KES.";

export const FAQ = {
  hero: {
    eyebrow: "FAQ",
    title: "Questions,",
    accent: "answered.",
  },
  groups: [
    {
      id: "about",
      title: "About CAPACITY",
      items: {
        provider: [
          {
            id: "what",
            question: "What is CAPACITY and who is it for?",
            answer:
              "CAPACITY is a marketplace for unused business capacity. Providers list spare space in a truck or van; businesses book the part they need.",
          },
          { id: "countries", question: "Which countries and payment methods are supported?", answer: COUNTRIES_ANSWER },
          { id: "sole", question: "Is it only for companies, or can sole traders join?", answer: TBC },
        ],
        business: [
          {
            id: "what",
            question: "What is CAPACITY and who is it for?",
            answer: "CAPACITY is a marketplace for unused business capacity. Book exactly the space and time you need.",
          },
          { id: "countries", question: "Which countries and payment methods are supported?", answer: COUNTRIES_ANSWER },
          { id: "sole", question: "Is it only for companies, or can sole traders join?", answer: TBC },
        ],
      },
    },
    {
      id: "money",
      title: "Verification and money",
      items: {
        provider: [
          {
            id: "verified",
            question: "How do I get verified, and how long does it take?",
            answer: "Verification details will be shared when applications open.",
          },
          {
            id: "cost",
            question: "How much does it cost?",
            answer: `Providers pay a ${commissionPercent()} percent commission, deducted from their payout.`,
          },
          {
            id: "paid",
            question: "When and how do I get paid?",
            answer: "Payment is held securely until delivery is confirmed. It is then paid out to the provider.",
          },
        ],
        business: [
          { id: "verified", question: "How do I get verified, and how long does it take?", answer: TBC },
          { id: "cost", question: "How much does it cost?", answer: "The price shown on a listing is what you pay." },
          {
            id: "pay",
            question: "When do I pay?",
            answer: "You pay once the provider confirms your booking. The payment is held until delivery is confirmed.",
          },
        ],
      },
    },
    {
      id: "safety",
      title: "Safety and rules",
      items: {
        provider: [
          {
            id: "late",
            question: "What happens if my goods are late, damaged or lost?",
            answer: "You are the carrier, so cargo in transit is your responsibility. CAPACITY is the exchange, not the carrier.",
          },
          { id: "prohibited", question: "What can I not ship?", answer: TBC },
          { id: "cancel", question: "Can I cancel a booking?", answer: TBC },
        ],
        business: [
          {
            id: "late",
            question: "What happens if my goods are late, damaged or lost?",
            answer: "The provider is responsible for cargo in transit. You can open a dispute with evidence.",
          },
          { id: "prohibited", question: "What can I not ship?", answer: TBC },
          { id: "cancel", question: "Can I cancel a booking?", answer: TBC },
        ],
      },
    },
  ] satisfies FaqGroup[],
  contact: {
    title: "Still have a question?",
    writeTo: "Write to",
    cta: { label: "Contact us", href: "/contact" },
  },
} as const;
