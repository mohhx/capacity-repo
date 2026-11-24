import Image from "next/image";
import { Fragment, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { HOME } from "@/content/home";
import styles from "./Hero.module.css";

/** Hero B (truck with the CAPACITY logo painted on it), as in the Figma Home. If the logo changes, this image needs regenerating. Hero A (no branding) is kept in public/images, unused. */
const HERO_IMAGE = "/images/hero-b-truck-with-logo-1600.webp";

export function Hero() {
  const { eyebrow, titleLines, titleAccent, lead, primaryCta, secondaryCta } = HOME.hero;
  const titleWords = titleLines.join(" ").split(" ");
  const accentWords = titleAccent.split(" ");
  return (
    <section className={styles.hero}>
      {/* Phone: photo sits behind the text. Tablet and up: photo is its own panel beside the text. */}
      <div className={styles.photo} aria-hidden="true">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 620px, (min-width: 768px) 90vw, 100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>
          {titleWords.map((word, i) => (
            <Fragment key={`t-${i}`}>
              {i > 0 ? " " : null}
              <span className={styles.word}>
                <span className={styles.wordInner} style={{ "--i": i } as CSSProperties}>
                  {word}
                </span>
              </span>
            </Fragment>
          ))}{" "}
          <span className={styles.accent}>
            {accentWords.map((word, j) => (
              <Fragment key={`a-${j}`}>
                {j > 0 ? " " : null}
                <span className={styles.word}>
                  <span className={styles.wordInner} style={{ "--i": titleWords.length + j } as CSSProperties}>
                    {word}
                  </span>
                </span>
              </Fragment>
            ))}
          </span>
        </h1>
        <p className={styles.lead}>
          {lead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className={styles.actions}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
