import React from "react";
import { Link } from "react-router-dom";

import Menu from "../menu/menu.component";
import Logo from "../logo/logo.component";

import "./nav-bar.styles.scss";

export default function NavBar() {
  return (
    <nav className="navbar-container">
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
