import Head from "next/head";

import "./contact.module.scss";

import { connectToDatabase } from "../../util/mongodb";

export async function getStaticProps({ locale }) {
  const { db } = await connectToDatabase();

  const content = await db.collection("Content").find({}).toArray();

  const t = locale === "tr" ? "İletişim" : "Contact";
  // console.log(locale);

  return {
    props: {
      // content: JSON.stringify(content),
      content: JSON.stringify(t),
    },
  };
}
export default function Iletisim({content}) {
  return (
    <>
      <Head>
        <title>İletişim</title>
      </Head>
      <div>
        <h1>{content}</h1>
      </div>
    </>
  );
}
