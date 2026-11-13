import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

type Common = {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  loading?: boolean;
  /** While loading, show this text beside the spinner instead of hiding the label. */
  loadingLabel?: string;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type AsButton = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, keyof Common>;
type AsLink = Common & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, keyof Common | "href">;

export type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", loading = false, loadingLabel, fullWidth = false, className, children } = props;

  const cls = [
    styles.button,
    styles[variant],
    size === "sm" ? styles.sm : "",
    fullWidth ? styles.full : "",
    loading && loadingLabel === undefined ? styles.loading : "",
    loading && loadingLabel !== undefined ? styles.busy : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && loadingLabel !== undefined ? <span className={styles.spinnerInline} aria-hidden="true" /> : null}
      <span className={styles.label}>{loading && loadingLabel !== undefined ? loadingLabel : children}</span>
      {loading && loadingLabel === undefined ? <span className={styles.spinner} aria-hidden="true" /> : null}
    </>
  );

  if (props.href !== undefined) {
    const { variant: _v, size: _s, loading: _l, loadingLabel: _ll, fullWidth: _f, className: _c, children: _ch, href, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, loading: _l, loadingLabel: _ll, fullWidth: _f, className: _c, children: _ch, href: _h, disabled, type = "button", ...rest } = props;
  return (
    <button type={type} className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {content}
    </button>
  );
}