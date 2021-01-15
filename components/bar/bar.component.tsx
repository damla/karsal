import React, { CSSProperties, ReactNode, ReactElement } from 'react'
import styles from './bar.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  height?: string
  announcement?: boolean
  footer?: boolean
}

export default function Bar ({
  children,
  height,
  announcement,
  footer
}: Props
): ReactElement {
  const heightValue: CSSProperties = {
    height // height: height
  }

  return (
    <div
      className={classNames(
        styles.container,
        announcement !== undefined && styles.container__announcement,
        footer !== undefined && styles.container__footer
      )}
      style={heightValue}
    >
      {children}
    </div>
  )
}
