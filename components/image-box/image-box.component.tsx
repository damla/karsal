import React, { ReactElement, useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

import ContentLoader from 'react-content-loader'

import styles from './image-box.module.scss'
import classNames from 'classnames'

interface Props {
  src: string
  alt: string
  objectFit: ImageProps['objectFit']
  wider?: boolean
  priority?: boolean
  quality?: number
  hero?: boolean
  placeholderColor: string
}

export default function ImageBox ({
  src,
  alt,
  objectFit,
  wider = false,
  priority,
  quality,
  hero,
  placeholderColor
}: Props
): ReactElement {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <div
      className={
        classNames(hero !== undefined ? styles.container_hero : styles.container, wider && styles.container__wider)}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: placeholderColor,
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <ThreeDots/>
      </div>

      <Image
        className={classNames(isLoading && styles.hide)}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
        quality={quality}
      />
    </div>
  )
}

export const ThreeDots = (): ReactElement => {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      backgroundColor="transparent"
      foregroundColor="#ecebeb"
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  )
}

/* <Image
        className={classNames(!isLoading && styles.hide)}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
        quality={20}
      />  content-loader */
