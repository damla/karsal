import React, { ReactNode } from "react";
import styles from "./announcement.module.scss";
import Bar from "../../bar/bar.component";

interface Props {
  children: ReactNode;
}

export default function Announcement({ children }: Props) {
  return (
    <div className={styles.container}>
      <Bar announcement>{children}</Bar>
    </div>
  );
}
