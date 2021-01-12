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
  id,
  banner,
  relative
}: Props
): ReactElement {
  return (
    <section
      className={
        classNames(
          styles.container,
          banner !== undefined && styles.container__banner,
          relative !== undefined && styles.relative
        )}
      id={id}
    >
      {children}
    </section>
  )
}
