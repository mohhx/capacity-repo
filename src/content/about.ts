// About page copy, from the Figma desktop and phone frames.
//
// "Who is behind it": the Figma frame is a design note ("Add names and photos only if they are real and approved.
// Otherwise tell the company story in text."). No real team content exists yet, so the company story is shown as text.
// When real names and photos are approved, replace the text in `team` with a team grid.
// TBC (handover list): the company story text is a draft until the real story is supplied.
//
// TBC (handover list): the company details wording is placeholder until the registered name and number exist.
// The Figma TBC pills are design notes and are not shown on the site.
import { PRIMARY_CTA, SECONDARY_CTA } from "@/content/site";

export const ABOUT = {
  hero: {
    eyebrow: "About",
    title: "Idle capacity",
    accent: "should not idle.",
    lead: "CAPACITY helps businesses use the space that already exists, instead of building more.",
  },
  why: {
    title: "Why we exist",
    text: "Trucks return empty. Warehouses sit partly unused. Meanwhile other businesses cannot find space when they need it. CAPACITY brings both sides into one place.",
  },
  layer: {
    title: "One transaction layer",
    text: "Find space, agree, pay and confirm delivery in one place.",
  },
  team: {
    title: "Who is behind it",
    text: "CAPACITY is an exchange for unused transport and storage capacity. Providers list what they have, businesses book what they need, and payment is held until delivery is confirmed. We are launching in Nigeria and Kenya.",
  },
  // The country pills and the "Starting on selected routes in ..." line are built from COUNTRIES in AboutCards.
  operate: {
    title: "Where we operate",
  },
  company: {
    title: "Company details",
    text: "Registered name and number to be added.",
  },
  closing: {
    title: "Want to be part of it?",
    text: "Or request early access.",
    cta: PRIMARY_CTA,
    textHref: SECONDARY_CTA.href,
  },
} as const;
