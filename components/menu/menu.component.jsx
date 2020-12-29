import styles from "./menu.module.scss";
import classNames from "classnames";

export default function Menu({ children, align }) {
  return (
    <ul
      className={classNames(styles.menu_container, 
       (align === "right") && styles.menu_container__right,
       (align === "left") && styles.menu_container__left,
      )}
    >
      {children}
    </ul>
  );
}
