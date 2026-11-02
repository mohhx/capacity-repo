import Link from "next/link";
import { SITE } from "@/content/site";
import styles from "./Logo.module.css";

/** Temporary mark. Swap the <svg> for the final logo asset when the designer finishes (R9). */
export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${SITE.name} home`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="#19f0b4" strokeWidth="2" />
        <ellipse cx="14" cy="14" rx="5" ry="12" stroke="#2f8cff" strokeWidth="1.6" />
        <path d="M2 14h24" stroke="#19f0b4" strokeWidth="1.6" />
      </svg>
      <span>{SITE.name}</span>
    </Link>
  );
}