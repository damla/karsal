import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Menu from "../../menu/menu.component";
import Logo from "../../logo/logo.component";

import "./nav-bar.styles.scss";

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar-container"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <nav className={navbarClasses.join(" ")}>
      <Menu align="left">
        <Link to="/karsal/hakkımızda" className="menu-item">
          HAKKIMIZDA
        </Link>
        <Link to="/karsal/iletişim" className="menu-item">
          İLETİŞİM
        </Link>
      </Menu>
      <Logo />
      <Menu align="right">
        <Link to="/karsal/fabrika" className="menu-item">
          FABRİKA
        </Link>
        <Link to="/karsal/katalog" className="menu-item">
          KATALOG
        </Link>
      </Menu>
    </nav>
  );
}
