import { APPLY, APPLY_COUNTRIES, APPLY_DIAL_OPTIONS, APPLY_OFFERS } from "@/content/apply";

export interface ApplyRoute {
  from: string;
  to: string;
}

export interface ApplyInput {
  name: string;
  business: string;
  dialCode: string;
  phone: string;
  email: string;
  country: string;
  offer: string;
  routes: ApplyRoute[];
  capacity: string;
  consent: boolean;
}

export type ApplyErrors = Partial<
  Record<"name" | "business" | "phone" | "email" | "country" | "offer" | "routes" | "capacity" | "consent", string>
>;

export const APPLY_LIMITS = { name: 100, business: 150, phone: 20, email: 254, place: 100, capacity: 100, routes: 3 } as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGITS = /^\d{6,14}$/;

export function validateApply(input: ApplyInput): ApplyErrors {
  const { fields, routesError, consentError } = APPLY.form;
  const errors: ApplyErrors = {};

  const name = input.name.trim();
  const business = input.business.trim();
  const email = input.email.trim();
  const capacity = input.capacity.trim();
  const digits = input.phone.replace(/[\s\-().]/g, "");

  if (!name || name.length > APPLY_LIMITS.name) errors.name = fields.name.error;
  if (!business || business.length > APPLY_LIMITS.business) errors.business = fields.business.error;
  if (
    !APPLY_DIAL_OPTIONS.some((o) => o.value === input.dialCode) ||
    !PHONE_DIGITS.test(digits) ||
    input.phone.length > APPLY_LIMITS.phone
  ) {
    errors.phone = fields.phone.error;
  }
  if (!EMAIL_PATTERN.test(email) || email.length > APPLY_LIMITS.email) errors.email = fields.email.error;
  if (!APPLY_COUNTRIES.some((c) => c.value === input.country)) errors.country = fields.country.error;
  if (!APPLY_OFFERS.some((o) => o.value === input.offer)) errors.offer = fields.offer.error;

  const routesOk =
    input.routes.length >= 1 &&
    input.routes.length <= APPLY_LIMITS.routes &&
    input.routes.every((r) => {
      const from = r.from.trim();
      const to = r.to.trim();
      return Boolean(from) && Boolean(to) && from.length <= APPLY_LIMITS.place && to.length <= APPLY_LIMITS.place;
    });
  if (!routesOk) errors.routes = routesError;

  if (!capacity || capacity.length > APPLY_LIMITS.capacity) errors.capacity = fields.capacity.error;
  if (!input.consent) errors.consent = consentError;
  return errors;
}
