import Head from "next/head";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";
import Content from "../../components/content/content.component";
import ImageBox from "../../components/image-box/image-box.component";
import BlockQuote from "../../components/block-quote/block-quote.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Logo from "../../components/logo/logo.component";
import "./about-us.module.scss";
import { getCommonData } from "../../lib/common";

export async function getStaticProps({ locale }) {
  const commonData = await getCommonData(locale);

  return {
    props: {
      common: commonData,
    },
  };
}

export default function AboutUs({ common }) {
  // console.log("announcement", announcement);
  // console.log("sidebar", sidebar);
  // console.log("navbar", navbar);
  // console.log("footer", footer);

  return (
    <>
      <Head>
        <title>Hakkımızda</title>
      </Head>
      <Layout data={common}>
        <Section>
          <Content
            BgColor={"#bed0bd20"}
            left={<Logo width={120} height={40} />}
            title={""}
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
              <CustomButton button href="/en/about-us">
                <span>Daha Fazlası</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-1.jpg"
            alt="Picture of the fabric"
            objectFit={"fill"}
            priority
          />
        </Section>
      </Layout>
    </>
  );
}
