import { Button } from "@/components/ui/Button";
import { HOME } from "@/content/home";
import styles from "./Hero.module.css";

export function Hero() {
  const { eyebrow, titleLines, titleAccent, lead, primaryCta, secondaryCta } = HOME.hero;
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>
          {titleLines.join(" ")} <span className={styles.accent}>{titleAccent}</span>
        </h1>
        <p className={styles.lead}>
          {lead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className={styles.actions}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <div className={styles.panel} aria-hidden="true">
        <span className={styles.dot} style={{ left: "32%" }} />
        <span className={styles.dot} style={{ left: "74%" }} />
      </div>
    </section>
  );
}
