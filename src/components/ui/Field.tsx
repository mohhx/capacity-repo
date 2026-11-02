import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./Field.module.css";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Error message. When set, the field shows the error state. */
  error?: string;
  hint?: string;
}

export function Field({ label, error, hint, id, className, ...rest }: FieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`${styles.field} ${className ?? ""}`}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {hint && !error ? (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}