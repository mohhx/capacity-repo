// For businesses page copy, from the Figma desktop frame.
export const FOR_BUSINESSES = {
  hero: {
    eyebrow: "For businesses",
    title: "Book exactly the capacity you need,",
    accent: "when you need it.",
    lead: "Space in a truck, for the time you need.",
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
    tags: ["Illustrative"], // the Figma "TBC" tag is a design note, not live copy
    rows: [
      { label: "Price per tonne", value: "₦20,000" }, // placeholder sample, labelled Illustrative
      { label: "Quantity", value: "3 tonnes" },
    ],
    total: { label: "You pay", value: "₦60,000" },
    methodsTitle: "Paying",
    methods: [
      { name: "Cards", note: "Nigeria", tag: "NG" },
      { name: "Bank transfer", note: "Nigeria", tag: "NG" },
    ],
  },
  safety: {
    title: "Staying safe",
    items: [
      "Verified providers",
      "Payment held until delivery",
      "Dispute support",
      "Ratings and reviews",
      "Prohibited goods are not carried",
    ],
    link: { label: "How we keep safe →", href: "/trust-and-safety" },
  },
  faq: {
    title: "Business FAQ",
    items: [
      {
        id: "late",
        question: "What if my goods are late, damaged or lost?",
        answer: "The provider is responsible for cargo in transit. You can open a dispute with evidence.",
      },
      // TBC: the answers below are placeholders until the final text is supplied.
      { id: "cancel", question: "Can I cancel a booking?", answer: "Answer to follow." },
      { id: "pay", question: "How do I pay?", answer: "Answer to follow." },
      { id: "prohibited", question: "What can I not ship?", answer: "Answer to follow." },
    ],
  },
  closing: {
    title: "Need space on a route?",
    text: "Short form. No account or password.",
    cta: { label: "Request early access", href: "/early-access" },
  },
} as const;
