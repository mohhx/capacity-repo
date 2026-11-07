import type { Metadata } from "next";
import { WhyList } from "@/components/for-providers/WhyList";
import { PageHero } from "@/components/ui/PageHero";
import { FOR_PROVIDERS } from "@/content/for-providers";

export const metadata: Metadata = { title: "For providers" };

export default function ForProvidersPage() {
  const { hero } = FOR_PROVIDERS;
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
    </main>
  );
}
