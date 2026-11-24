import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { CONTACT } from "@/content/contact";
import { COMPANY } from "@/content/site";
import { ContactLine } from "./ContactLine";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./ContactInfo.module.css";

export function ContactInfo() {
  const { hero, info, whatsapp } = CONTACT;
  return (
    <div className={styles.info}>
      <div className={styles.heading}>
        <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          <PageTitle title={hero.title} />
        </h1>
        <p className={`${styles.lead} ${enter.leadIn}`}>{hero.lead}</p>
      </div>

      <ul className={`${styles.cards} ${enter.actionsIn}`}>
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
          </span>
        </Card>
        {whatsapp.enabled ? (
          <li>
            {whatsapp.href ? (
              <a
                className={styles.whatsapp}
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.labelGroup}>
                  <Icon name="whatsapp" size={24} />
                  <span>{whatsapp.label}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
            ) : (
              <div className={`${styles.whatsapp} ${styles.inactive}`}>
                <span className={styles.labelGroup}>
                  <Icon name="whatsapp" size={24} />
                  <span>{whatsapp.label}</span>
                </span>
                <span className="visually-hidden">(not available yet)</span>
              </div>
            )}
          </li>
        ) : null}
      </ul>
    </div>
  );
}
