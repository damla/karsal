import React, { useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import Logo from "../../logo/logo.component";
import Menu from "../../menu/menu.component";
import MenuItem from "../../menu-item/menu-item.component";

import "./nav-bar.module.scss";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function NavBar({ hamburgerButton }) {
  const [isScrolled, setScrolled] = React.useState(
    typeof window !== "undefined" && window.scrollY > 0
  );

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
    <nav className={classNames("navbar-container", { scrolled: isScrolled })}>
      {isDesktopOrLaptop && (
        <>
          <Menu align="left">
            <MenuItem href="/about-us">HAKKIMIZDA</MenuItem>
            <MenuItem href="/factory">FABRİKA</MenuItem>
            <MenuItem href="/catalog">KATALOG</MenuItem>
            <MenuItem href="/contact">İLETİŞİM</MenuItem>
          </Menu>
          <Menu align="right">
            <div className="lang-container">
              <MenuItem href="/en" locale="en">
                EN
              </MenuItem>
              <span className="seperator">|</span>
              <MenuItem href="/" locale="tr">
                TR
              </MenuItem>
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
            <MenuItem href="#">{hamburgerButton}</MenuItem>
            {/* TODO: LINK ICINDE LINK VAR! */}
          </Menu>
        </>
      )}
    </nav>
  );
}
