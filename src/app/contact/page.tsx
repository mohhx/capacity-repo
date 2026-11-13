import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactView } from "@/components/contact/ContactView";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className={`container ${styles.page}`}>
      <ContactView info={<ContactInfo />} />
    </main>
  );
}
