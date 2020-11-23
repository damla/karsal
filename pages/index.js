import Head from "next/head";
import BlockQuote from "../components/block-quote/block-quote.component";
import CustomButton from "../components/custom-button/custom-button.component";

import Divider from "../components/divider/divider.component";
import Layout from "../components/layout/layout.component";
import Section from "../components/section/section.component";

import "./home.styles.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karsal Örme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section Background="/assets/images/section-1.png">
          <div className="blockquote-container">
            <BlockQuote>KUMAŞIN MİMARI</BlockQuote>
          </div>
          <div className="button-container">
            <CustomButton scrollDown inverted>
              <i>&#8594;</i>
            </CustomButton>
          </div>
        </Section>
        <Divider />
        <Section BgColor="pink" />
      </Layout>
    </>
  );
}
