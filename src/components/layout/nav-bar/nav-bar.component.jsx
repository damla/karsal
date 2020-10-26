import React from "react";
import { Link } from "react-router-dom";

import "./nav-bar.styles.scss";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="menu-container align-left">
        <Link to="/hakkımızda" className="menu-item">
          HAKKIMIZDA
        </Link>
        <Link to="/iletişim" className="menu-item">
          İLETİŞİM
        </Link>
      </div>

      <Link className="logo-container" to="/">
        <img
          className="logo"
          src="/karsal/karsal-logo.png"
          alt="karsal-logo"
          width={ 150 }
          height={ 50 }
        />
      </Link>

      <div className="menu-container align-right">
        <Link to="/fabrika" className="menu-item">
          FABRİKA
        </Link>
        <Link to="/katalog" className="menu-item">
          KATALOG
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
