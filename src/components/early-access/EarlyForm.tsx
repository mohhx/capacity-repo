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
import { PillGroup } from "@/components/ui/PillGroup";
import { SelectField } from "@/components/ui/SelectField";
import { ACTIVE_COUNTRIES } from "@/config/platform";
import type { CountryCode } from "@/config/platform";
import { APPLY_COUNTRIES, APPLY_DIAL_CODES, APPLY_DIAL_OPTIONS } from "@/content/apply";
import { CONTACT } from "@/content/contact";
import { EARLY, EARLY_FREQUENCY, EARLY_NEEDS } from "@/content/early-access";
import { COMPANY } from "@/content/site";
import { EARLY_LIMITS, validateEarly } from "@/lib/early-access";
import type { EarlyErrors, EarlyInput } from "@/lib/early-access";
import { firstName } from "@/lib/contact";
// Shares the Apply form's styles, so the two forms always look the same.
import styles from "@/components/apply/ApplyForm.module.css";

type Status = "idle" | "sending" | "failed";

interface EarlyFormProps {
  /** Called once the request was accepted. The parent swaps the page for the "sent" panel. */
  onSent: (firstName: string, email: string) => void;
}

function FailedPanel() {
  const { failed } = EARLY;
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
          {info.phoneLabel}: <ContactLine item={COMPANY.phoneNG} kind="tel" />
        </li>
      </ul>
    </div>
  );
}

export function EarlyForm({ onSent }: EarlyFormProps) {
  const { form } = EARLY;
  const { fields } = form;
  const { country: siteCountry } = useCountry();

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EarlyErrors>({});
  const [countryChoice, setCountryChoice] = useState<string>(ACTIVE_COUNTRIES.length === 1 ? ACTIVE_COUNTRIES[0] : "");
  const [dialOverride, setDialOverride] = useState<string | null>(null);

  // The phone code follows the Country field, or the header's country switch until a country is chosen.
  const countryCode = (APPLY_COUNTRIES.some((c) => c.value === countryChoice) ? countryChoice : siteCountry.code) as CountryCode;
  const dialCode = dialOverride ?? APPLY_DIAL_CODES[countryCode];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // The text fields are uncontrolled, so what the person typed stays in place after a failure.
    const data = new FormData(e.currentTarget);
    const input: EarlyInput = {
      name: String(data.get("name") ?? ""),
      business: String(data.get("business") ?? ""),
      dialCode,
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      country: countryChoice,
      route: String(data.get("route") ?? ""),
      need: String(data.get("need") ?? ""),
      frequency: String(data.get("frequency") ?? ""),
      consent: data.get("consent") !== null,
    };

    const found = validateEarly(input);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/early-access", {
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
              maxLength={EARLY_LIMITS.name}
              required
              error={errors.name}
            />
            <Field
              name="business"
              label={fields.business.label}
              placeholder={fields.business.placeholder}
              autoComplete="organization"
              maxLength={EARLY_LIMITS.business}
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
              maxLength={EARLY_LIMITS.phone}
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
              maxLength={EARLY_LIMITS.email}
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
            <Field
              name="route"
              label={fields.route.label}
              placeholder={fields.route.placeholder}
              maxLength={EARLY_LIMITS.route}
              autoComplete="off"
              required
              error={errors.route}
            />
          </div>

          <SelectField
            name="need"
            label={fields.need.label}
            placeholder={fields.need.placeholder}
            options={EARLY_NEEDS}
            required
            error={errors.need}
          />

          <PillGroup name="frequency" label={fields.frequency.label} options={EARLY_FREQUENCY} error={errors.frequency} />

          <div className={styles.consent}>
            <label className={styles.consentLabel}>
              <input
                type="checkbox"
                name="consent"
                className={styles.checkbox}
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? "early-consent-error" : undefined}
              />
              <span>
                I agree to the privacy notice.
                <Link href={EARLY.next.privacy.href} className={styles.link}>
                  Read the privacy notice
                </Link>
              </span>
            </label>
            {errors.consent ? (
              <p id="early-consent-error" className={styles.error} role="alert">
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
