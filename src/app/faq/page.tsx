import type { Metadata } from "next";
import { FaqContact } from "@/components/faq/FaqContact";
import { FaqView } from "@/components/faq/FaqView";
import { FAQ } from "@/content/faq";
import { PageTitle } from "@/components/ui/PageTitle";
import enter from "@/components/ui/Enter.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  const { hero } = FAQ;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.heading}>
        <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          <PageTitle title={hero.title} accent={hero.accent} accentClassName={styles.accent} />
        </h1>
      </div>
      <FaqView />
      <FaqContact />
    </main>
  );
}
