import { AudiencePanels } from "@/components/home/AudiencePanels";
import { BookCards } from "@/components/home/BookCards";
import { ClosingCta } from "@/components/home/ClosingCta";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Markets } from "@/components/home/Markets";
import { RouteForm } from "@/components/home/RouteForm";
import { TrustStrip } from "@/components/home/TrustStrip";
import { UsedVsIdle } from "@/components/home/UsedVsIdle";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="container">
      <Hero />
      <Reveal>
        <BookCards />
      </Reveal>
      <Reveal>
        <UsedVsIdle />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <AudiencePanels />
      </Reveal>
      <Reveal>
        <TrustStrip />
      </Reveal>
      <Reveal>
        <Markets />
      </Reveal>
      <Reveal>
        <RouteForm />
      </Reveal>
      <Reveal>
        <FaqTeaser />
      </Reveal>
      <Reveal>
        <ClosingCta />
      </Reveal>
    </main>
  );
}
