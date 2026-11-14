import Image from "next/image";

/**
 * Brand icons (outline, mint, transparent PNG, 512 square) from the CAPACITY assets pack.
 * "whatsapp" is the exception: the official green logo (Simple Icons), also a 512 square PNG.
 */
const ICONS = {
  "return-trips": "/icons/return-trips.png",
  "partial-loads": "/icons/partial-loads.png",
  refrigerated: "/icons/refrigerated.png",
  vans: "/icons/vans.png",
  verified: "/icons/verified.png",
  "payment-held": "/icons/payment-held.png",
  "dispute-support": "/icons/dispute-support.png",
  ratings: "/icons/ratings.png",
  "set-your-price": "/icons/set-your-price.png",
  "confirm-booking": "/icons/confirm-booking.png",
  "not-allowed": "/icons/not-allowed.png",
  information: "/icons/information.png",
  whatsapp: "/icons/whatsapp.png",
} as const;

export type IconName = keyof typeof ICONS;

/** The artwork fills about 80 percent of its square, so the default 28 shows a glyph of about 22. */
export function Icon({ name, size = 28 }: { name: IconName; size?: number }) {
  return <Image src={ICONS[name]} width={size} height={size} alt="" aria-hidden="true" />;
}
