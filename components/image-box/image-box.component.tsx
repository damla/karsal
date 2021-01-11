import React, { ReactElement, useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

import ThreeDots from '../three-dots/three-dots.component'

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
  wider,
  priority,
  quality,
  hero,
  placeholderColor
}: Props
): ReactElement {
  const [isLoading, setLoading] = useState(true)

  const handleLoad = (): void => {
    setLoading(false)
  }

  useEffect(() => {
    handleLoad()
  }, [])

  return (
    <div
      className={
        classNames(hero !== undefined ? styles.container_hero : styles.container, wider !== undefined && styles.container__wider)}
    >

      <div
        className={classNames(isLoading ? undefined : styles.hide)}
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
        onLoad={ handleLoad }
        className={classNames(styles.image, isLoading ? styles.hide : undefined)}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
        quality={quality}
      />

      <div className={classNames(styles.blackOverlay, isLoading || hero === undefined ? styles.hide : undefined)}></div>
    </div>
  )
}
