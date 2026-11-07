import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_BUSINESSES } from "@/content/for-businesses";
import styles from "./BusinessFaq.module.css";

export function BusinessFaq() {
  const { title, items } = FOR_BUSINESSES.faq;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <Accordion items={[...items]} columns={2} />
    </section>
  );
}
