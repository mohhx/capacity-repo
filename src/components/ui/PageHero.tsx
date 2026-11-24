import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { PageTitle } from "@/components/ui/PageTitle";
import { Reveal } from "@/components/ui/Reveal";
import enter from "@/components/ui/Enter.module.css";
import styles from "./PageHero.module.css";

/** Hero B (truck with the CAPACITY logo painted on it), shared by the inner pages. */
const HERO_IMAGE = "/images/hero-b-truck-with-logo-1600.webp";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  cta: { label: string; href: string };
  /** Content that sits on the photo below the hero text (for example a row of cards). */
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, accent, lead, cta, children }: PageHeroProps) {
  const wordCount = title.split(/\s+/).filter(Boolean).length + accent.split(/\s+/).filter(Boolean).length;
  return (
    <section className={styles.hero}>
      <div className={styles.photo} aria-hidden="true">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className={styles.image} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text} style={{ "--w": wordCount } as CSSProperties}>
          <p className={`${styles.eyebrow} ${enter.eyebrowIn}`}>{eyebrow}</p>
          <h1 className={styles.title}>
            <PageTitle title={title} accent={accent} accentClassName={styles.accent} />
          </h1>
          <p className={`${styles.lead} ${styles.leadIn}`}>{lead}</p>
          <div className={`${styles.actions} ${styles.actionsIn}`}>
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
        {children ? (
          <div className={styles.extra}>
            <Reveal>{children}</Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
