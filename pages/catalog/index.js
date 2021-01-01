import Head from "next/head";

import Layout from "../../components/layout/layout.component";

import "./catalog.module.scss";

import { getCommonData } from "../../lib/common";
import { getCatalogData } from "../../lib/page-data/catalog";

export async function getStaticProps({ locale }) {
  const commonData = await getCommonData(locale);
  const pageData = await getCatalogData(locale);

  return {
    props: {
      common: commonData,
      page: pageData,
    },
  };
}

export default function Catalog({ common, page: { title } }) {
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
