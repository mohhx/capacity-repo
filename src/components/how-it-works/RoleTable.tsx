import { WHO_DOES_WHAT, type Role } from "@/content/how-it-works";
import styles from "./RoleTable.module.css";

/** The selected role's column is white and the other role's column is grey. CAPACITY is always white. */
export function RoleTable({ role }: { role: Role }) {
  const { columns, rows } = WHO_DOES_WHAT;
  return (
    <div className={styles.card}>
      <div className={styles.scroll}>
        <table className={styles.table} data-role={role}>
          <thead>
            <tr>
              <th scope="col" className={styles.headStep}>
                {columns.step}
              </th>
              <th scope="col" className={styles.headRole}>
                {columns.provider}
              </th>
              <th scope="col" className={styles.headRole}>
                {columns.business}
              </th>
              <th scope="col" className={styles.headCapacity}>
                {columns.capacity}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.step}>
                <th scope="row" className={styles.cellStep}>
                  {row.step}
                </th>
                <td className={styles.cellProvider}>{row.provider}</td>
                <td className={styles.cellBusiness}>{row.business}</td>
                <td className={styles.cellCapacity}>{row.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
