import { connectToDatabase } from "../../util/mongodb";

export async function getAboutUsData(lang) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common] = await db.collection("about-us").find({ lang }).toArray();
  const data = await JSON.parse(JSON.stringify(common));

  return data;
}
