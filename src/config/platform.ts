/**
 * Shared platform values (spec v0.2, SITE-02 / LOC-03).
 * The site may only quote values from here, so site and app cannot disagree.
 * "suggested" values are spec defaults, not final decisions.
 */

export type CountryCode = "NG" | "KE";

export type Status = "confirmed" | "suggested";

export type PaymentMethod = "Cards" | "Bank transfer" | "M-Pesa";

export interface Country {
  code: CountryCode;
  name: string;
  currency: "NGN" | "KES";
  currencySymbol: string;
  currencyLabel: string; // shown in the markets section, e.g. "NGN (₦)"
  paymentMethods: PaymentMethod[];
  timeZone: string;
}

export const COUNTRIES: Record<CountryCode, Country> = {
  NG: {
    code: "NG",
    name: "Nigeria",
    currency: "NGN",
    currencySymbol: "₦",
    currencyLabel: "NGN (₦)",
    paymentMethods: ["Cards", "Bank transfer"],
    timeZone: "Africa/Lagos", // UTC+1
  },
  KE: {
    code: "KE",
    name: "Kenya",
    currency: "KES",
    currencySymbol: "KSh",
    currencyLabel: "KES (KSh)",
    paymentMethods: ["Cards", "Bank transfer", "M-Pesa"],
    timeZone: "Africa/Nairobi", // UTC+3
  },
};

export const DEFAULT_COUNTRY: CountryCode = "NG";

export const PLATFORM = {
  /** D11: fixed 10 percent, deducted from the provider's payout. Stored as a fraction. */
  commissionRate: { value: 0.1, status: "confirmed" as Status, ref: "D11, PAY-03" },

  /** BKG-02: provider response window. */
  responseWindowHours: { value: 12, status: "suggested" as Status, ref: "BKG-02" },

  /** BKG-03: customer payment window after acceptance. */
  paymentWindowHours: { value: 24, status: "suggested" as Status, ref: "BKG-03" },

  /** TRK-02: delivery auto-confirms after this period if no dispute. */
  autoConfirmHours: { value: 48, status: "suggested" as Status, ref: "TRK-02" },

  /** PAY-04: payout 24 to 48 hours after delivery confirmation. */
  payoutHours: { min: 24, max: 48, status: "suggested" as Status, ref: "PAY-04" },
} as const;

/** Commission as a whole-number percent for display, e.g. 10. */
export function commissionPercent(): number {
  return Math.round(PLATFORM.commissionRate.value * 100);
}

/** Payout window as display text, e.g. "24 to 48 hours". */
export function payoutWindowText(): string {
  const { min, max } = PLATFORM.payoutHours;
  return `${min} to ${max} hours`;
}

export function getCountry(code: CountryCode): Country {
  return COUNTRIES[code];
}