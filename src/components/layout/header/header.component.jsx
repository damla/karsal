import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo/logo.component";
import Menu from "../../menu/menu.component";
import BlockQuote from "../../block-quote/block-quote.component";
import { Grid } from "semantic-ui-react";

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

      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column>
            <BlockQuote>
              Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı
              kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla
              müşteriye ulaştırmaktadır.
            </BlockQuote>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Header;
