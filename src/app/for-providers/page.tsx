import type { Metadata } from "next";
import { ApplySection } from "@/components/for-providers/ApplySection";
import { WhyList } from "@/components/for-providers/WhyList";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stepper } from "@/components/ui/Stepper";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "For providers" };

export default function ForProvidersPage() {
  const { hero, steps } = FOR_PROVIDERS;
  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        accent={hero.accent}
        lead={hero.lead}
        cta={hero.cta}
      >
        <WhyList />
      </PageHero>
      <div className={`container ${styles.content}`}>
        <section className={styles.steps}>
          <SectionHeading>{steps.title}</SectionHeading>
          <Stepper steps={steps.items} />
        </section>
        <ApplySection />
      </div>
    </main>
  );
}
