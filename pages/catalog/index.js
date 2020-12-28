import Head from "next/head";

import "./catalog.styles.scss";

import { connectToDatabase } from "../../util/mongodb";

export async function getStaticProps({ locale }) {
  const { db } = await connectToDatabase();

  const content = await db.collection("Content").find({}).toArray();

  const t = locale === "tr" ? "Katalog" : "Catalog";
  // console.log(locale);

  return {
    props: {
      // content: JSON.stringify(content),
      content: JSON.stringify(t),
    },
  };
}

export default function Katalog({content}) {
  return (
    <>
      <Head>
        <title>Katalog</title>
      </Head>
      <div>
        <h1>{content}</h1>
      </div>
    </>
  );
}
