import Head from "next/head";
import BlockQuote from "../components/block-quote/block-quote.component";
import CustomButton from "../components/custom-button/custom-button.component";

import Divider from "../components/divider/divider.component";
import Layout from "../components/layout/layout.component";
import Section from "../components/section/section.component";
import Content from "../components/content/content.component";
import ImageBox from "../components/image-box/image-box.component";

import "./home.styles.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karsal Örme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <Content BgColor={"#f0f9f0"}></Content>
          <ImageBox />
        </Section>
        <Divider />
        <Section BgColor="pink" />
      </Layout>
    </>
  );
}
