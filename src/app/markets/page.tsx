import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { MarketCard } from "@/components/markets/MarketCard";
import { MarketSelector } from "@/components/markets/MarketSelector";
import { ACTIVE_COUNTRIES } from "@/config/platform";
import { MARKETS } from "@/content/markets";
import { PageTitle } from "@/components/ui/PageTitle";
import { Reveal } from "@/components/ui/Reveal";
import enter from "@/components/ui/Enter.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Discover the markets where CAPACITY is building a smarter infrastructure exchange, starting with Nigeria.",
};

export default function MarketsPage() {
  const { hero, countries, cta } = MARKETS;

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.stack}>
        <section className={styles.hero}>
          <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{hero.eyebrow}</p>

          <h1 className={styles.title}>
            <PageTitle title={hero.title} accent={hero.accent} accentClassName={styles.accent} gap={false} />
          </h1>

          <p className={`${styles.lead} ${enter.leadIn}`}>{hero.description}</p>
        </section>

        <section className={styles.markets} aria-label="Available markets">
          {ACTIVE_COUNTRIES.length > 1 ? <MarketSelector /> : null}

          <div className={styles.grid}>
            {countries.filter((market) => ACTIVE_COUNTRIES.includes(market.code)).map((market) => (
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

      <Reveal>
        <ClosingCta
          title={cta.title}
          text={cta.text}
          cta={cta.button}
          textHref={cta.textHref}
          roomy
        />
      </Reveal>
    </main>
  );
}
