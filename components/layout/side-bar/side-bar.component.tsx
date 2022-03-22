import React, { ReactNode, ReactElement } from 'react'
import { useRouter } from 'next/router'

import MenuItem from '../../menu-item/menu-item.component'

import styles from './side-bar.module.scss'
import classNames from 'classnames'

import { CommonModel } from '../../../interfaces/index'

interface Props {
  hamburgerButton: ReactNode
  isOpen: boolean
  data: CommonModel['sidebar']
}

export default function SideBar ({
  hamburgerButton,
  isOpen,
  data:
  {
    aboutUs,
    factory,
    kvkk,
    integratedPolicy,
    contact,
    turkish,
    english,
    footer
  }
}: Props
): ReactElement {
  const route = useRouter()

  return (
    <div
      className={
        classNames(
          styles.container,
          isOpen && styles.container__active
        )}
    >
      <div className={styles.container_content}>
        <div className={styles.container_header}>{hamburgerButton}</div>
        <div className={styles.container_body}>
          <MenuItem href={aboutUs.link}>{aboutUs.text}</MenuItem>
          <MenuItem href={factory.link}>{factory.text}</MenuItem>
          <MenuItem href={kvkk.link}>{kvkk.text}</MenuItem>
          <MenuItem href={integratedPolicy.link}>{integratedPolicy.text}</MenuItem>
          <MenuItem href={contact.link}>{contact.text}</MenuItem>
          <MenuItem href={route.pathname} lang={turkish.locale}>
            {turkish.text}
          </MenuItem>
          <MenuItem href={route.pathname} lang={english.locale}>
            {english.text}
          </MenuItem>
        </div>
        <div className={styles.container_footer}>
          <span>
            <small>{footer.text}&nbsp;</small>
          </span>
          <span>
            <small>
              {new Date().getFullYear()}&nbsp;{footer.copyright}
            </small>
          </span>
        </div>
      </div>
    </div>
  )
}
