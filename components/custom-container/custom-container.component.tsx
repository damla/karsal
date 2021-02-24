import React, { CSSProperties, ReactElement, ReactNode } from 'react'

import styles from './custom-container.module.scss'
import classNames from 'classnames'

interface Props {
  page?: string
  children: ReactNode
  h1?: string
  h2?: string
  h3?: string
  justifyContent?: string
}

export default function CustomContainer ({
  page,
  children,
  h1,
  h2,
  h3,
  justifyContent
}: Props
): ReactElement {
  const style: CSSProperties = {
    justifyContent
  }
  return (
    <div className={styles.container}>
      {
        h1 !== undefined && <h1 className={styles.h1}>{h1}</h1>
      }
      {
        h2 !== undefined && <h2 className={styles.h2}>{h2}</h2>
      }
      {
        h3 !== undefined && <h3 className={styles.h3}>{h3}</h3>
      }
      <div className={classNames(
        styles.body,
        page === 'about-us' && styles.body_aboutUs,
        page === 'contact' && styles.body_contact)} style={style}>
        {children}
      </div>
    </div>
  )
}
