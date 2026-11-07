import type { Metadata } from "next";
import { BookCards } from "@/components/home/BookCards";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stepper } from "@/components/ui/Stepper";
import { FOR_BUSINESSES } from "@/content/for-businesses";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "For businesses" };

export default function ForBusinessesPage() {
  const { hero, steps } = FOR_BUSINESSES;
  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        accent={hero.accent}
        lead={hero.lead}
        cta={hero.cta}
      >
        <BookCards />
        <section className={styles.steps}>
          <SectionHeading>{steps.title}</SectionHeading>
          <Stepper steps={steps.items} />
        </section>
      </PageHero>
    </main>
  );
}
