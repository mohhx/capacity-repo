import Link from "next/link";
import { COMPANY, FOOTER } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

interface ContactItem {
  value: string;
  tbc: boolean;
}

/** Placeholder details (tbc) render as plain text, not as live mailto/tel links. */
function ContactLine({ item, kind }: { item: ContactItem; kind: "mail" | "tel" }) {
  if (item.tbc) return <span>{item.value}</span>;
  const href = kind === "mail" ? `mailto:${item.value}` : `tel:${item.value.replace(/\s/g, "")}`;
  return <a href={href}>{item.value}</a>;
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.muted}>{COMPANY.legalName.value}</p>
          <p className={styles.muted}>Nigeria · Kenya</p>
        </div>

        <nav aria-label="Footer pages" className={styles.col}>
          <h2 className={styles.heading}>PAGES</h2>
          <ul className={styles.list}>
            {FOOTER.pages.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className={styles.col}>
          <h2 className={styles.heading}>LEGAL</h2>
          <ul className={styles.list}>
            {FOOTER.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.heading}>CONTACT</h2>
          <ul className={styles.list}>
            <li>
              <ContactLine item={COMPANY.email} kind="mail" />
            </li>
            <li>
              <ContactLine item={COMPANY.phoneNG} kind="tel" />
            </li>
            <li>
              <ContactLine item={COMPANY.phoneKE} kind="tel" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}