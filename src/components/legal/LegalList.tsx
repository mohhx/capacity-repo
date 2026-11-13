import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { LEGAL } from "@/content/legal";
import styles from "./LegalList.module.css";

function Chevron() {
  return (
    <svg className={styles.chevron} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 3.5l6.5 6.5L7 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LegalList() {
  return (
    <ul className={styles.list}>
      {LEGAL.live.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={`${styles.row} ${styles.live}`}>
            <span className={styles.label}>{item.label}</span>
            <Chevron />
          </Link>
        </li>
      ))}
      {LEGAL.later.map((label) => (
        <li key={label}>
          <div className={`${styles.row} ${styles.later}`}>
            <span className={styles.label}>{label}</span>
            <Badge>Later</Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}
