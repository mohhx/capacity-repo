import type { Metadata } from "next";
import { FaqContact } from "@/components/faq/FaqContact";
import { FaqView } from "@/components/faq/FaqView";
import { FAQ } from "@/content/faq";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  const { hero } = FAQ;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          {hero.title} <span className={styles.accent}>{hero.accent}</span>
        </h1>
      </div>
      <FaqView />
      <FaqContact />
    </main>
  );
}
