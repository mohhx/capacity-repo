import { PATH_STEPS } from "@/content/how-it-works";
import styles from "./BookingPath.module.css";

export function BookingPath() {
  return (
    <ol className={styles.path}>
      {PATH_STEPS.map((step) => (
        <li key={step.id} className={styles.item}>
          <div className={`${styles.box} ${step.highlight ? styles.highlight : ""}`}>
            <span className={styles.label}>{step.label}</span>
            {step.note ? <span className={styles.note}>{step.note}</span> : null}
          </div>
          {step.branch ? (
            <div className={`${styles.branch} ${step.branch.tone === "danger" ? styles.danger : ""}`}>
              <span className={styles.branchLine} aria-hidden="true" />
              <span className={styles.branchBox}>{step.branch.label}</span>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
