import React, { ReactElement, ReactNode } from 'react'
import styles from './announcement.module.scss'
import Bar from '../../bar/bar.component'

interface Props {
  children: ReactNode
}

export default function Announcement ({
  children
}: Props
): ReactElement {
  return (
    <div className={styles.container}>
      <Bar announcement>{children}</Bar>
    </div>
  )
}
