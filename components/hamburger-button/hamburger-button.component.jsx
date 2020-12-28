import styles from  "./hamburger-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function HamburgerButton({ menuActive, onClickHandler }) {
  return (
    <li className={styles.hamburgerButton_container} onClick={onClickHandler}>
      <Link href="#">
        <a
          className={classNames(styles.menuItem, styles.hamburgerButton, 
            menuActive && styles.hamburgerButton__active
          )}
        >
          <span className={styles.burgerIcon}></span>
        </a>
      </Link>
    </li>
  );
}
