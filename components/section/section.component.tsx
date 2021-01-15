import React, { CSSProperties, ReactElement, ReactNode } from 'react'
import styles from './section.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  id?: string
  banner?: boolean
  relative?: boolean
  minHeight?: string
  marginBottom?: string
}

export default function Section ({
  children,
  id,
  banner,
  relative,
  minHeight,
  marginBottom
}: Props
): ReactElement {
  const style: CSSProperties = {
    minHeight: minHeight,
    marginBottom: marginBottom

  }

  return (
    <section
      className={
        classNames(
          styles.container,
          banner !== undefined && styles.container__banner,
          relative !== undefined && styles.relative
        )}
      style={ style }
      id={id}
    >
      {children}
    </section>
  )
}
