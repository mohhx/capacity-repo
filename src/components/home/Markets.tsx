import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME } from "@/content/home";
import styles from "./Markets.module.css";

export function Markets() {
  const { title, items } = HOME.markets;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <div className={styles.grid}>
        {items.map((m) => (
          <Card key={m.id} as="article" className={styles.card}>
            <h3 className={styles.name}>{m.name}</h3>
            <p className={styles.line}>{m.line}</p>
            <p className={styles.note}>{m.note}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
