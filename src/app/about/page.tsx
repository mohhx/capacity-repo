import type { Metadata } from "next";
import { AboutCards } from "@/components/about/AboutCards";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ABOUT } from "@/content/about";
import { PageTitle } from "@/components/ui/PageTitle";
import { Reveal } from "@/components/ui/Reveal";
import enter from "@/components/ui/Enter.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const { hero, closing } = ABOUT;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.stack}>
        <div className={styles.heading}>
          <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>
          <h1 className={styles.title}>
            <PageTitle title={hero.title} accent={hero.accent} accentClassName={styles.accent} />
          </h1>
          <p className={`${styles.lead} ${enter.leadIn}`}>{hero.lead}</p>
        </div>
        <Reveal>
          <AboutCards />
        </Reveal>
      </div>
      <Reveal>
        <ClosingCta title={closing.title} text={closing.text} cta={closing.cta} textHref={closing.textHref} roomy />
      </Reveal>
    </main>
  );
}
