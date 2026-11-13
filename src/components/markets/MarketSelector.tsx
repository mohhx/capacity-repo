"use client";

import { useEffect, useState } from "react";
import type { CountryCode } from "@/config/platform";
import { COUNTRIES } from "@/config/platform";
import styles from "./MarketSelector.module.css";

const MARKET_CODES: CountryCode[] = ["NG", "KE"];

export function MarketSelector() {
  const [activeCountry, setActiveCountry] = useState<CountryCode>("NG");

  useEffect(() => {
    const cards = MARKET_CODES.map((code) =>
      document.getElementById(`market-${code}`)
    ).filter((card): card is HTMLElement => card !== null);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleCards.length) {
          const code = visibleCards[0].target.id.replace(
            "market-",
            ""
          ) as CountryCode;

          setActiveCountry(code);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToMarket = (code: CountryCode) => {
    document.getElementById(`market-${code}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveCountry(code);
  };

  return (
    <nav
      className={styles.selector}
      aria-label="Choose a market"
    >
      {MARKET_CODES.map((code) => {
        const country = COUNTRIES[code];
        const active = activeCountry === code;

        return (
          <button
            key={code}
            type="button"
            className={`${styles.button} ${
              active ? styles.active : ""
            }`}
            aria-pressed={active}
            onClick={() => scrollToMarket(code)}
          >
            {country.name}
          </button>
        );
      })}
    </nav>
  );
}
