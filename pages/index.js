import Head from "next/head";
import BlockQuote from "../components/block-quote/block-quote.component";
import CustomButton from "../components/custom-button/custom-button.component";

import Layout from "../components/layout/layout.component";
import Section from "../components/section/section.component";

import "./home.styles.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section>
          <CustomButton scrollDown inverted>
            <i>{`>`}</i>
          </CustomButton>
          <BlockQuote>
            Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı
            kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla
            müşteriye ulaştırmaktadır.
          </BlockQuote>
        </Section>
      </Layout>
    </>
  );
}
