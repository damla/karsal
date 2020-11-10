import React from "react";

import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import BlockQuote from "../../components/block-quote/block-quote.component";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Section Background="../../assets/images/section-1.png">
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
        </Section>
        <Section BgColor="pink">test</Section>
        <Section BgColor="white">test2</Section>
        <Section BgColor="#ebebeb">test3</Section>
      </Layout>
    </>
  );
}
