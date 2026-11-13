import { Card } from "@/components/ui/Card";
import { CONTACT } from "@/content/contact";
import { COMPANY } from "@/content/site";
import { ContactLine } from "./ContactLine";
import styles from "./ContactInfo.module.css";

export function ContactInfo() {
  const { hero, info, whatsapp } = CONTACT;
  return (
    <div className={styles.info}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.lead}>{hero.lead}</p>
      </div>

      <ul className={styles.cards}>
        <Card as="li" padded={false} className={styles.card}>
          <span className={styles.label}>{info.emailLabel}</span>
          <span className={styles.value}>
            <ContactLine item={COMPANY.email} kind="mail" />
          </span>
        </Card>
        <Card as="li" padded={false} className={styles.card}>
          <span className={styles.label}>{info.phoneLabel}</span>
          <span className={styles.value}>
            <ContactLine item={COMPANY.phoneNG} kind="tel" />
            <span aria-hidden="true"> · </span>
            <ContactLine item={COMPANY.phoneKE} kind="tel" />
          </span>
        </Card>
        {whatsapp.enabled && whatsapp.href ? (
          <li>
            <a className={styles.whatsapp} href={whatsapp.href} target="_blank" rel="noopener noreferrer">
              <span>{whatsapp.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
