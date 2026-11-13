import { useId } from "react";
import type { SelectHTMLAttributes } from "react";
import fieldStyles from "./Field.module.css";
import styles from "./FieldControls.module.css";

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly { value: string; label: string }[];
  /** Shown as a disabled first option with an empty value. Pass "required" to show it muted. */
  placeholder?: string;
  /** Error message. When set, the field shows the error state. */
  error?: string;
  hint?: string;
}

export function SelectField({ label, options, placeholder, error, hint, id, className, value, defaultValue, ...rest }: SelectFieldProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  // The placeholder option is disabled, so an empty default has to be set explicitly.
  const valueProps = value !== undefined ? { value } : { defaultValue: defaultValue ?? "" };

  return (
    <div className={`${fieldStyles.field} ${className ?? ""}`}>
      <label htmlFor={selectId} className={fieldStyles.label}>
        {label}
      </label>
      <select
        id={selectId}
        className={`${styles.select} ${error ? fieldStyles.invalid : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...valueProps}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {hint && !error ? (
        <p id={hintId} className={fieldStyles.hint}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={fieldStyles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
