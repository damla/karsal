import React, { ReactElement, ReactNode } from 'react'
import Bar from '../../bar/bar.component'
import styles from './announcement.module.scss'

interface Props {
  children: ReactNode
}

export default function Announcement ({
  children
}: Props
): ReactElement {
  return (
    <div id="announcement" className={styles.container}>
      <Bar announcement>{children}</Bar>
    </div>
  )
}
