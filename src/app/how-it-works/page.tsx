import type { Metadata } from "next";
import { HowItWorksView } from "@/components/how-it-works/HowItWorksView";
import { HOW_IT_WORKS } from "@/content/how-it-works";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  const { hero } = HOW_IT_WORKS;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.heading}>
        <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          <PageTitle title={hero.title} accent={hero.accent} accentClassName={styles.accent} />
        </h1>
        <p className={`${styles.subtitle} ${enter.leadIn}`}>{hero.subtitle}</p>
      </div>
      <HowItWorksView />
    </main>
  );
}
