import type { Metadata } from "next";
import { CostCard } from "@/components/for-providers/CostCard";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PricingAudience } from "@/components/pricing/PricingAudience";
import { PricingExtras } from "@/components/pricing/PricingExtras";
import { Button } from "@/components/ui/Button";
import { PRICING } from "@/content/pricing";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Pricing and fees" };

export default function PricingPage() {
  const { hero, example, closing } = PRICING;
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.stack}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 className={styles.title}>
              {hero.title} <span className={styles.accent}>{hero.accent}</span>
            </h1>
            <p className={styles.lead}>{hero.lead}</p>
            <div className={styles.actions}>
              <Button href={hero.cta.href}>{hero.cta.label}</Button>
            </div>
          </div>
          <div className={styles.example}>
            <h2 className={styles.exampleTitle}>{example.title}</h2>
            <CostCard withHeading={false} receiveLabel={example.receiveLabel} showSplit />
          </div>
        </section>
        <PricingAudience />
        <PricingExtras />
      </div>
      <ClosingCta title={closing.title} text={closing.text} cta={closing.cta} textHref={closing.textHref} roomy />
    </main>
  );
}
