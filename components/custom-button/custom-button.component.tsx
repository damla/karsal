import React, { ReactNode } from "react";
import styles from "./custom-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

interface Props {
  children: ReactNode,
  onClick?: () => void;
  href?: string,
  inverted?: boolean,
}

export default function CustomButton({ children, onClick, href, inverted }: Props) {
  return (
    <>
      {href ? (
        <Link href={href} scroll={false}>
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
