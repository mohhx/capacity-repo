import type { Metadata } from "next";
import { AboutCards } from "@/components/about/AboutCards";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ABOUT } from "@/content/about";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const { hero, closing } = ABOUT;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.stack}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>
            {hero.title} <span className={styles.accent}>{hero.accent}</span>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
        </div>
        <AboutCards />
      </div>
      <ClosingCta title={closing.title} text={closing.text} cta={closing.cta} textHref={closing.textHref} roomy />
    </main>
  );
}
