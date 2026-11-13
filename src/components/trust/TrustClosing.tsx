import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TRUST } from "@/content/trust-and-safety";
import styles from "./TrustClosing.module.css";

export function TrustClosing() {
  const { title, text, cta, link } = TRUST.closing;
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <Button href={cta.href} className={styles.button}>
          {cta.label}
        </Button>
        <Link href={link.href} className={styles.link}>
          {link.label}
        </Link>
      </div>
    </section>
  );
}
