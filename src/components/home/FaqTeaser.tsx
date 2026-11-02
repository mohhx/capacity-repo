import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME_LOWER } from "@/content/home-lower";
import styles from "./FaqTeaser.module.css";

export function FaqTeaser() {
  const { title, items, seeAll } = HOME_LOWER.faq;
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      <Accordion items={[...items]} columns={2} />
      <Link href={seeAll.href} className={styles.link}>
        {seeAll.label}
      </Link>
    </section>
  );
}
