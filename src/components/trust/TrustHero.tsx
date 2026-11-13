import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TRUST } from "@/content/trust-and-safety";
import styles from "./TrustHero.module.css";

export function TrustHero() {
  const { eyebrow, title, accent, lead, primaryCta, secondaryCta } = TRUST.hero;
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>
          {title} <span className={styles.accent}>{accent}</span>
        </h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <div className={styles.badge} aria-hidden="true">
        <Icon name="verified" size={120} />
      </div>
    </section>
  );
}
