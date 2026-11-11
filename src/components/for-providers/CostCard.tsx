"use client";

import { useCountry } from "@/components/layout/CountryProvider";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLATFORM, commissionPercent } from "@/config/platform";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./CostCard.module.css";

interface CostCardProps {
  /** Show the "What it costs" heading and lead above the card. Default true (For providers page). */
  withHeading?: boolean;
  /** Label for the total row. Default "You receive". */
  receiveLabel?: string;
  /** Show the "90% to the provider · 10% to CAPACITY" caption under the bar. Default false. */
  showSplit?: boolean;
}

export function CostCard({ withHeading = true, receiveLabel = "You receive", showSplit = false }: CostCardProps) {
  const { cost } = FOR_PROVIDERS;
  const { country } = useCountry();
  const pct = commissionPercent();
  const gross = cost.amount;
  const fee = Math.round(gross * PLATFORM.commissionRate.value);
  const net = gross - fee;

  const symbol = country.currencySymbol;
  const money = (n: number) => `${symbol}${symbol.length > 1 ? " " : ""}${n.toLocaleString("en-US")}`;

  const card = (
    <Card>
      <div className={styles.tags}>
        <Badge>Illustrative</Badge>
      </div>
      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt>Customer pays</dt>
          <dd>{money(gross)}</dd>
        </div>
        <div className={styles.row}>
          <dt>CAPACITY fee ({pct}%)</dt>
          <dd>{`− ${money(fee)}`}</dd>
        </div>
      </dl>
      <div className={styles.total}>
        <span>{receiveLabel}</span>
        <strong>{money(net)}</strong>
      </div>
      <div
        className={styles.bar}
        role="img"
        aria-label={`${receiveLabel} ${money(net)} and CAPACITY keeps ${money(fee)}. Illustrative.`}
      >
        <span className={styles.net} style={{ width: `${100 - pct}%` }} />
        <span className={styles.fee} />
      </div>
      {showSplit ? (
        <p className={styles.split}>
          {100 - pct}% to the provider · {pct}% to CAPACITY
        </p>
      ) : null}
    </Card>
  );

  if (!withHeading) return card;

  return (
    <>
      <SectionHeading lead={`CAPACITY takes ${pct} percent of each completed booking, from your payout.`}>
        {cost.title}
      </SectionHeading>
      {card}
    </>
  );
}
