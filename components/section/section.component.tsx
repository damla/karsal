import React, { CSSProperties, ReactElement, ReactNode } from 'react'
import styles from './section.module.scss'
import classNames from 'classnames'

interface Props {
  children?: ReactNode
  id?: string
  banner?: boolean
  relative?: boolean
  minHeight?: string
  paddingTop?: string
  marginBottom?: string
  backgroundColor?: string
  mobileNone?: boolean
}

export default function Section ({
  children,
  id,
  banner,
  relative,
  minHeight,
  paddingTop,
  marginBottom,
  backgroundColor,
  mobileNone
}: Props
): ReactElement {
  const style: CSSProperties = {
    minHeight,
    paddingTop,
    marginBottom,
    backgroundColor
  }

  return (
    <section
      className={
        classNames(
          styles.container,
          banner !== undefined && styles.container__banner,
          relative !== undefined && styles.relative,
          paddingTop !== undefined && styles.paddingTop,
          mobileNone !== undefined && styles.mobileNone
        )}
      style={style}
      id={id}
    >
      {children}
    </section>
  )
}
