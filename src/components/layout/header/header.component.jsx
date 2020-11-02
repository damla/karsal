import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo/logo.component";
import Menu from "../../menu/menu.component";
import CustomButton from "../../custom-button/custom-button.component";
import BlockQuote from "../../block-quote/block-quote.component";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header-container">
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
      <div className="blockquote-container">
        <BlockQuote>
          Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı
          kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla
          müşteriye ulaştırmaktadır.
        </BlockQuote>
      </div>

      <div className="button-container">
        <CustomButton className="custom-button" scroll>
          <i class="fa fa-chevron-down"></i>
        </CustomButton>
      </div>
    </div>
  );
}

export default Header;
