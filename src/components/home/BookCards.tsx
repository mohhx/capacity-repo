import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME } from "@/content/home";
import styles from "./BookCards.module.css";

export function BookCards() {
  const { title, items } = HOME.book;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <Card as="article" className={styles.card}>
              <span className={styles.icon}>
                <Icon name={item.icon} />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
