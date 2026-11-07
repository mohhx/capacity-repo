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
} as const;
