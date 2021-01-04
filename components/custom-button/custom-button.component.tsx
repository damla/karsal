import React, { ReactElement, ReactNode } from 'react'
import Link from 'next/link'

import styles from './custom-button.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  onClick?: () => void
  href?: string
  inverted?: boolean
}

export default function CustomButton ({
  children,
  onClick,
  href,
  inverted = false
}: Props
): ReactElement {
  return (
    <>
      {href !== undefined ? (
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
  )
}
