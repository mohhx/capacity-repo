import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_BUSINESSES } from "@/content/for-businesses";
import styles from "./PayingSection.module.css";

export function PayingSection() {
  const { pay } = FOR_BUSINESSES;
  return (
    <section className={styles.section}>
      <div className={styles.col}>
        <SectionHeading lead={pay.intro}>{pay.title}</SectionHeading>
        <Card>
          <div className={styles.tags}>
            {pay.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <dl className={styles.rows}>
            {pay.rows.map((r) => (
              <div key={r.label} className={styles.row}>
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.total}>
            <span>{pay.total.label}</span>
            <strong>{pay.total.value}</strong>
          </div>
        </Card>
      </div>
      <div className={styles.col}>
        <SectionHeading>{pay.methodsTitle}</SectionHeading>
        <ul className={styles.methods}>
          {pay.methods.map((m) => (
            <li key={m.name}>
              <Card className={styles.method}>
                <div>
                  <p className={styles.methodName}>{m.name}</p>
                  <p className={styles.methodNote}>{m.note}</p>
                </div>
                <Badge>{m.tag}</Badge>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
