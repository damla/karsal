import styles from "./custom-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function CustomButton({
  onClick,
  href,
  children,
  inverted,
  linked,
}) {
  return (
    <>
      {linked ? (
        <Link href={href ? href : "/"} scroll={false}>
          <a
            className={classNames(
              styles.container,
              inverted && styles.container__inverted
            )}
          >
            <div className={styles.body}>{children}</div>
          </a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={classNames(
            styles.container,
            inverted && styles.container__inverted
          )}
        >
          <div className={styles.body}>{children}</div>
        </button>
      )}
    </>
  );
}
