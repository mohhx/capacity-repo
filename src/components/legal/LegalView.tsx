import Link from "next/link";
import { CountrySwitch } from "@/components/layout/CountrySwitch";
import { ContactLine } from "@/components/contact/ContactLine";
import { COMPANY } from "@/content/site";
import { LEGAL_DOCUMENT_UI, type LegalDocument } from "@/content/legal";
import styles from "./LegalView.module.css";

export function LegalView({ document }: { document: LegalDocument }) {
  return (
    <main className={`container ${styles.page}`}>
      <Link href={LEGAL_DOCUMENT_UI.back.href} className={styles.back}>
        <span aria-hidden="true">←</span> {LEGAL_DOCUMENT_UI.back.label}
      </Link>

      <header className={styles.hero}>
        <h1 className={styles.title}>{document.title}</h1>

        <div className={styles.metadata}>
          <div className={styles.applies}>
            <span>{LEGAL_DOCUMENT_UI.appliesTo}</span>
            <CountrySwitch variant="name" direction="down" />
          </div>

          <p className={styles.updated}>
            {LEGAL_DOCUMENT_UI.lastUpdated} {document.lastUpdated}
            <span aria-hidden="true"> · </span>
            {LEGAL_DOCUMENT_UI.version} {document.version}
          </p>
        </div>

        {document.placeholder && (
          <p className={styles.notice}>
            {LEGAL_DOCUMENT_UI.placeholderNote}
          </p>
        )}
      </header>

      <nav className={styles.toc} aria-label="Table of contents">
        <h2>{LEGAL_DOCUMENT_UI.tocTitle}</h2>
        <ol>
          {document.sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className={styles.sections}>
        {document.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={styles.section}
          >
            <h2>
              {index + 1}. {section.title}
            </h2>

            <p>
              {section.text}
              {section.withEmail && (
                <>
                  {" "}
                  <ContactLine item={COMPANY.email} kind="mail" />
                </>
              )}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
