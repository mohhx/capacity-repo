import type { Metadata } from "next";
import { BookCards } from "@/components/home/BookCards";
import { PageHero } from "@/components/ui/PageHero";
import { FOR_BUSINESSES } from "@/content/for-businesses";

export const metadata: Metadata = { title: "For businesses" };

export default function ForBusinessesPage() {
  const { hero } = FOR_BUSINESSES;
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
      </PageHero>
    </main>
  );
}
