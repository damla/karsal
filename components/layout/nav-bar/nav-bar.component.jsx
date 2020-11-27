import React, { useEffect, useLayoutEffect } from "react";

import Menu from "../../menu/menu.component";
import MenuItem from "../../menu-item/menu-item.component";

import "./nav-bar.styles.scss";
import classNames from "classnames";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={classNames("navbar-container", { scrolled: scrolled })}>
      <Menu align="left">
        <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>
        <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
        <MenuItem href="/fabrika">FABRİKA</MenuItem>
        <MenuItem href="/katalog">KATALOG</MenuItem>
      </Menu>
      <Menu align="right">
        <div className="lang-container">
          <MenuItem href="/katalog">EN</MenuItem>
          <span className="seperator">|</span>
          <MenuItem href="/katalog">TR</MenuItem>
        </div>
      </Menu>
    </nav>
  );
}
