// For businesses page copy, from the Figma desktop frame.
export const FOR_BUSINESSES = {
  hero: {
    eyebrow: "For businesses",
    title: "Book exactly the capacity you need,",
    accent: "when you need it.",
    lead: "Space in a truck or van, for the time you need.",
    cta: { label: "Request early access", href: "/early-access" },
  },
  steps: {
    title: "How a booking works",
    items: [
      { label: "Request", caption: "Ask to book a listing" },
      { label: "Provider confirms", caption: "Provider accepts" },
      { label: "You pay", caption: "Card or bank transfer" },
      { label: "Payment held", caption: "Until delivery" },
      { label: "Delivery confirmed", caption: "You confirm arrival" },
      { label: "Dispute window", caption: "Set by CAPACITY" },
    ],
  },
  pay: {
    title: "What you pay",
    intro: "The price shown on a listing is what you pay.",
    tags: ["Illustrative", "TBC"],
    rows: [
      { label: "Price per tonne", value: "KSh 12,000" },
      { label: "Quantity", value: "3 tonnes" },
    ],
    total: { label: "You pay", value: "KSh 36,000" },
    methodsTitle: "Paying",
    methods: [
      { name: "Cards", note: "Both countries", tag: "NG · KE" },
      { name: "Bank transfer", note: "Both countries", tag: "NG · KE" },
      { name: "M-Pesa", note: "Kenya only", tag: "KE" },
    ],
  },
} as const;
