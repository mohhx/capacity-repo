import { Card } from "@/components/ui/Card";
import { COUNTRIES } from "@/config/platform";
import type { CountryCode } from "@/config/platform";
import { ABOUT } from "@/content/about";
import styles from "./AboutCards.module.css";

const ORDER: CountryCode[] = ["NG", "KE"];

export function AboutCards() {
  const { why, layer, team, operate, company } = ABOUT;
  const names = ORDER.map((code) => COUNTRIES[code].name);
  return (
    <div className={styles.grid}>
      <Card as="article" className={styles.card}>
        <h2 className={styles.title}>{why.title}</h2>
        <p className={styles.text}>{why.text}</p>
      </Card>

      <Card as="article" className={styles.card}>
        <h2 className={`${styles.title} ${styles.accent}`}>{layer.title}</h2>
        <p className={styles.text}>{layer.text}</p>
      </Card>

      <Card as="article" className={`${styles.card} ${styles.wide}`}>
        <h2 className={styles.title}>{team.title}</h2>
        <p className={styles.text}>{team.text}</p>
      </Card>

      <Card as="article" className={styles.card}>
        <h2 className={styles.title}>{operate.title}</h2>
        <ul className={styles.chips}>
          {names.map((name) => (
            <li key={name} className={styles.chip}>
              {name}
            </li>
          ))}
        </ul>
        <p className={styles.text}>Starting on selected routes in {names.join(" and ")}.</p>
      </Card>

      <Card as="article" className={styles.card}>
        <h2 className={styles.title}>{company.title}</h2>
        <p className={styles.text}>{company.text}</p>
      </Card>
    </div>
  );
}
