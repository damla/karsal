import Head from "next/head";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";
import Content from "../../components/content/content.component";
import ImageBox from "../../components/image-box/image-box.component";
import BlockQuote from "../../components/block-quote/block-quote.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Logo from "../../components/logo/logo.component";
import "./factory.module.scss";

import { getCommonData } from "../../lib/common";
import { getFactoryData } from "../../lib/page-data/factory";
import { CommonModel, FactoryModel } from "../../interfaces/index";

interface Props {
  common: CommonModel,
  page: FactoryModel
}

export async function getStaticProps({ locale = "tr" }) {
  const commonData: Props["common"] = await getCommonData(locale);
  const pageData: Props["page"] = await getFactoryData(locale);

  return {
    props: {
      common: commonData,
      page: pageData,
    },
  };
}

export default function Factory({ common, page: { title } }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common}>
        <Section>
          <Content
            backgroundColor={"#bed0bd20"}
            left={<Logo width={120} height={40} />}
            title={"Test"}
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
              <CustomButton href="/en/factory">
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
