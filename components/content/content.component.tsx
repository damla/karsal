import React, { CSSProperties, ReactNode, ReactElement } from 'react'
import styles from './content.module.scss'
import classNames from 'classnames'

interface Props {
  backgroundColor?: string
  logo?: ReactNode
  title: string
  blockquote: ReactNode
  button?: ReactNode
  narrower?: boolean
  justifyContent?: string
  biggerTitle?: boolean
}

export default function Content ({
  backgroundColor,
  logo,
  title,
  blockquote,
  button,
  narrower,
  justifyContent,
  biggerTitle
}: Props
): ReactElement {
  const style: CSSProperties = {
    backgroundColor, // backgroundColor: backgroundColor
    justifyContent
  }

  return (
    <div
      className={
        classNames(
          styles.container,
          narrower && styles.container__narrower
        )}
      style={
        style
      }
    >
      <div className={styles.body}>
        {logo !== undefined && <div className={styles.body__logo}>{logo}</div>}
        <div className={styles.body__content}>
          <h1 className={
            classNames(
              biggerTitle && styles.bigger_title
            )}>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  )
}
