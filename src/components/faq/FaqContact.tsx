import { Button } from "@/components/ui/Button";
import { FAQ } from "@/content/faq";
import { COMPANY } from "@/content/site";
import styles from "./FaqContact.module.css";

/** "Still have a question?" panel. The email is the Figma placeholder (TBC). */
export function FaqContact() {
  const { title, writeTo, cta } = FAQ.contact;
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>
            {writeTo} {COMPANY.email.value}
          </p>
        </div>
        <Button href={cta.href} variant="secondary" className={styles.button}>
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
