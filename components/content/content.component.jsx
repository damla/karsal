import styles from "./content.module.scss";
import classNames from "classnames";

export default function Content({
  BgColor,
  left,
  title,
  blockquote,
  button,
  narrower,
}) {
  return (
    <div
      className={classNames(
        styles.container,
        narrower && styles.container__narrower
      )}
      style={
        BgColor
          ? {
              backgroundColor: `${BgColor}`,
            }
          : {}
      }
    >
      <div className={styles.body}>
        {left ? <div className={styles.body__left}>{left}</div> : null}
        <div className={styles.body__right}>
          <h1>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  );
}
