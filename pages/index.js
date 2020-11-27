import Head from "next/head";

import Divider from "../components/divider/divider.component";
import Layout from "../components/layout/layout.component";
import Section from "../components/section/section.component";
import Content from "../components/content/content.component";
import ImageBox from "../components/image-box/image-box.component";

import "./home.styles.scss";
import BlockQuote from "../components/block-quote/block-quote.component";
import CustomButton from "../components/custom-button/custom-button.component";
import Logo from "../components/logo/logo.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karsal Örme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section>
          <Content
            BgColor={"#f0f9f0"}
            left={<Logo width={120} height={40} />}
            title={"Kumaşın Mimarı..."}
            blockquote={
              <BlockQuote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </BlockQuote>
            }
            button={
              <CustomButton scrollDown>
                <div className="button-content">
                  <span>Daha Fazlası</span>
                  <span>&#8594;</span>
                </div>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-1.jpg"
            alt="Picture of the fabric"
          />
        </Section>
        <Divider />
        <Section />
        <Divider />
        <Section />
      </Layout>
    </>
  );
}
