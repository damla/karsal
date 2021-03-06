import React, { ReactElement, ReactNode } from 'react'
import Link from 'next/link'

import styles from './custom-button.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  onClick?: () => void
  href?: string
  inverted?: boolean
  scrollUp?: boolean
  atBottom?: boolean
}

export default function CustomButton ({
  children,
  onClick,
  href,
  inverted,
  scrollUp,
  atBottom
}: Props
): ReactElement {
  return (
    <>
      {href !== undefined ? (
        <Link href={href}>
          <a
            className={classNames(
              styles.container,
              inverted !== undefined && styles.container__inverted
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
            inverted !== undefined && styles.container__inverted,
            scrollUp !== undefined && styles.container_scrollUp
          )}
          style={atBottom !== undefined && atBottom ? { marginBottom: 'calc(7vh - 0.7rem)' } : {}}>
          <div className={styles.body}>{children}</div>
        </button>
      )}
    </>
  )
}
