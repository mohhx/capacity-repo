import fieldStyles from "./Field.module.css";
import styles from "./PillGroup.module.css";

export interface PillGroupProps {
  name: string;
  label: string;
  options: readonly { value: string; label: string }[];
  /** Error message. When set, the group shows the error state. */
  error?: string;
}

/** A row of pills where one can be chosen (radio buttons underneath). Optional unless the form checks it. */
export function PillGroup({ name, label, options, error }: PillGroupProps) {
  return (
    <fieldset className={styles.group}>
      <legend className={`${fieldStyles.label} ${styles.legend}`}>{label}</legend>
      <div className={styles.pills}>
        {options.map((o) => (
          <label key={o.value} className={styles.pill}>
            <input type="radio" name={name} value={o.value} className={styles.input} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p className={fieldStyles.error} role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
