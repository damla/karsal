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
      <Link href={href ? href : "/"} scroll={false}>
        <a
          className={classNames(
            button && styles.button,
            inverted && styles.button__inverted,
          )}
        >
        <div className={styles.button_content}>
          {children}
          </div>
        </a>
      </Link>
    </div>

  );
}
