/**
 * Coming-soon page copy, from the Figma desktop frames "xx12" (providers tab) and "xx" (businesses tab).
 * Differences from Figma: the launch line says Nigeria only (spec v0.3, D18), and the form fields, placeholders and
 * errors come from the live Apply and Early access forms, so they never drift apart.
 */
import { SITE } from "@/content/site";

export const COMING_SOON = {
  eyebrow: SITE.tagline,
  title: "Empty space earns nothing.",
  accent: "List it.",
  lead: "Empty return trips and idle space will soon be bookable by businesses that need them.",
  launch: `Launching in ${SITE.launchMarkets}.`,
  tabs: {
    label: "Choose what applies to you",
    provider: "I have spare capacity",
    business: "I need capacity",
  },
  steps: {
    title: "How it will work",
    items: [
      { title: "List or request", text: "Providers list space. Businesses request it." },
      { title: "Confirm", text: "The provider confirms the booking." },
      { title: "Pay and deliver", text: "Payment held securely until delivery is confirmed." },
    ],
  },
} as const;
