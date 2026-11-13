import { CONTACT, CONTACT_TOPICS } from "@/content/contact";

export interface ContactInput {
  name: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<Record<"name" | "email" | "topic" | "message" | "consent", string>>;

export const CONTACT_LIMITS = { name: 100, email: 254, message: 2000 } as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ContactErrors {
  const { fields, consentError } = CONTACT.form;
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (!name || name.length > CONTACT_LIMITS.name) errors.name = fields.name.error;
  if (!EMAIL_PATTERN.test(email) || email.length > CONTACT_LIMITS.email) errors.email = fields.email.error;
  if (!CONTACT_TOPICS.some((t) => t.value === input.topic)) errors.topic = fields.topic.error;
  if (!message || message.length > CONTACT_LIMITS.message) errors.message = fields.message.error;
  if (!input.consent) errors.consent = consentError;
  return errors;
}

/** First word of the name, for "Thanks, Ada." */
export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] ?? "";
}
