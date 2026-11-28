import Link from "next/link";
import { ContactLine } from "@/components/contact/ContactLine";
import { Logo } from "@/components/ui/Logo";
import { COMPANY, SITE } from "@/content/site";
import styles from "./ComingSoon.module.css";

/** Logo only, as in the Figma coming-soon frames. */
export function ComingSoonHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Logo />
      </div>
    </header>
  );
}

export function ComingSoonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p className={styles.wordmark}>{SITE.name}</p>
        <p className={styles.footerLine}>
          <ContactLine item={COMPANY.email} kind="mail" />
          <span aria-hidden="true"> · </span>
          <Link href="/privacy">Privacy notice</Link>
          <span aria-hidden="true"> · </span>
          {COMPANY.legalName.value}
        </p>
      </div>
    </footer>
  );
}
