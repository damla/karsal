import { connectToDatabase } from "../../util/mongodb";

export async function getContactData(lang) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common] = await db.collection("contact").find({ lang }).toArray();
  const data = await JSON.parse(JSON.stringify(common));

  return data;
}
