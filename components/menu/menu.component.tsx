import React, { ReactElement, ReactNode } from 'react'
import styles from './menu.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  align: string
  equal?: boolean
}

export default function Menu ({
  children,
  align,
  equal
}: Props
): ReactElement {
  return (
    equal !== undefined ? (
      <ul
        className={
          classNames(
            styles.containerEqual,
            align === 'right' && styles.containerEqual__right,
            align === 'center' && styles.containerEqual__center,
            align === 'left' && styles.containerEqual__left
          )}
      >
        {children}
      </ul>) : (
      <ul
        className={
          classNames(
            styles.container,
            align === 'right' && styles.container__right,
            align === 'left' && styles.container__left
          )}
      >
        {children}
      </ul>
    )
  )
}
