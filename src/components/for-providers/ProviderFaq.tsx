import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./ProviderFaq.module.css";

export function ProviderFaq() {
  const { title, items } = FOR_PROVIDERS.faq;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <Accordion items={[...items]} columns={2} />
    </section>
  );
}
