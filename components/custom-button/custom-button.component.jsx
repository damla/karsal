import styles from "./custom-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function CustomButton({
  onClick,
  href,
  children,
  button,
  inverted,
}) {
  return (
    <div onClick={onClick ? onClick : null}>
      <Link href={href ? href : "/en/about-us"} scroll={false}>
        <a
          className={classNames(
            button && styles.container,
            inverted && styles.container__inverted
          )}
        >
          <div className={styles.body}>{children}</div>
        </a>
      </Link>
    </div>
  );
}
