import React, { CSSProperties, ReactNode, ReactElement } from 'react'
import styles from './content.module.scss'
import classNames from 'classnames'

interface Props {
  backgroundColor?: string
  logo?: ReactNode
  title: string
  blockquote: ReactNode
  button: ReactNode
  narrower?: boolean
}

export default function Content ({
  backgroundColor,
  logo,
  title,
  blockquote,
  button,
  narrower
}: Props
): ReactElement {
  const bgColor: CSSProperties = {
    backgroundColor // backgroundColor: backgroundColor
  }

  return (
    <div
      className={
        classNames(
          styles.container,
          narrower !== undefined && styles.container__narrower
        )}
      style={
        bgColor
      }
    >
      <div className={styles.body}>
        {logo !== undefined && <div className={styles.body__logo}>{logo}</div>}
        <div className={styles.body__content}>
          <h1>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  )
}
