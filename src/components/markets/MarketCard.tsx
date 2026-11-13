import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COUNTRIES, type CountryCode } from "@/config/platform";
import styles from "./MarketCard.module.css";

interface MarketCardProps {
  code: CountryCode;
  launchRoutes: string;
  acceptedIds: string;
  example: string;
}

export function MarketCard({
  code,
  launchRoutes,
  acceptedIds,
  example,
}: MarketCardProps) {
  const country = COUNTRIES[code];

  return (
    <div id={`market-${code}`} className={styles.section}>
      <Card as="article" tone="raised" className={styles.card}>
        <div className={styles.header}>
          <div>
            <span className={styles.countryCode}>{country.code}</span>
            <h2 className={styles.countryName}>{country.name}</h2>
          </div>
          <Badge>Coming soon</Badge>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.label}>Currency</span>
            <span className={styles.value}>{country.currencyLabel}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Payment methods</span>
            <span className={styles.value}>
              {country.paymentMethods.join(" · ")}
            </span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Launch routes</span>
            <span className={styles.value}>{launchRoutes}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Accepted IDs</span>
            <span className={styles.value}>{acceptedIds}</span>
          </div>

          <div className={styles.example}>
            <span className={styles.label}>Local market example</span>
            <p className={styles.value}>{example}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
