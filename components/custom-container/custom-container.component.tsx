import React, { ReactElement, ReactNode } from 'react'

import styles from './custom-container.module.scss'

interface Props {
  children: ReactNode
  h1?: string
  h2?: string
  h3?: string

}

export default function CustomContainer ({
  children,
  h1,
  h2,
  h3
}: Props
): ReactElement {
  return (
    <div className={styles.container}>
      {
        h1 !== undefined && <h1 className={styles.h1}>{h1}</h1>
      }
      {
        h2 !== undefined && <h2 className={styles.h2}>{h3}</h2>
      }
      {
        h3 !== undefined && <h3 className={styles.h3}>{h3}</h3>
      }
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
