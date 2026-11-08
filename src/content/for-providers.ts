// For providers page copy, from the Figma desktop frame.
export const FOR_PROVIDERS = {
  hero: {
    eyebrow: "For providers",
    title: "Earn from empty return legs and",
    accent: "idle space.",
    lead: "Set your own price. Confirm every booking.",
    cta: { label: "Apply to list capacity", href: "/apply" },
  },
  why: {
    title: "Why list with us",
    items: [
      { id: "price", title: "You set your own price", text: "You decide what each trip or space is worth." },
      { id: "confirm", title: "You confirm every booking", text: "Nothing is booked without your say." },
      { id: "held", title: "Payment held until delivery", text: "Then it is paid out to you." },
    ],
  },
  steps: {
    title: "How it works for providers",
    items: [
      { label: "Apply" },
      { label: "Get verified" },
      { label: "List your space" },
      { label: "Get booked" },
      { label: "Deliver" },
      { label: "Get paid" },
    ],
  },
  apply: {
    title: "What you need to apply",
    items: [
      "Government ID",
      "Business registration",
      "Business address that matches your listing",
      "Payout account in the business's name",
      // Wording not final: Figma tags this item TBC (a design note, not shown on the site).
      "Vehicle papers (insurance certificate if you have one)",
    ],
  },
  cost: {
    title: "What it costs",
    // Figma shows KSh 50,000. No Naira example exists yet (TBC), so both countries use this
    // illustrative figure in their own currency symbol. It is not a conversion.
    amount: 50000,
  },
} as const;
