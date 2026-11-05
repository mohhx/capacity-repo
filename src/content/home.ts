// Home copy from Figma (desktop frame). Truck example replaces the Figma warehouse example
// because the spec says logistics only. Numbers in `idle` are illustrative.
export const HOME = {
  hero: {
    eyebrow: "THE INVISIBLE INFRASTRUCTURE EXCHANGE",
    titleLines: ["Turn idle infrastructure"],
    titleAccent: "into opportunity.",
    lead: ["Empty return trips and idle space, now bookable.", "Launching in Nigeria and Kenya."],
    primaryCta: { label: "List your spare capacity", href: "/apply" },
    secondaryCta: { label: "Request early access", href: "/early-access" },
  },
  book: {
    title: "What you can book",
    items: [
      { id: "return", icon: "return-trips", title: "Return trips", text: "Empty legs, sold" },
      { id: "partial", icon: "partial-loads", title: "Partial loads", text: "Book only your part" },
      { id: "cold", icon: "refrigerated", title: "Refrigerated", text: "Cold-chain space" },
      { id: "vans", icon: "vans", title: "Vans", text: "Smaller loads" },
    ],
  },
  idle: {
    title: "You buy the gap, not the asset.",
    text: "A truck carrying 7 of its 10 tonnes can sell the other 3 on the same trip.",
    vehicle: "Truck, 10 tonnes",
    usedPercent: 70,
    usedLabel: "7 tonnes used",
    idleLabel: "3 tonnes idle",
  },
  how: {
    title: "How it will work",
    steps: [
      { id: "1", title: "List or request", text: "Providers list space. Businesses request it." },
      { id: "2", title: "Confirm", text: "The provider confirms the booking." },
      { id: "3", title: "Pay and deliver", text: "Payment held securely until delivery is confirmed." },
    ],
  },
  audiences: [
    {
      id: "providers",
      title: "For providers",
      intro: "Earn from empty return legs and idle space.",
      points: ["You set your own price", "You confirm every booking", "Payment held until delivery"],
      cta: { label: "Apply to list capacity →", href: "/apply" },
    },
    {
      id: "businesses",
      title: "For businesses",
      intro: "Book exactly the capacity you need, when you need it.",
      points: ["See the price before you book", "Pay once the provider confirms", "Payment held until delivery"],
      cta: { label: "Request early access →", href: "/early-access" },
    },
  ],
  trust: {
    title: "Built to be trusted",
    items: [
      { id: "verified", icon: "verified", label: "Verified users" },
      { id: "held", icon: "payment-held", label: "Payment held until delivery" },
      { id: "dispute", icon: "dispute-support", label: "Dispute support" },
      { id: "ratings", icon: "ratings", label: "Ratings and reviews" },
    ],
  },
  markets: {
    title: "Launching in Nigeria and Kenya",
  },
} as const;
