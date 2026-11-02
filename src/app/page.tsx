import { AudiencePanels } from "@/components/home/AudiencePanels";
import { BookCards } from "@/components/home/BookCards";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Markets } from "@/components/home/Markets";
import { TrustStrip } from "@/components/home/TrustStrip";
import { UsedVsIdle } from "@/components/home/UsedVsIdle";

export default function HomePage() {
  return (
    <main className="container">
      <Hero />
      <BookCards />
      <UsedVsIdle />
      <HowItWorks />
      <AudiencePanels />
      <TrustStrip />
      <Markets />
    </main>
  );
}
