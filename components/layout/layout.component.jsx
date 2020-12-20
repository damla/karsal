import "./layout.styles.scss";

import Bar from "../bar/bar.component";
import Announcement from "./announcement/announcement.component";
import Footer from "./footer/footer.component";
import NavBar from "./nav-bar/nav-bar.component";
import SideNavBar from "./side-nav-bar/side-nav-bar.component";
import HamburgerButton from "../hamburger-button/hamburger-button.component";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import classNames from "classnames";

export default function Layout({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 475px)" });
  const [isOpen, setIsOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1131px)",
  });

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames("layout-container", {
        "layout-container__sidebarOpen": isOpen,
      })}
    >
      <Announcement>
        <Bar>
          {isMobile ? (
            <>
              <a href="mailto:info@karsalorme.com.tr">
                <img
                  src="/assets/svgs/envelope-solid.svg"
                  width={20}
                  layout="fill"
                  alt="Email Logo"
                />
              </a>
              <span>Bize Ulaşın</span>
              <a href="tel:+902123456789">
                <img
                  src="/assets/svgs/phone-solid.svg"
                  width={15}
                  height={15}
                  layout="fill"
                  alt="Phone Logo"
                />
              </a>
            </>
          ) : (
            <>
              <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
              <a href="tel:+902123456789">+90 (212) 345 67 89</a>
            </>
          )}
        </Bar>
      </Announcement>
      <SideNavBar
        isOpen={isOpen}
        hamburgerButton={
          <HamburgerButton onClickHandler={onClickHandler} menuActive={true} />
        }
      />
      {(isDesktopOrLaptop ? false : isOpen) ? null : (
        <NavBar
          hamburgerButton={
            <HamburgerButton
              onClickHandler={onClickHandler}
              menuActive={false}
            />
          }
        />
      )}
      {children}
      <Footer />
    </div>
  );
}

// class olarak transition ekle, sidebar-active gibi
