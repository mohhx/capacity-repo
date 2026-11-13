import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { TRUST } from "@/content/trust-and-safety";
import styles from "./TrustCards.module.css";

export function TrustCards() {
  return (
    <section className={styles.section} aria-label="How CAPACITY keeps bookings safe">
      <ul className={styles.grid}>
        {TRUST.cards.map((card) => (
          <li key={card.id}>
            <Card as="article" padded={false} className={styles.card}>
              <div className={styles.head}>
                <Icon name={card.icon} size={32} />
                <h2 className={styles.title}>{card.title}</h2>
              </div>
              <p className={styles.text}>{card.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
