import React, { ReactElement } from 'react'
import styles from './hamburger-button.module.scss'
import classNames from 'classnames'

interface Props {
  menuActive?: boolean
  onClickHandler: () => void
}

export default function HamburgerButton ({
  menuActive,
  onClickHandler
}: Props
): ReactElement {
  return (
    <li className={styles.container} onClick={onClickHandler}>
      <a className={classNames(styles.body, menuActive !== undefined && styles.body__active)}>
        <span className={styles.burgerIcon}></span>
      </a>
    </li>
  )
}

// TODO: refactor this component
