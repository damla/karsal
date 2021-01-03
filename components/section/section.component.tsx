import React, { ReactNode } from "react";
import styles from "./section.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode,
  id?: string,
  banner?: boolean
}

export default function Section({ children, id = undefined, banner }: Props) {
  return (
    <section
      className={classNames(
        styles.container,
        banner && styles.container__banner
      )}
      id={id}
    >
      {children}
    </section>
  );
}
