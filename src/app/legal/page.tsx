import type { Metadata } from "next";
import { LegalList } from "@/components/legal/LegalList";
import { LEGAL } from "@/content/legal";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Legal and privacy" };

export default function LegalPage() {
  const { hero } = LEGAL;
  return (
    <main className={`container ${styles.page}`}>
      <header className={styles.hero}>
        <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          <PageTitle
            title={hero.title}
            accent={hero.accent}
            accentClassName={styles.accent}
          />
        </h1>
        <p className={`${styles.lead} ${enter.leadIn}`}>{hero.lead}</p>
      </header>
      <LegalList />
    </main>
  );
}
