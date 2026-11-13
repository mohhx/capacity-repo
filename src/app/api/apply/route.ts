import { validateApply } from "@/lib/apply";
import type { ApplyInput } from "@/lib/apply";

const MAX_BODY_BYTES = 20_000;

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function parseRoutes(value: unknown): ApplyInput["routes"] {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 10).map((item) => {
    const route = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {};
    return { from: str(route.from), to: str(route.to) };
  });
}

/**
 * Validates the application. No email provider is connected yet, so a valid application returns 503 "not_configured"
 * (the page shows its "could not send" state) and is never claimed as sent. For local review of the "sent" state, put
 * CONTACT_DEMO=1 in .env.local and restart `npm run dev`. The flag is ignored in production builds.
 * Do not log the submitted details. TODO: when a provider is chosen, send the application here and return { ok: true }
 * only if it was accepted.
 */
export async function POST(request: Request) {
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return Response.json({ ok: false, reason: "too_large" }, { status: 413 });
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }
  if (text.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, reason: "too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const raw = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
  const input: ApplyInput = {
    name: str(raw.name),
    business: str(raw.business),
    dialCode: str(raw.dialCode),
    phone: str(raw.phone),
    email: str(raw.email),
    country: str(raw.country),
    offer: str(raw.offer),
    routes: parseRoutes(raw.routes),
    capacity: str(raw.capacity),
    consent: raw.consent === true,
  };

  const errors = validateApply(input);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, reason: "invalid", errors }, { status: 400 });
  }

  if (process.env.CONTACT_DEMO === "1" && process.env.NODE_ENV !== "production") {
    return Response.json({ ok: true });
  }
  return Response.json({ ok: false, reason: "not_configured" }, { status: 503 });
}
