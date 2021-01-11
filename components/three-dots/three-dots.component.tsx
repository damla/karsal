import React, { ReactElement } from 'react'
import ContentLoader from 'react-content-loader'
import classNames from 'classnames'
import styles from './three-dots.module.scss'

interface Props {
  isLoading: boolean
  placeholderColor: string
}

export default function ThreeDots ({
  isLoading,
  placeholderColor
}: Props): ReactElement {
  return (
    <div
      className={classNames(
        styles.container,
        isLoading ? undefined : styles.container_hide
      )}
      style={{ backgroundColor: placeholderColor }}
    >
      <ContentLoader
        viewBox="0 0 400 160"
        speed={1}
        height={160}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </div>
  )
}
// foregroundColor="#ecebeb"
