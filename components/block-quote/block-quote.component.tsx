import React, { ReactNode, ReactElement } from 'react'
import styles from './block-quote.module.scss'
import classNames from 'classnames'
interface Props {
  children: ReactNode
  bigger?: boolean
}

export default function BlockQuote ({
  children, bigger
}: Props
): ReactElement {
  return (
    <div className={styles.container}>
      <blockquote className={
        classNames(
          bigger && styles.bigger_font
        )}>{children}</blockquote>
    </div>
  )
}
