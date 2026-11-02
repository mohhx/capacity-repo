"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { HOME_LOWER } from "@/content/home-lower";
import styles from "./RouteForm.module.css";

type Errors = Partial<Record<"from" | "to" | "goods" | "contact" | "consent", string>>;

export function RouteForm() {
  const { title, fields, consentError, submit, notice } = HOME_LOWER.route;
  const [errors, setErrors] = useState<Errors>({});
  const [showNotice, setShowNotice] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    for (const f of fields) {
      if (!String(data.get(f.name) ?? "").trim()) next[f.name] = f.error;
    }
    if (!data.get("consent")) next.consent = consentError;
    setErrors(next);
    // Interface only: submission is not wired yet, so nothing is sent.
    setShowNotice(Object.keys(next).length === 0);
  }

  return (
    <section className={styles.section}>
      <Card tone="raised" className={styles.card}>
        <form onSubmit={onSubmit} noValidate className={styles.form}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.fields}>
            {fields.map((f) => (
              <Field key={f.name} name={f.name} label={f.label} placeholder={f.placeholder} error={errors[f.name]} />
            ))}
          </div>
          {showNotice ? (
            <Banner tone="info" title={notice.title}>
              {notice.text}
            </Banner>
          ) : null}
          <div className={styles.bottom}>
            <div className={styles.consent}>
              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  name="consent"
                  className={styles.checkbox}
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "route-consent-error" : undefined}
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
                <p id="route-consent-error" className={styles.error} role="alert">
                  {errors.consent}
                </p>
              ) : null}
            </div>
            <Button type="submit">{submit}</Button>
          </div>
        </form>
      </Card>
    </section>
  );
}
