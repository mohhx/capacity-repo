import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TRUST } from "@/content/trust-and-safety";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./TrustHero.module.css";

export function TrustHero() {
  const { eyebrow, title, accent, lead, primaryCta, secondaryCta } = TRUST.hero;
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{eyebrow}</p>
        <h1 className={styles.title}>
          <PageTitle title={title} accent={accent} accentClassName={styles.accent} />
        </h1>
        <p className={`${styles.lead} ${enter.leadIn}`}>{lead}</p>
        <div className={`${styles.actions} ${enter.actionsIn}`}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <div className={`${styles.badge} ${styles.badgeIn}`} aria-hidden="true">
        <Icon name="verified" size={120} />
      </div>
    </section>
  );
}
