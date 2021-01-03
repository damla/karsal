import React, { CSSProperties, ReactNode } from "react";
import styles from "./bar.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode,
  height?: string,
  announcement?: boolean,
  footer?: boolean,
}

export default function Bar({ children, height, announcement, footer }: Props) {

  const heightValue: CSSProperties = {
    height // height: height
  }

  return (
    <div
      className={classNames(
        styles.container,
        announcement && styles.container__announcement,
        footer && styles.container__footer
      )}
      style={heightValue}
    >
      {children}
    </div>
  );
}
