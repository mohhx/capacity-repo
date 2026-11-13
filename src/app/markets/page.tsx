import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { MarketCard } from "@/components/markets/MarketCard";
import { MarketSelector } from "@/components/markets/MarketSelector";
import { MARKETS } from "@/content/markets";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Discover the markets where CAPACITY is building a smarter infrastructure exchange, starting with Nigeria and Kenya.",
};

export default function MarketsPage() {
  const { hero, countries, cta } = MARKETS;

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.stack}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.title}>
            {hero.title}
            <span className={styles.accent}>{hero.accent}</span>
          </h1>

          <p className={styles.lead}>{hero.description}</p>
        </section>

        <section className={styles.markets} aria-label="Available markets">
          <MarketSelector />

          <div className={styles.grid}>
            {countries.map((market) => (
              <MarketCard
                key={market.code}
                code={market.code}
                launchRoutes={market.launchRoutes}
                acceptedIds={market.acceptedIds}
                example={market.example}
              />
            ))}
          </div>
        </section>
      </div>

      <ClosingCta
        title={cta.title}
        text={cta.text}
        cta={cta.button}
        textHref={cta.textHref}
        roomy
      />
    </main>
  );
}
