import Head from "next/head";

import "./contact.module.scss";

import Layout from "../../components/layout/layout.component";

import { getCommonData } from "../../lib/common";

export async function getStaticProps({ locale }) {
  const commonData = await getCommonData(locale);

  return {
    props: {
      common: commonData,
    },
  };
}
export default function Contact({ common }) {
  return (
    <>
      <Head>
        <title>İletişim</title>
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
