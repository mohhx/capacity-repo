"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONTACT, contactSentText } from "@/content/contact";
import styles from "./ContactSent.module.css";

interface ContactSentProps {
  firstName: string;
  email: string;
}

export function ContactSent({ firstName, email }: ContactSentProps) {
  const { sent } = CONTACT;
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The page content was replaced, so bring the person to the top and announce the new heading.
  useEffect(() => {
    window.scrollTo({ top: 0 });
    headingRef.current?.focus();
  }, []);

  return (
    <section className={styles.sent}>
      <svg className={styles.check} width="104" height="104" viewBox="0 0 104 104" fill="none" aria-hidden="true">
        <circle cx="52" cy="52" r="50" stroke="currentColor" strokeWidth="3" />
        <path d="M26 55.6L46.6 70L79.8 30.2" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h1 ref={headingRef} tabIndex={-1} className={styles.title}>
        {sent.title}
      </h1>
      <p className={styles.text}>{contactSentText(firstName, email)}</p>

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

      <div className={styles.actions}>
        <Button href={sent.home.href} variant="secondary" className={styles.home}>
          {sent.home.label}
        </Button>
        <Link href={sent.faq.href} className={styles.faq}>
          {sent.faq.label}
        </Link>
      </div>
    </section>
  );
}
