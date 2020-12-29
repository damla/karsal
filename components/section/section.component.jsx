import styles from "./section.module.scss";
import classNames from "classnames";

export default function Section({ id, children, banner }) {
  return (
    <section
      className={classNames(styles.section_container, 
      banner && styles.section_container__banner
      )}
      id={id ? id : null}
    >
      {children}
    </section>
  );
}
