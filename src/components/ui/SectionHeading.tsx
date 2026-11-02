import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  children: ReactNode;
  /** Small mint label above the title, e.g. "THE INVISIBLE INFRASTRUCTURE EXCHANGE". */
  eyebrow?: string;
  lead?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({ children, eyebrow, lead, as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag className={styles.title}>{children}</Tag>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  );
}