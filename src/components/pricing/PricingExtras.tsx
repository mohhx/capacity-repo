import { Card } from "@/components/ui/Card";
import { PRICING } from "@/content/pricing";
import styles from "./PricingExtras.module.css";

/** Promoted listings (removable) and Cancellations. If promoted listings is off, cancellations takes the full width. */
export function PricingExtras() {
  const { promote, cancellations } = PRICING;
  return (
    <section className={`${styles.grid} ${promote.enabled ? "" : styles.single}`}>
      {promote.enabled ? (
        <div className={styles.promote}>
          <h2 className={styles.title}>{promote.title}</h2>
          <p className={styles.text}>{promote.text}</p>
          <ul className={styles.chips}>
            {promote.options.map((option) => (
              <li key={option} className={styles.chip}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Card className={styles.cancel}>
        <h2 className={styles.title}>{cancellations.title}</h2>
        <p className={styles.text}>{cancellations.text}</p>
      </Card>
    </section>
  );
}
