import { validateContact } from "@/lib/contact";
import type { ContactInput } from "@/lib/contact";

const MAX_BODY_BYTES = 20_000;

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/**
 * Validates the message. No email provider is connected yet, so a valid message returns 503 "not_configured"
 * (the page shows its "could not send" state). For local review of the "Message sent" state, put CONTACT_DEMO=1
 * in .env.local and restart `npm run dev`. The demo flag is ignored in production builds.
 * TODO: when a provider is chosen, send the message here and return { ok: true } only if it was accepted.
 */
export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, reason: "too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const raw = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
  const input: ContactInput = {
    name: str(raw.name),
    email: str(raw.email),
    topic: str(raw.topic),
    message: str(raw.message),
    consent: raw.consent === true,
  };

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, reason: "invalid", errors }, { status: 400 });
  }

  if (process.env.CONTACT_DEMO === "1" && process.env.NODE_ENV !== "production") {
    return Response.json({ ok: true });
  }
  return Response.json({ ok: false, reason: "not_configured" }, { status: 503 });
}
