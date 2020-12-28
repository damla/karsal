import styles from  "./hamburger-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function HamburgerButton({ menuActive, onClickHandler }) {
  return (
    <li className={styles.hamburger-button_container} onClick={onClickHandler}>
      <Link href="#">
        <a
          className={classNames(styles.menu-item, styles.hamburger-button, 
            menuActive && styles.hamburger-button__active
          )}
        >
          <span className="burger-icon"></span>
        </a>
      </Link>
    </li>
  );
}
