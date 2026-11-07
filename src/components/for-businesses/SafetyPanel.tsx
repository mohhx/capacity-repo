import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_BUSINESSES } from "@/content/for-businesses";
import styles from "./SafetyPanel.module.css";

function Check() {
  return (
    <svg className={styles.check} width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 11.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SafetyPanel() {
  const { safety } = FOR_BUSINESSES;
  return (
    <section className={styles.section}>
      <SectionHeading>{safety.title}</SectionHeading>
      <Card className={styles.panel}>
        <ul className={styles.list}>
          {safety.items.map((item) => (
            <li key={item} className={styles.item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
        <Link href={safety.link.href} className={styles.link}>
          {safety.link.label}
        </Link>
      </Card>
    </section>
  );
}
