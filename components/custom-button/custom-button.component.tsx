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
  openTab?: boolean
  center?: boolean
}

export default function CustomButton ({
  children,
  onClick,
  href,
  inverted,
  scrollUp,
  atBottom,
  openTab,
  center
}: Props
): ReactElement {
  return (
    <>
      {href !== undefined ? (
        <Link href={href}>
          {openTab !== undefined
            ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ minWidth: '100%' }}
                className={classNames(
                  styles.container,
                  inverted !== undefined && styles.container__inverted
                )}
              >
                <div className={classNames(
                  styles.body,
                  center !== undefined && styles.body_center
                )}>{children}</div>
              </a>
            ) : (
              <a
                className={classNames(
                  styles.container,
                  inverted !== undefined && styles.container__inverted
                )}
              >
                <div className={classNames(
                  styles.body,
                  center !== undefined && styles.body_center
                )}>{children}</div>
              </a>
            )
          }

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
      )
      }
    </>
  )
}
