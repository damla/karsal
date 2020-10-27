import React from "react";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Section BgColor="pink">test</Section>
        <Section BgColor="white">test2</Section>
        <Section BgColor="#ebebeb">test3</Section>
      </Layout>
    </>
  );
}
