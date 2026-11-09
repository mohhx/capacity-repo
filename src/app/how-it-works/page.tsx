import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { HowItWorksView } from "@/components/how-it-works/HowItWorksView";
import { HOW_IT_WORKS } from "@/content/how-it-works";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  const { hero, closing } = HOW_IT_WORKS;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          {hero.title} <span className={styles.accent}>{hero.accent}</span>
        </h1>
      </div>
      <HowItWorksView />
      <ClosingCta title={closing.title} text={closing.text} cta={closing.cta} />
    </main>
  );
}
