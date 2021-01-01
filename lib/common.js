import { connectToDatabase } from "../util/mongodb";

export async function getCommonData(lang) {
  // data found in all pages (layout data)

  const { db } = await connectToDatabase();
  const [common] = await db.collection("common").find({ lang }).toArray();
  const data = await JSON.parse(JSON.stringify(common));

  return data;
}
