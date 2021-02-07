import React, { ReactNode, ReactElement } from 'react'
import styles from './paragraph.module.scss'

interface Props {
  children: ReactNode
}

export default function Paragraph ({
  children
}: Props
): ReactElement {
  return (
    <div className={styles.container}>
      <p className={styles.p}>{children}</p>
    </div>
  )
}
