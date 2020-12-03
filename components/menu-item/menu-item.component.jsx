import Link from "next/link";
import "./menu-item.styles.scss";
import classNames from "classnames";
import React, { useState } from "react";

export default function MenuItem({ burger, href, children }) {
  const [menuActive, setMenuState] = useState(false);

  const onClickHandler = () => {
    setMenuState(!menuActive);
  };

  return (
    <div onClick={burger ? onClickHandler : null}>
      <Link href={href}>
        <>
          <a
            className={classNames(
              "menu-item",
              { "hamburger-button": burger },
              { "is-active": menuActive }
            )}
          >
            {children}
          </a>
        </>
      </Link>
    </div>
  );
}
