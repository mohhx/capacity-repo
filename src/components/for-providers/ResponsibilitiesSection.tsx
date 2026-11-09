import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./ResponsibilitiesSection.module.css";

export function ResponsibilitiesSection() {
  const { title, items } = FOR_PROVIDERS.responsibilities;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <div className={styles.list}>
        <Accordion items={[...items]} />
      </div>
    </section>
  );
}
