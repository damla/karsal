import { connectToDatabase } from "../../util/mongodb";

export async function getFactoryData(lang) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common] = await db.collection("factory").find({ lang }).toArray();
  const data = await JSON.parse(JSON.stringify(common));

  return data;
}
