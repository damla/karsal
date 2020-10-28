import React from "react";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Section id="section1" BgColor="pink">
          test
        </Section>
        <Section BgColor="white">test2</Section>
        <Section BgColor="#ebebeb">test3</Section>
        <CustomButton>test123tes</CustomButton>
      </Layout>
    </>
  );
}
