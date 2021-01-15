import React, { ReactElement } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './logo.module.scss'

interface Props {
  width: number
  height: number
}

export default function Logo ({
  width,
  height
}: Props
): ReactElement {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/assets/images/karsal-logo.png"
        alt="karsal-logo"
        width={width}
        height={height}
        layout="fixed"
      />
    </Link>
  )
}
