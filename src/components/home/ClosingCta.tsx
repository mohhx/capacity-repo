import { Button } from "@/components/ui/Button";
import { HOME_LOWER } from "@/content/home-lower";
import { PRIMARY_CTA } from "@/content/site";
import styles from "./ClosingCta.module.css";

interface ClosingCtaProps {
  title?: string;
  text?: string;
  cta?: { label: string; href: string };
  /** Taller panel with more padding, as in the How it works Figma frame. */
  roomy?: boolean;
}

/** Home uses the defaults. Inner pages pass their own title, text and button. */
export function ClosingCta({ title = HOME_LOWER.cta.title, text = HOME_LOWER.cta.text, cta = PRIMARY_CTA, roomy = false }: ClosingCtaProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.panel} ${roomy ? styles.roomy : ""}`}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <Button href={cta.href}>{cta.label}</Button>
      </div>
    </section>
  );
}
