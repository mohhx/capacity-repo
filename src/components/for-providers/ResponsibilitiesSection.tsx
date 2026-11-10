import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOR_PROVIDERS } from "@/content/for-providers";
import styles from "./ResponsibilitiesSection.module.css";

export function ResponsibilitiesSection() {
  const { title, items } = FOR_PROVIDERS.responsibilities;
  const { promote } = FOR_PROVIDERS;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <div className={styles.layout}>
        <Accordion items={[...items]} />
        {promote.enabled ? (
          <div className={styles.promote}>
            <h3 className={styles.promoteTitle}>{promote.title}</h3>
            <ul className={styles.options}>
              {promote.options.map((option) => (
                <li key={option} className={styles.option}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
