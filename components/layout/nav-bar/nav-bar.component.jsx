import React, { useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import Logo from "../../logo/logo.component";
import Menu from "../../menu/menu.component";
import MenuItem from "../../menu-item/menu-item.component";
import HamburgerButton from "../../hamburger-button/hamburger-button.component";

import "./nav-bar.styles.scss";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1131px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1130px)" });

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={classNames("navbar-container", { scrolled: scrolled })}>
      {isDesktopOrLaptop && (
        <>
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
        </>
      )}

      {isTabletOrMobile && (
        <>
          <Menu align="left">
            <MenuItem href="/">
              <Logo width={120} height={40} />
            </MenuItem>
          </Menu>
          <Menu align="right">
            <MenuItem href="/">
              <HamburgerButton />
            </MenuItem>
          </Menu>
        </>
      )}
    </nav>
  );
}
