// Contact page copy, from the Figma desktop frames (default, sending, failed, sent).
// Draft items are marked DRAFT: Figma gives no copy for them.
import { HOME_LOWER } from "@/content/home-lower";

export const CONTACT_TOPICS = [
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "question", label: "General question" }, // DRAFT: Figma only shows "Partnership" and a placeholder
  { value: "other", label: "Something else" }, // DRAFT
] as const;

export const CONTACT = {
  hero: {
    eyebrow: "Contact",
    title: "Talk to us.",
    lead: "Partners, press and questions are welcome.",
  },
  info: {
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  // Optional WhatsApp button. enabled shows it. While href is empty it is NOT clickable.
  // To make it clickable: set href to "https://wa.me/<number without + or spaces>".
  whatsapp: {
    enabled: true as boolean,
    label: "Chat on WhatsApp",
    href: "" as string,
  },
  form: {
    title: "Send us a message",
    fields: {
      name: { label: "Name", placeholder: "Your name", error: "Enter your name." }, // error copy is DRAFT
      email: {
        label: "Email",
        placeholder: "you@company.com",
        error: "Enter a valid email address.",
      }, // DRAFT
      topic: {
        label: "Topic",
        placeholder: "Partnership, press, question",
        error: "Choose a topic.",
      }, // DRAFT
      message: { label: "Message", placeholder: "How can we help?", error: "Write your message." }, // DRAFT
    },
    consentError: HOME_LOWER.route.consentError,
    submit: "Send message",
    sending: "Sending…",
    retry: "Try again",
  },
  failed: {
    title: "We could not send your message",
    text: "Nothing was lost. Try again, or reach us:",
  },
  sent: {
    title: "Message sent",
    steps: ["We read your message.", "We reply to the email you gave us."],
    home: { label: "Back to home", href: "/" },
    faq: { label: "Read the FAQ →", href: "/faq" },
  },
} as const;

/** "Thanks, Ada. We will reply to ada@example.com by email." Without a name it drops "Ada". */
export function contactSentText(firstName: string, email: string): string {
  const lead = firstName ? `Thanks, ${firstName}.` : "Thanks.";
  return `${lead} We will reply to ${email} by email.`;
}
