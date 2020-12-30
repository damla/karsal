import styles from "./layout.module.scss";

import Announcement from "./announcement/announcement.component";
import Footer from "./footer/footer.component";
import NavBar from "./nav-bar/nav-bar.component";
import SideBar from "./side-bar/side-bar.component";
import HamburgerButton from "../hamburger-button/hamburger-button.component";

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function Layout({
  children,
  data: { announcement, sidebar, navbar, footer },
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 475px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1131px)",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") disableScrollBody(isOpen);
  }, [isOpen]);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const disableScrollBody = (isOpen) => {
    isOpen
      ? document.querySelector("body").classList.add("disableScroll")
      : document.querySelector("body").classList.remove("disableScroll");
  };

  // console.log("announcement", announcement);
  // console.log("sidebar", sidebar);
  // console.log("navbar", navbar);
  // console.log("footer", footer);

  return (
    <div className={styles.container}>
      <Announcement>
        {isMobile ? (
          <>
            <a href={announcement.email.link}>
              <img
                src="/assets/svgs/envelope-solid.svg"
                width={20}
                layout="fill"
                alt={announcement.email.image_alt}
              />
            </a>
            <span>{announcement.text}</span>
            <a href={announcement.phone.link}>
              <img
                src="/assets/svgs/phone-solid.svg"
                width={15}
                height={15}
                layout="fill"
                alt={announcement.phone.image_alt}
              />
            </a>
          </>
        ) : (
          <>
            <a href={announcement.email.link}>{announcement.email.text}</a>
            <a href={announcement.phone.link}>{announcement.phone.text}</a>
          </>
        )}
      </Announcement>
      <SideBar
        isOpen={isOpen}
        hamburgerButton={
          <HamburgerButton onClickHandler={onClickHandler} menuActive={true} />
        }
        data={{
          sidebar: {
            about_us,
            factory,
            catalog,
            contact,
            turkish,
            english,
            footer,
          },
        }}
      />
      {(isDesktopOrLaptop ? false : isOpen) || (
        <NavBar
          data={{
            navbar: { about_us, factory, catalog, contact, turkish, english },
          }}
          hamburgerButton={
            <HamburgerButton
              onClickHandler={onClickHandler}
              menuActive={false}
            />
          }
        />
      )}
      <div className={styles.container__body}>{children}</div>
      <Footer />
    </div>
  );
}
