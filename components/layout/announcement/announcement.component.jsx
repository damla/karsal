import styles from "./announcement.module.scss";

import Bar from "../../bar/bar.component";

export default function Announcement({ children }) {
  return (
    <div className={styles.container}>
      <Bar announcement>{children}</Bar>
    </div>
  );
}
