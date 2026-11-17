"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EARLY, earlySentText } from "@/content/early-access";
// Shares the Apply "sent" styles. DRAFT: replace with the Figma "request received" frames.
import styles from "@/components/apply/ApplySent.module.css";

interface EarlySentProps {
  firstName: string;
  email: string;
}

/** Only reachable when a request was really accepted (or locally with CONTACT_DEMO=1). */
export function EarlySent({ firstName, email }: EarlySentProps) {
  const { sent } = EARLY;
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
      <p className={styles.text}>{earlySentText(firstName, email)}</p>
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
