import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const faq = [
  { id: "what", question: "What is CAPACITY and who is it for?", answer: "Sample answer text." },
  { id: "cost", question: "How much does it cost?", answer: "Sample answer text." },
  { id: "verify", question: "How do I get verified?", answer: "Sample answer text." },
  { id: "paid", question: "When and how do I get paid?", answer: "Sample answer text." },
];

export default function StyleGuidePage() {
  return (
    <main className="container" style={{ display: "grid", gap: "3rem", paddingBlock: "3rem" }}>
      <SectionHeading as="h1" eyebrow="Temporary page" lead="Remove at the end of Day 4, with confirmation.">
        Style guide
      </SectionHeading>

      <section style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading>Buttons</SectionHeading>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <Button>Primary</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
        </div>
      </section>

      <section style={{ display: "grid", gap: "1rem", maxWidth: 360 }}>
        <SectionHeading>Fields</SectionHeading>
        <Field label="Default" placeholder="City or town" />
        <Field label="Filled" defaultValue="Nairobi" />
        <Field label="Error" defaultValue="???" error="Enter a city or town." />
        <Field label="Disabled" placeholder="City or town" disabled />
        <Field label="With hint" placeholder="How to reach you" hint="Phone or email." />
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading>Cards, badge, banners</SectionHeading>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <Card>
            <strong>Return trips</strong>
            <p style={{ color: "var(--muted)" }}>Empty legs, sold</p>
          </Card>
          <Card tone="raised">
            <strong>Raised card</strong>
            <p style={{ color: "var(--muted)" }}>Audience panel surface</p>
          </Card>
        </div>
        <div>
          <Badge>Illustrative</Badge>
        </div>
        <Banner title="Info">Payment held securely until delivery is confirmed.</Banner>
        <Banner tone="success" title="Sent">We received your route.</Banner>
        <Banner tone="error" title="Something went wrong">Please try again.</Banner>
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading>Accordion (two columns)</SectionHeading>
        <Accordion items={faq} columns={2} />
      </section>
    </main>
  );
}