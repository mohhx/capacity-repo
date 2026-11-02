import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME } from "@/content/home";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  const { title, steps } = HOME.how;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <ol className={styles.grid}>
        {steps.map((step) => (
          <li key={step.id}>
            <Card className={styles.card}>
              <span className={styles.number}>{step.id}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
