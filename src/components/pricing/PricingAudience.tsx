import { Card } from "@/components/ui/Card";
import { PRICING } from "@/content/pricing";
import styles from "./PricingAudience.module.css";

/** The For providers and For businesses cards. */
export function PricingAudience() {
  return (
    <section className={styles.grid}>
      {PRICING.audience.map((group) => (
        <Card key={group.id} className={styles.card}>
          <h2 className={styles.title}>{group.title}</h2>
          <dl className={styles.list}>
            {group.items.map((item) => (
              <div key={item.label} className={styles.item}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.text}>{item.text}</dd>
              </div>
            ))}
          </dl>
        </Card>
      ))}
    </section>
  );
}
