"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ContactForm } from "./ContactForm";
import { ContactSent } from "./ContactSent";
import styles from "./ContactView.module.css";

interface SentState {
  firstName: string;
  email: string;
}

/** Shows the left column and the form, or replaces the whole content with "Message sent" (as in Figma). */
export function ContactView({ info }: { info: ReactNode }) {
  const [sent, setSent] = useState<SentState | null>(null);

  if (sent) return <ContactSent firstName={sent.firstName} email={sent.email} />;

  return (
    <div className={styles.layout}>
      {info}
      <ContactForm onSent={(firstName, email) => setSent({ firstName, email })} />
    </div>
  );
}
