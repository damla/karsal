import React, { ReactElement } from 'react'
// import Image from 'next/image'

import styles from './grid.module.scss'

// interface Props {
//   children: ReactNode
// }

export default function Grid (
): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
      <div className={styles.child}>
        <p>test</p>
        <p>test2</p>
      </div>
    </div>
  )
}
