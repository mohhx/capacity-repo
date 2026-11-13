import { COUNTRIES, type CountryCode } from "@/config/platform";
import { LAUNCH_ROUTES, PRIMARY_CTA, SECONDARY_CTA } from "@/content/site";

export const MARKETS = {
  hero: {
    eyebrow: "OUR MARKETS",
    title: "Launching in",
    accent: "Nigeria and Kenya.",
    description:
      "CAPACITY is building a smarter way to use infrastructure across Africa, starting with two markets.",
  },

  countries: [
    {
      code: "NG" as CountryCode,
      launchRoutes: LAUNCH_ROUTES.note,
      acceptedIds: "To be confirmed.",
      example: "Local market example to be confirmed.",
    },
    {
      code: "KE" as CountryCode,
      launchRoutes: LAUNCH_ROUTES.note,
      acceptedIds: "To be confirmed.",
      example: "Local market example to be confirmed.",
    },
  ],

  cta: {
    title: "Ready to put spare capacity to work?",
    text: SECONDARY_CTA.label,
    textHref: SECONDARY_CTA.href,
    button: PRIMARY_CTA,
  },
} as const;

export { COUNTRIES };
