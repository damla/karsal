import Link from "next/link";
import "./menu-item.styles.scss";
import classNames from "classnames";
import React, { useState } from "react";

export default function MenuItem({ menu, burger, href, children }) {
  const [menuActive, setMenuState] = useState(false);

  const onClickHandler = () => {
    setMenuState(!menuActive);
  };

  return (
    <div onClick={onClickHandler}>
      <Link href={href}>
        <>
          <a
            className={classNames(
              { "menu-item": menu },
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
