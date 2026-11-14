import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { APPLY } from "@/content/apply";
import styles from "./ApplyIntro.module.css";

export function ApplyHead() {
  const { back, title, lead } = APPLY.hero;
  return (
    <header className={styles.head}>
      <Link href={back.href} className={styles.back}>
        {back.label}
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
    </header>
  );
}

export function ApplyNext() {
  const { title, steps, footnote, privacy } = APPLY.next;
  return (
    <section className={styles.next}>
      <h2 className={styles.nextTitle}>{title}</h2>
      <ol className={styles.list}>
        {steps.map((step, i) => (
          <Card as="li" key={step} padded={false} className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              {i + 1}
            </span>
            <span>{step}</span>
          </Card>
        ))}
      </ol>
      <p className={styles.footnote}>
        {footnote}{" "}
        <Link href={privacy.href} className={styles.privacy}>
          {privacy.label}
        </Link>
      </p>
    </section>
  );
}
