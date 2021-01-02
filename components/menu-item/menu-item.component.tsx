import React, { ReactNode } from 'react'
import Link from "next/link";
import styles from "./menu-item.module.scss";

type Props={
  children?: ReactNode,
  href: string,
  lang: string
}

export default function MenuItem({ href = "", children, lang }: Props) {
  // TODO: Ignore warning from here
  return (
    <li>
      <Link href={href} locale={lang}>
        <a className={styles.container}>{children}</a>
      </Link>
    </li>
  );
}
/* TODO: fix the bug about links */
