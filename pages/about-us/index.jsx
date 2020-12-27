import Head from "next/head";
import Layout from "../../components/layout/layout.component";
import Section from "../../components/section/section.component";
import Content from "../../components/content/content.component";
import ImageBox from "../../components/image-box/image-box.component";
import BlockQuote from "../../components/block-quote/block-quote.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Logo from "../../components/logo/logo.component";
import "./about-us.styles.scss";

import { connectToDatabase } from "../../util/mongodb";

export async function getStaticProps({ locale }) {
  const { db } = await connectToDatabase();

  const content = await db.collection("Content").find({}).toArray();

  const t = locale === "tr" ? "hakkimizda" : "about us";
  // console.log(locale);

  return {
    props: {
      // content: JSON.stringify(content),
      content: JSON.stringify(t),
    },
  };
}

// export const getStaticPaths = ({ locales }) => {
//   return {
//     paths: [
//       { params: { "about-us": "hakkımızda" }, locale: locales[0] }, // tr
//       { params: { "about-us": "about-us" }, locale: locales[1] }, // en
//     ],
//     fallback: true,
//   };
// };

export default function AboutUs({ content }) {
  //   const a = 5;
  //   debugger;
  return (
    <>
      <Head>
        <title>Hakkımızda</title>
      </Head>
      <Layout>
        <Section>
          <Content
            BgColor={"#bed0bd20"}
            left={<Logo width={120} height={40} />}
            title={content}
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
            objectFit={"fill"}
            priority
          />
        </Section>
      </Layout>
    </>
  );
}
