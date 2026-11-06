import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";
import styles from "./Logo.module.css";

/** Icon from the CAPACITY brand pack (816 x 796 PNG). Swap for a true vector when the designer supplies one (R9). */
export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${SITE.name} home`}>
      <Image src="/logo/capacity-logo-icon.png" alt="" width={28} height={27} />
      <span>{SITE.name}</span>
    </Link>
  );
}
