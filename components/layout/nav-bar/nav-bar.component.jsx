import React, { useLayoutEffect } from "react";

import Menu from "../../menu/menu.component";
import Logo from "../../logo/logo.component";
import MenuItem from "../../menu-item/menu-item.component";

import "./nav-bar.styles.scss";

import classNames from "classnames";

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  useLayoutEffect(() => {
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
      </Menu>
      <Logo width="150" height="50" />
      <Menu align="right">
        <MenuItem href="/fabrika">FABRİKA</MenuItem>
        <MenuItem href="/katalog">KATALOG</MenuItem>
      </Menu>
    </nav>
  );
}
