import React, { ReactNode, ReactElement } from 'react'
import styles from './block-quote.module.scss'

interface Props {
  children: ReactNode
}

export default function BlockQuote({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <blockquote>{children}</blockquote>
    </div>
  )
}
