import React from "react";

import NavBar from "../../nav-bar/nav-bar.component";
import CustomButton from "../../custom-button/custom-button.component";
import BlockQuote from "../../block-quote/block-quote.component";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header-container">
      <NavBar />

      <div className="blockquote-container">
        <BlockQuote>
          Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı
          kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla
          müşteriye ulaştırmaktadır.
        </BlockQuote>
      </div>
      <div className="button-container">
        <CustomButton className="custom-button" scroll inverted>
          <i class="fa fa-chevron-down"></i>
        </CustomButton>
      </div>
    </div>
  );
}

export default Header;
