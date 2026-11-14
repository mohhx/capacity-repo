import { APPLY_COUNTRIES, APPLY_DIAL_OPTIONS } from "@/content/apply";
import { EARLY, EARLY_FREQUENCY, EARLY_NEEDS } from "@/content/early-access";

export interface EarlyInput {
  name: string;
  business: string;
  dialCode: string;
  phone: string;
  email: string;
  country: string;
  route: string;
  need: string;
  /** Optional. An empty string means the person did not choose. */
  frequency: string;
  consent: boolean;
}

export type EarlyErrors = Partial<
  Record<"name" | "business" | "phone" | "email" | "country" | "route" | "need" | "frequency" | "consent", string>
>;

export const EARLY_LIMITS = { name: 100, business: 150, phone: 20, email: 254, route: 150 } as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGITS = /^\d{6,14}$/;

export function validateEarly(input: EarlyInput): EarlyErrors {
  const { fields, consentError } = EARLY.form;
  const errors: EarlyErrors = {};

  const name = input.name.trim();
  const business = input.business.trim();
  const email = input.email.trim();
  const route = input.route.trim();
  const digits = input.phone.replace(/[\s\-().]/g, "");

  if (!name || name.length > EARLY_LIMITS.name) errors.name = fields.name.error;
  if (!business || business.length > EARLY_LIMITS.business) errors.business = fields.business.error;
  if (
    !APPLY_DIAL_OPTIONS.some((o) => o.value === input.dialCode) ||
    !PHONE_DIGITS.test(digits) ||
    input.phone.length > EARLY_LIMITS.phone
  ) {
    errors.phone = fields.phone.error;
  }
  if (!EMAIL_PATTERN.test(email) || email.length > EARLY_LIMITS.email) errors.email = fields.email.error;
  if (!APPLY_COUNTRIES.some((c) => c.value === input.country)) errors.country = fields.country.error;
  if (!route || route.length > EARLY_LIMITS.route) errors.route = fields.route.error;
  if (!EARLY_NEEDS.some((n) => n.value === input.need)) errors.need = fields.need.error;
  if (input.frequency !== "" && !EARLY_FREQUENCY.some((f) => f.value === input.frequency)) {
    errors.frequency = fields.frequency.error;
  }
  if (!input.consent) errors.consent = consentError;
  return errors;
}
