"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";
import { CONTACT, CONTACT_TOPICS } from "@/content/contact";
import { COMPANY } from "@/content/site";
import { CONTACT_LIMITS, firstName, validateContact } from "@/lib/contact";
import type { ContactErrors, ContactInput } from "@/lib/contact";
import { ContactLine } from "./ContactLine";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "failed";

interface ContactFormProps {
  /** Called once the message was accepted. The parent swaps the page for the "Message sent" panel. */
  onSent: (firstName: string, email: string) => void;
}

function FailedPanel() {
  const { failed, info } = CONTACT;
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

export function ContactForm({ onSent }: ContactFormProps) {
  const { form } = CONTACT;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // The fields are uncontrolled, so what the person typed stays in place after a failure.
    const data = new FormData(e.currentTarget);
    const input: ContactInput = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") !== null,
    };

    const found = validateContact(input);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
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
              label={form.fields.name.label}
              placeholder={form.fields.name.placeholder}
              autoComplete="name"
              maxLength={CONTACT_LIMITS.name}
              required
              error={errors.name}
            />
            <Field
              name="email"
              type="email"
              label={form.fields.email.label}
              placeholder={form.fields.email.placeholder}
              autoComplete="email"
              maxLength={CONTACT_LIMITS.email}
              required
              error={errors.email}
            />
          </div>

          <SelectField
            name="topic"
            label={form.fields.topic.label}
            placeholder={form.fields.topic.placeholder}
            options={CONTACT_TOPICS}
            required
            error={errors.topic}
          />

          <TextareaField
            name="message"
            label={form.fields.message.label}
            placeholder={form.fields.message.placeholder}
            maxLength={CONTACT_LIMITS.message}
            required
            error={errors.message}
          />

          <div className={styles.consent}>
            <label className={styles.consentLabel}>
              <input
                type="checkbox"
                name="consent"
                className={styles.checkbox}
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? "contact-consent-error" : undefined}
              />
              <span>
                I agree to the{" "}
                <Link href="/privacy" className={styles.link}>
                  privacy notice
                </Link>
                .
              </span>
            </label>
            {errors.consent ? (
              <p id="contact-consent-error" className={styles.error} role="alert">
                {errors.consent}
              </p>
            ) : null}
          </div>

          <div className={styles.actions}>
            {status === "failed" ? <FailedPanel /> : null}
            <Button type="submit" fullWidth loading={status === "sending"} loadingLabel={form.sending}>
              {status === "failed" ? form.retry : form.submit}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
