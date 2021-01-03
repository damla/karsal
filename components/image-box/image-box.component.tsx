import styles from './image-box.module.scss'
import Image, { ImageProps } from 'next/image'
import classNames from 'classnames'
import React, { ReactElement } from 'react'

interface Props {
  src: string
  alt: string
  objectFit: ImageProps['objectFit']
  wider?: boolean
  priority?: boolean
}

export default function ImageBox ({
  src,
  alt,
  objectFit,
  wider = false,
  priority
}: Props
): ReactElement {
  return (
    <div
      className={classNames(styles.container, wider && styles.container__wider)}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
      />
    </div>
  )
}
