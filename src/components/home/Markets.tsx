import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COUNTRIES } from "@/config/platform";
import type { CountryCode } from "@/config/platform";
import { HOME } from "@/content/home";
import { LAUNCH_ROUTES } from "@/content/site";
import styles from "./Markets.module.css";

const ORDER: CountryCode[] = ["NG", "KE"];

/** "Cards", "Bank transfer", "M-Pesa" -> "Cards, bank transfer and M-Pesa" */
function listMethods(methods: readonly string[]): string {
  const parts = methods.map((m, i) => (i === 0 || m === "M-Pesa" ? m : m.toLowerCase()));
  if (parts.length < 2) return parts.join("");
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

export function Markets() {
  const names = ORDER.map((code) => COUNTRIES[code].name);
  return (
    <section className={styles.section}>
      {/* Mobile: heading, two chips and one line (Figma 375). */}
      <div className={styles.mobileOnly}>
        <SectionHeading>Launching in</SectionHeading>
        <ul className={styles.chips}>
          {names.map((name) => (
            <li key={name} className={styles.chip}>
              {name}
            </li>
          ))}
        </ul>
        <p className={styles.chipNote}>Starting on selected routes in {names.join(" and ")}.</p>
      </div>

      {/* Tablet and desktop: two cards (Figma 768 and 1440). */}
      <div className={styles.desktopOnly}>
        <SectionHeading>{HOME.markets.title}</SectionHeading>
        <div className={styles.grid}>
          {ORDER.map((code) => {
            const c = COUNTRIES[code];
            return (
              <Card key={code} as="article" className={styles.card}>
                <h3 className={styles.name}>{c.name}</h3>
                <p className={styles.line}>
                  {c.currencyLabel} · {listMethods(c.paymentMethods)}
                </p>
                <p className={styles.note}>{LAUNCH_ROUTES.note}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
