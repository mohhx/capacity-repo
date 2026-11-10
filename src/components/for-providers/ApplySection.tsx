import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_PROVIDERS } from "@/content/for-providers";
import { CostCard } from "./CostCard";
import styles from "./ApplySection.module.css";

function Check() {
  return (
    <svg className={styles.check} width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 11.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ApplySection() {
  const { apply } = FOR_PROVIDERS;
  return (
    <section className={styles.section}>
      <div className={styles.col}>
        <SectionHeading>{apply.title}</SectionHeading>
        <Card className={styles.checklist}>
          <ul className={styles.list}>
            {apply.items.map((item) => (
              <li key={item} className={styles.item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className={styles.col}>
        <CostCard />
      </div>
    </section>
  );
}
