import Link from "next/link";

import styles from "./menu-item.module.scss";

export default function MenuItem({ href, children, locale }) {
  // TODO: Ignore warning from here
  return (
    <li>
      <Link href={href} locale={locale}>
        <a className={styles.menu-item}>{children}</a>
      </Link>
    </li>
  );
}
/* TODO: Burayi test et, oncesinde {"classname"} seklinde yazilmis, problem cikarabilirdi */
