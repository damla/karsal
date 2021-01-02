import styles from "./hamburger-button.module.scss";
import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  menuActive?: boolean,
  onClickHandler: () => void;
}

export default function HamburgerButton({ menuActive, onClickHandler }: Props) {
  return (
    <li className={styles.container} onClick={onClickHandler}>
      <a className={classNames(styles.body, menuActive && styles.body__active)}>
        <span className={styles.burgerIcon}></span>
      </a>
    </li>
  );
}

// refactor this component
