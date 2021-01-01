import Link from "next/link";
import styles from "./menu-item.module.scss";

export default function MenuItem({ href, children, lang, refresh }) {
  // TODO: Ignore warning from here
  return (
    <>
      {refresh ? (
        <li>
          <a href={href} locale={lang} className={styles.container}>
            {children}
          </a>
        </li>
      ) : (
        <li>
          <Link href={href} locale={lang}>
            <a className={styles.container}>{children}</a>
          </Link>
        </li>
      )}
    </>
  );
}
/* TODO: fix the bug about links */
