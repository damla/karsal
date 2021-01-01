import styles from "./hamburger-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function HamburgerButton({ menuActive, onClickHandler }) {
  return (
    <li className={styles.container} onClick={onClickHandler}>
      <a className={classNames(styles.body, menuActive && styles.body__active)}>
        <span className={styles.burgerIcon}></span>
      </a>
    </li>
  );
}

// refactor this component
