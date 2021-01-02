import React, { ReactNode } from "react";
import styles from "./block-quote.module.scss";

interface Props {
  children: ReactNode;
}

export default function BlockQuote({ children }: Props) {
  return (
    <div className={styles.container}>
      <blockquote>{children}</blockquote>
    </div>
  );
}
