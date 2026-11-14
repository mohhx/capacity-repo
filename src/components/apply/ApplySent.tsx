"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { APPLY, applySentText } from "@/content/apply";
import styles from "./ApplySent.module.css";

interface ApplySentProps {
  firstName: string;
  email: string;
}

/** Only reachable when an application was really accepted (or locally with CONTACT_DEMO=1). */
export function ApplySent({ firstName, email }: ApplySentProps) {
  const { sent } = APPLY;
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The page content was replaced, so bring the person to the top and announce the new heading.
  useEffect(() => {
    window.scrollTo({ top: 0 });
    headingRef.current?.focus();
  }, []);

  return (
    <section className={styles.sent}>
      <svg className={styles.check} width="88" height="88" viewBox="0 0 104 104" fill="none" aria-hidden="true">
        <circle cx="52" cy="52" r="50" stroke="currentColor" strokeWidth="3" />
        <path d="M26 55.6L46.6 70L79.8 30.2" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h1 ref={headingRef} tabIndex={-1} className={styles.title}>
        {sent.title}
      </h1>
      <p className={styles.text}>{applySentText(firstName, email)}</p>
      <ol className={styles.steps}>
        {sent.steps.map((step, i) => (
          <Card as="li" key={step} padded={false} className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              {i + 1}
            </span>
            <span>{step}</span>
          </Card>
        ))}
      </ol>
      <Button href={sent.home.href} variant="secondary">
        {sent.home.label}
      </Button>
    </section>
  );
}
