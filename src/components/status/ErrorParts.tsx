import Link from "next/link";
import { ContactLine } from "@/components/contact/ContactLine";
import { ERROR_PAGE } from "@/content/errors";
import { COMPANY } from "@/content/site";
import styles from "./ErrorParts.module.css";

/** The exclamation mark inside the circle, drawn to the proportions of the Figma frame. */
export function ExclamationMark() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor" aria-hidden="true">
      <rect x="48.2" y="25" width="3.6" height="34" rx="1.8" />
      <circle cx="50" cy="73" r="3.3" />
    </svg>
  );
}

/** Email and phone numbers. Plain text while they are TBC placeholders, live links once real (same rule as the Footer). */
export function ErrorContact() {
  const { contact } = ERROR_PAGE;
  return (
    <div className={styles.contact}>
      <ul className={styles.lines}>
        <li>
          {contact.emailLabel} <ContactLine item={COMPANY.email} kind="mail" />
        </li>
        <li>
          {contact.phoneLabel} <ContactLine item={COMPANY.phoneNG} kind="tel" /> (NG)
        </li>
        <li>
          <ContactLine item={COMPANY.phoneKE} kind="tel" /> (KE)
        </li>
      </ul>
    </div>
  );
}

export function BackHomeLink() {
  const { home } = ERROR_PAGE;
  return (
    <Link href={home.href} className={styles.homeLink}>
      <span aria-hidden="true">←</span> {home.label}
    </Link>
  );
}
