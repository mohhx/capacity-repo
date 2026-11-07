import type { CSSProperties } from "react";
import styles from "./Stepper.module.css";

interface Step {
  label: string;
  caption?: string;
}

export function Stepper({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className={styles.list} style={{ "--steps": steps.length } as CSSProperties}>
      {steps.map((s, i) => (
        <li key={s.label} className={styles.item}>
          <span className={styles.number} aria-hidden="true">
            {i + 1}
          </span>
          <span className={styles.text}>
            <span className={styles.label}>{s.label}</span>
            {s.caption ? <span className={styles.caption}>{s.caption}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
