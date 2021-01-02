import React, { ReactNode } from 'react';
import styles from "./menu.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode,
  align: string
}

export default function Menu({ children, align }: Props) {
  return (
    <ul
      className={classNames(
        styles.container,
        align === "right" && styles.container__right,
        align === "left" && styles.container__left
      )}
    >
      {children}
    </ul>
  );
}
