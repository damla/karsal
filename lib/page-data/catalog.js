import { connectToDatabase } from "../../util/mongodb";

export async function getCatalogData(lang) {
  // data found in catalog page

  const { db } = await connectToDatabase();
  const [common] = await db.collection("catalog").find({ lang }).toArray();
  const data = await JSON.parse(JSON.stringify(common));

  return data;
}
