import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import fieldStyles from "./Field.module.css";
import styles from "./PhoneField.module.css";

export interface PhoneFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue"> {
  label: string;
  /** Error message. When set, the field shows the error state. */
  error?: string;
  dialCode: string;
  dialOptions: readonly { value: string; label: string }[];
  onDialCodeChange: (value: string) => void;
}

/** A phone number with its country code in one box. The number is uncontrolled; the code is controlled by the form. */
export function PhoneField({ label, error, dialCode, dialOptions, onDialCodeChange, id, className, ...rest }: PhoneFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={`${fieldStyles.field} ${className ?? ""}`}>
      <label htmlFor={inputId} className={fieldStyles.label}>
        {label}
      </label>
      <div className={`${styles.box} ${error ? styles.invalid : ""}`}>
        <select
          className={styles.dial}
          aria-label="Country code"
          value={dialCode}
          onChange={(e) => onDialCodeChange(e.target.value)}
        >
          {dialOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <input
          id={inputId}
          type="tel"
          inputMode="tel"
          className={styles.number}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...rest}
        />
      </div>
      {error ? (
        <p id={errorId} className={fieldStyles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
