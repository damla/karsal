import styles from "./section.module.scss";
import classNames from "classnames";

export default function Section({ id = null, children, banner }) {
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
