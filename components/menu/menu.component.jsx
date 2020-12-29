import styles from "./menu.module.scss";
import classNames from "classnames";

export default function Menu({ children, align }) {
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
