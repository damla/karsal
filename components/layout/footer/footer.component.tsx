import React, { ReactElement } from 'react'
import Bar from '../../bar/bar.component'

import styles from './footer.module.scss'

import { CommonModel } from '../../../interfaces/index'

interface Props {
  data: CommonModel['footer']
}

export default function Footer ({
  data: {
    text,
    copyright,
    email,
    phone
  }
}: Props
): ReactElement {
  return (
    <Bar height={'6vh'} footer>
      <div className={styles.container__copyright}>
        <span>{text}&nbsp;</span>
        <span>
          {new Date().getFullYear()}&nbsp;{copyright}
        </span>
      </div>
      <span className={styles.container__contact}>
        <a href={email.link}>{email.text}</a>
        &nbsp;|&nbsp;
        <a href={phone.link}>{phone.text}</a>
      </span>
    </Bar>
  )
}
