import Head from "next/head";

import Layout from "../../components/layout/layout.component";

import "./catalog.module.scss";

import { getCommonData } from "../../lib/common";

export async function getStaticProps({ locale }) {
  const commonData = await getCommonData(locale);

  return {
    props: {
      common: commonData,
    },
  };
}

export default function Katalog({ common }) {
  return (
    <>
      <Head>
        <title>Katalog</title>
      </Head>
      <Layout data={common}></Layout>
    </>
  );
}
