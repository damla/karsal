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
      className={classNames(styles.content_container, 
        narrower && styles.content_container__narrower
      )}
      style={
        BgColor
          ? {
              backgroundColor: `${BgColor}`,
            }
          : {}
      }
    >
      <div className={styles.content}>
        {left ? <div className={styles.content__left}>{left}</div> : null}
        <div className={styles.content__right}>
          <h1>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  );
}
