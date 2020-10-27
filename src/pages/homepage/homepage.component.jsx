import React from "react";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/layout/section/section.component";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Section>test</Section>
        <Section BgColor="white">test2</Section>
      </Layout>
    </>
  );
}
