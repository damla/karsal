import React, { ReactElement, useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

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
  lowQualitySrc: string
  objectPosition?: string
}

export default function ImageBox ({
  src,
  alt,
  objectFit,
  wider,
  priority,
  quality,
  hero,
  lowQualitySrc,
  objectPosition
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
      <Image
        className={classNames(styles.image, styles.blur, isLoading ? styles.hide : undefined)}
        src={lowQualitySrc}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        quality={0}
        objectPosition={objectPosition}
      />
      <Image
        onLoad={ handleLoad }
        className={classNames(styles.image, isLoading ? styles.hide : undefined)}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
        quality={quality}
        objectPosition={objectPosition}
      />
      <div className={classNames(styles.blackOverlay, isLoading || hero === undefined ? styles.hide : undefined)}></div>
    </div>
  )
}
