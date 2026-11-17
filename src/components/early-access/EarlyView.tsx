"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { EarlyForm } from "./EarlyForm";
import { EarlySent } from "./EarlySent";
// Shares the Apply page's two-column layout.
import styles from "@/components/apply/ApplyView.module.css";

interface SentState {
  firstName: string;
  email: string;
}

/** Heading and form on the left and right (desktop), or heading, form, then the steps (phone). */
export function EarlyView({ head, next }: { head: ReactNode; next: ReactNode }) {
  const [sent, setSent] = useState<SentState | null>(null);

  if (sent) return <EarlySent firstName={sent.firstName} email={sent.email} />;

  return (
    <div className={styles.layout}>
      <div className={styles.head}>{head}</div>
      <div className={styles.form}>
        <EarlyForm onSent={(firstName, email) => setSent({ firstName, email })} />
      </div>
      <div className={styles.next}>{next}</div>
    </div>
  );
}
