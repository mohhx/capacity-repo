"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ApplyForm } from "./ApplyForm";
import { ApplySent } from "./ApplySent";
import styles from "./ApplyView.module.css";

interface SentState {
  firstName: string;
  email: string;
}

/** Heading and form on the left and right (desktop), or heading, form, then the steps (phone). */
export function ApplyView({ head, next }: { head: ReactNode; next: ReactNode }) {
  const [sent, setSent] = useState<SentState | null>(null);

  if (sent) return <ApplySent firstName={sent.firstName} email={sent.email} />;

  return (
    <div className={styles.layout}>
      <div className={styles.head}>{head}</div>
      <div className={styles.form}>
        <ApplyForm onSent={(firstName, email) => setSent({ firstName, email })} />
      </div>
      <div className={styles.next}>{next}</div>
    </div>
  );
}
