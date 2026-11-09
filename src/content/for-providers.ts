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
  responsibilities: {
    title: "Your responsibilities",
    items: [
      {
        id: "cargo",
        question: "Cargo in transit is your responsibility",
        answer: "You are the carrier. CAPACITY is the exchange, not the carrier.",
      },
      // TBC: the answers below are placeholders until the final text is supplied.
      { id: "honour", question: "Honour confirmed bookings", answer: "Answer to follow." },
      { id: "cancel", question: "Cancellations affect your visibility", answer: "Answer to follow." },
    ],
  },
  faq: {
    title: "Provider FAQ",
    // TBC: all answers are placeholders until the final text is supplied.
    // Order is row by row, so the two columns read: verified, cost | paid, not shipped (as in Figma).
    items: [
      { id: "verified", question: "How do I get verified?", answer: "Answer to follow." },
      { id: "paid", question: "When and how do I get paid?", answer: "Answer to follow." },
      { id: "cost", question: "How much does it cost?", answer: "Answer to follow." },
      { id: "prohibited", question: "What can I not ship?", answer: "Answer to follow." },
    ],
  },
  closing: {
    title: "Ready to list your spare capacity?",
    text: "Short form. No account or password.",
    cta: { label: "Apply to list capacity", href: "/apply" },
  },
} as const;
