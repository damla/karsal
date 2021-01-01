import Head from "next/head";

import "./contact.module.scss";

import Layout from "../../components/layout/layout.component";

import { getCommonData } from "../../lib/common";
import { getContactData } from "../../lib/page-data/contact";

export async function getStaticProps({ locale }) {
  const commonData = await getCommonData(locale);
  const pageData = await getContactData(locale);

  return {
    props: {
      common: commonData,
      page: pageData,
    },
  };
}
export default function Contact({ common, page: { title } }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common}>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#bad1f7",
          }}
        ></div>
      </Layout>
    </>
  );
}
