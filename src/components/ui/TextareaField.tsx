import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import fieldStyles from "./Field.module.css";
import styles from "./FieldControls.module.css";

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  /** Error message. When set, the field shows the error state. */
  error?: string;
  hint?: string;
}

export function TextareaField({ label, error, hint, id, className, ...rest }: TextareaFieldProps) {
  const autoId = useId();
  const areaId = id ?? autoId;
  const hintId = hint ? `${areaId}-hint` : undefined;
  const errorId = error ? `${areaId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`${fieldStyles.field} ${className ?? ""}`}>
      <label htmlFor={areaId} className={fieldStyles.label}>
        {label}
      </label>
      <textarea
        id={areaId}
        className={`${styles.textarea} ${error ? fieldStyles.invalid : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
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
