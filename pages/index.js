import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Section from "../components/section/section.component";
import Content from "../components/content/content.component";
import ImageBox from "../components/image-box/image-box.component";
import BlockQuote from "../components/block-quote/block-quote.component";
import CustomButton from "../components/custom-button/custom-button.component";
import Logo from "../components/logo/logo.component";
import { connectToDatabase } from "../util/mongodb";

export default function Anasayfa() {
  function scrollToSection(sectionId) {
    if (typeof window !== "undefined") {
      document
        .querySelector(`#${sectionId}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>Karsal Örme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section id="section-1" banner>
          <Content
            BgColor={"#bed0bd20"}
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
              <CustomButton button onClick={() => scrollToSection("section-2")}>
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
            objectFit={"cover"}
            priority
          />
        </Section>
        <Section id="section-1" banner>
          <Content
            BgColor={"#bed0bd20"}
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
              <CustomButton button onClick={() => scrollToSection("section-2")}>
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
            objectFit={"cover"}
            priority
          />
        </Section>
        {/* <Section id="section-2">
          <ImageBox
            src="/assets/images/section-2.jpg"
            alt="Picture of yarns"
            objectFit={"fill"}
            wider
            priority
          />
          <Content
            narrower
            BgColor={"#f1f5f1"}
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
              <CustomButton button>
                <div className="button-content">
                  <span>Daha Fazlası</span>
                  <span>&#8594;</span>
                </div>
              </CustomButton>
            }
          />
        </Section> */}
        {/* <Section id="section-3">
          <Content
            narrower
            BgColor={"#f1f5f1"}
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
              <CustomButton button>
                <div className="button-content">
                  <span>Daha Fazlası</span>
                  <span>&#8594;</span>
                </div>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-3.jpg"
            alt="Picture of yarns"
            objectFit={"cover"}
            wider
            priority
          />
        </Section> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { db } = await connectToDatabase();

  const content = await db.collection("Content").find({}).toArray();
  console.log(locale);

  return {
    props: {
      content: JSON.stringify(content),
    },
  };
}
