import { Button } from "@/components/ui/Button";
import { HOME_LOWER } from "@/content/home-lower";
import { PRIMARY_CTA } from "@/content/site";
import styles from "./ClosingCta.module.css";

export function ClosingCta() {
  const { title, text } = HOME_LOWER.cta;
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
      </div>
    </section>
  );
}
