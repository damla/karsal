import styles from "./bar.module.scss";
import classNames from "classnames";

export default function Bar({ height, children, announcement, footer }) {
  return (
    <div
      className={classNames(
        styles.container,
        announcement && styles.container__announcement,
        footer && styles.container__footer
      )}
      style={height ? { height } : null}
    >
      {children}
    </div>
  );
}
