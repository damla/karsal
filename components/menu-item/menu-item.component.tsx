import React, { ReactElement, ReactNode } from 'react'
import Link from 'next/link'
import styles from './menu-item.module.scss'

interface Props {
  children: ReactNode
  href?: string
  lang?: string
}

export default function MenuItem ({
  href = '',
  children,
  lang
}: Props
): ReactElement {
  // TODO: Ignore warning from here
  return (
    <li>
      <Link href={href} locale={lang}>
        <a className={styles.container}>{children}</a>
      </Link>
    </li>
  )
}
/* TODO: fix the bug about links */
