import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { HOME } from "@/content/home";
import styles from "./AudiencePanels.module.css";

export function AudiencePanels() {
  return (
    <section className={styles.section}>
      {HOME.audiences.map((a) => (
        <Card key={a.id} as="article" className={styles.panel}>
          <h2 className={styles.title}>{a.title}</h2>
          <p className={styles.intro}>{a.intro}</p>
          <ul className={styles.list}>
            {a.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href={a.cta.href} className={styles.link}>
            {a.cta.label}
          </Link>
        </Card>
      ))}
    </section>
  );
}
