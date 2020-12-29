import styles from "./bar.module.scss";
import classNames from "classnames";

export default function Bar({ height, children, announcement, footer }) {
  return (
    <div
      className={classNames(
        styles.bar_container,
        announcement && styles.bar_container__announcement,
        footer && styles.bar_container__footer
      )}
      style={height ? { height } : null}
    >
      {children}
    </div>
  );
}
