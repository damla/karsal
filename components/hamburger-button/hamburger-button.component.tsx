import styles from './hamburger-button.module.scss'
import classNames from 'classnames'
import React, { ReactElement } from 'react'

interface Props {
  menuActive?: boolean
  onClickHandler: () => void
}

export default function HamburgerButton ({
  menuActive = false,
  onClickHandler
}: Props
): ReactElement {
  return (
    <li className={styles.container} onClick={onClickHandler}>
      <a className={classNames(styles.body, menuActive && styles.body__active)}>
        <span className={styles.burgerIcon}></span>
      </a>
    </li>
  )
}

// refactor this component
