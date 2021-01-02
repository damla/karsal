import React, { CSSProperties, ReactNode } from "react";
import styles from "./content.module.scss";
import classNames from "classnames";

interface Props {
  backgroundColor?: string,
  left?: boolean,
  title: string,
  blockquote: ReactNode,
  button: ReactNode,
  narrower?: boolean,
}


export default function Content({
  backgroundColor,
  left,
  title,
  blockquote,
  button,
  narrower,
}: Props) {

  const bgColor: CSSProperties = {
    backgroundColor // backgroundColor: backgroundColor
  }

  return (
    <div
      className={classNames(
        styles.container,
        narrower && styles.container__narrower
      )}
      style={
        bgColor
      }
    >
      <div className={styles.body}>
        {left && <div className={styles.body__left}>{left}</div>}
        <div className={styles.body__right}>
          <h1>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  );
}
