"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { ContactLine } from "@/components/contact/ContactLine";
import { useCountry } from "@/components/layout/CountryProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { PhoneField } from "@/components/ui/PhoneField";
import { SelectField } from "@/components/ui/SelectField";
import type { CountryCode } from "@/config/platform";
import { APPLY, APPLY_COUNTRIES, APPLY_DIAL_CODES, APPLY_DIAL_OPTIONS, APPLY_OFFERS } from "@/content/apply";
import { CONTACT } from "@/content/contact";
import { COMPANY } from "@/content/site";
import { APPLY_LIMITS, validateApply } from "@/lib/apply";
import type { ApplyErrors, ApplyInput } from "@/lib/apply";
import { firstName } from "@/lib/contact";
import styles from "./ApplyForm.module.css";

type Status = "idle" | "sending" | "failed";

interface ApplyFormProps {
  /** Called once the application was accepted. The parent swaps the page for the "sent" panel. */
  onSent: (firstName: string, email: string) => void;
}

function FailedPanel() {
  const { failed } = APPLY;
  const { info } = CONTACT;
  return (
    <div className={styles.failed} role="alert">
      <p className={styles.failedTitle}>
        <span aria-hidden="true">! </span>
        {failed.title}
      </p>
      <p className={styles.failedText}>{failed.text}</p>
      <ul className={styles.failedLines}>
        <li>
          {info.emailLabel}: <ContactLine item={COMPANY.email} kind="mail" />
        </li>
        <li>
          {info.phoneLabel}: <ContactLine item={COMPANY.phoneNG} kind="tel" /> (NG)
          <span aria-hidden="true"> · </span>
          <ContactLine item={COMPANY.phoneKE} kind="tel" /> (KE)
        </li>
      </ul>
    </div>
  );
}

export function ApplyForm({ onSent }: ApplyFormProps) {
  const { form } = APPLY;
  const { fields } = form;
  const { country: siteCountry } = useCountry();

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ApplyErrors>({});
  const [routeCount, setRouteCount] = useState(1);
  const [countryChoice, setCountryChoice] = useState("");
  const [dialOverride, setDialOverride] = useState<string | null>(null);

  // The phone code follows the Country field, or the header's country switch until a country is chosen.
  const countryCode = (APPLY_COUNTRIES.some((c) => c.value === countryChoice) ? countryChoice : siteCountry.code) as CountryCode;
  const dialCode = dialOverride ?? APPLY_DIAL_CODES[countryCode];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // The text fields are uncontrolled, so what the person typed stays in place after a failure.
    const data = new FormData(e.currentTarget);
    const input: ApplyInput = {
      name: String(data.get("name") ?? ""),
      business: String(data.get("business") ?? ""),
      dialCode,
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      country: countryChoice,
      offer: String(data.get("offer") ?? ""),
      routes: Array.from({ length: routeCount }, (_, i) => ({
        from: String(data.get(`routeFrom${i}`) ?? ""),
        to: String(data.get(`routeTo${i}`) ?? ""),
      })),
      capacity: String(data.get("capacity") ?? ""),
      consent: data.get("consent") !== null,
    };

    const found = validateApply(input);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (res.ok && result?.ok === true) {
        onSent(firstName(input.name), input.email.trim());
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className={styles.wrap}>
      <Card tone="raised" padded={false} className={styles.card}>
        <form onSubmit={onSubmit} noValidate className={styles.form} aria-busy={status === "sending" || undefined}>
          <h2 className={styles.title}>{form.title}</h2>

          <div className={styles.pair}>
            <Field
              name="name"
              label={fields.name.label}
              placeholder={fields.name.placeholder}
              autoComplete="name"
              maxLength={APPLY_LIMITS.name}
              required
              error={errors.name}
            />
            <Field
              name="business"
              label={fields.business.label}
              placeholder={fields.business.placeholder}
              autoComplete="organization"
              maxLength={APPLY_LIMITS.business}
              required
              error={errors.business}
            />
          </div>

          <div className={styles.pair}>
            <PhoneField
              name="phone"
              label={fields.phone.label}
              placeholder={fields.phone.placeholder}
              autoComplete="tel-national"
              maxLength={APPLY_LIMITS.phone}
              required
              dialCode={dialCode}
              dialOptions={APPLY_DIAL_OPTIONS}
              onDialCodeChange={setDialOverride}
              error={errors.phone}
            />
            <Field
              name="email"
              type="email"
              label={fields.email.label}
              placeholder={fields.email.placeholder}
              autoComplete="email"
              maxLength={APPLY_LIMITS.email}
              required
              error={errors.email}
            />
          </div>

          <div className={styles.pair}>
            <SelectField
              name="country"
              label={fields.country.label}
              placeholder={fields.country.placeholder}
              options={APPLY_COUNTRIES}
              value={countryChoice}
              onChange={(e) => {
                setCountryChoice(e.target.value);
                setDialOverride(null);
              }}
              required
              error={errors.country}
            />
            <SelectField
              name="offer"
              label={fields.offer.label}
              placeholder={fields.offer.placeholder}
              options={APPLY_OFFERS}
              required
              error={errors.offer}
            />
          </div>

          <div className={styles.routes}>
            {Array.from({ length: routeCount }, (_, i) => (
              <div key={i} className={styles.pair}>
                <Field
                  name={`routeFrom${i}`}
                  label={i === 0 ? fields.routeFrom.label : `Route ${i + 1} from`}
                  placeholder={fields.routeFrom.placeholder}
                  maxLength={APPLY_LIMITS.place}
                  autoComplete="off"
                  required
                />
                <Field
                  name={`routeTo${i}`}
                  label={i === 0 ? fields.routeTo.label : `Route ${i + 1} to`}
                  placeholder={fields.routeTo.placeholder}
                  maxLength={APPLY_LIMITS.place}
                  autoComplete="off"
                  required
                />
              </div>
            ))}
            {errors.routes ? (
              <p className={styles.error} role="alert">
                {errors.routes}
              </p>
            ) : null}
            {routeCount < APPLY_LIMITS.routes ? (
              <button type="button" className={styles.addRoute} onClick={() => setRouteCount((c) => c + 1)}>
                {form.addRoute}
              </button>
            ) : null}
          </div>

          <Field
            name="capacity"
            label={fields.capacity.label}
            placeholder={fields.capacity.placeholder}
            maxLength={APPLY_LIMITS.capacity}
            autoComplete="off"
            required
            error={errors.capacity}
          />

          <div className={styles.consent}>
            <label className={styles.consentLabel}>
              <input
                type="checkbox"
                name="consent"
                className={styles.checkbox}
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? "apply-consent-error" : undefined}
              />
              <span>
                I agree to the privacy notice.
                <Link href={APPLY.next.privacy.href} className={styles.link}>
                  Read the privacy notice
                </Link>
              </span>
            </label>
            {errors.consent ? (
              <p id="apply-consent-error" className={styles.error} role="alert">
                {errors.consent}
              </p>
            ) : null}
          </div>

          <div className={styles.actions}>
            {status === "failed" ? <FailedPanel /> : null}
            <Button type="submit" fullWidth loading={status === "sending"} loadingLabel={form.sending}>
              {status === "failed" ? form.retry : form.submit}
            </Button>
            <p className={styles.note}>{form.note}</p>
          </div>
        </form>
      </Card>
    </div>
  );
}
