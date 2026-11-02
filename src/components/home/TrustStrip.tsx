import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME } from "@/content/home";
import styles from "./TrustStrip.module.css";

export function TrustStrip() {
  const { title, items } = HOME.trust;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <Card className={styles.card}>
              <span className={styles.icon}>
                <Icon name={item.icon} />
              </span>
              <span className={styles.label}>{item.label}</span>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
