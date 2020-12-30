import React, { useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import Logo from "../../logo/logo.component";
import Menu from "../../menu/menu.component";
import MenuItem from "../../menu-item/menu-item.component";

import styles from "./nav-bar.module.scss";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function NavBar({
  hamburgerButton,
  data: { about_us, factory, catalog, contact, english, turkish },
}) {
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
    <nav
      className={classNames(
        styles.container,
        isScrolled && styles.container__scrolled
      )}
    >
      {isDesktopOrLaptop && (
        <>
          <Menu align="left">
            <MenuItem href={about_us.link} locale={about_us.locale}>
              {about_us.text}
            </MenuItem>
            <MenuItem href={factory.link} locale={factory.locale}>
              {factory.text}
            </MenuItem>
            <MenuItem href={catalog.link} locale={catalog.locale}>
              {factory.text}
            </MenuItem>
            <MenuItem href={contact.link} locale={contact.locale}>
              {contact.text}
            </MenuItem>
          </Menu>
          <Menu align="right">
            <div className={styles.lang_container}>
              <MenuItem href={english.link} locale={english.locale}>
                {english.text}
              </MenuItem>
              <span className={styles.seperator}>|</span>
              <MenuItem href={turkish.link} locale={turkish.locale}>
                {turkish.text}
              </MenuItem>
            </div>
          </Menu>
        </>
      )}

      {isTabletOrMobile && (
        <>
          <Menu align="left">
            <MenuItem
              href={
                localStorage.getItem("lang") === "tr"
                  ? turkish.link
                  : english.link
              }
              locale={
                localStorage.getItem("lang") === "tr"
                  ? turkish.locale
                  : english.locale
              }
            >
              <Logo width={120} height={40} />
            </MenuItem>
          </Menu>
          <Menu align="right">
            <MenuItem href="#" locale={english.locale}>
              {hamburgerButton}
            </MenuItem>
            {/* TODO: LINK ICINDE LINK VAR! */}
          </Menu>
        </>
      )}
    </nav>
  );
}
