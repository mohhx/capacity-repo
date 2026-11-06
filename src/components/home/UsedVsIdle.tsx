import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { HOME } from "@/content/home";
import styles from "./UsedVsIdle.module.css";

export function UsedVsIdle() {
  const { title, text, asset, usedPercent, usedLabel, idleLabel } = HOME.idle;
  return (
    <section className={styles.section}>
      <Card className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <Badge>Illustrative</Badge>
        </div>
        <div className={styles.chart}>
          <p className={styles.vehicle}>{asset}</p>
          <div className={styles.bar} role="img" aria-label={`${asset}: ${usedLabel}, ${idleLabel}. Illustrative.`}>
            <span className={styles.used} style={{ width: `${usedPercent}%` }}>
              {usedLabel}
            </span>
            <span className={styles.idle}>{idleLabel}</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
