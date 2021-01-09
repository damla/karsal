import React, { ReactElement, ReactNode } from 'react'
import styles from './section.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  id?: string
  banner?: boolean
  relative?: boolean
}

export default function Section ({
  children,
  id = undefined,
  banner = false,
  relative = false
}: Props
): ReactElement {
  return (
    <section
      className={classNames(
        styles.container,
        banner && styles.container__banner,
        relative && styles.relative
      )}
      id={id}
    >
      {children}
    </section>
  )
}
