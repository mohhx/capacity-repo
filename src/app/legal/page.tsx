import type { Metadata } from "next";
import { LegalList } from "@/components/legal/LegalList";
import { LEGAL } from "@/content/legal";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Legal and privacy" };

export default function LegalPage() {
  const { hero } = LEGAL;
  return (
    <main className={`container ${styles.page}`}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          {hero.title} <span className={styles.accent}>{hero.accent}</span>
        </h1>
        <p className={styles.lead}>{hero.lead}</p>
      </header>
      <LegalList />
    </main>
  );
}
