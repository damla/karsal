import { connectToDatabase } from "../util/mongodb";

export async function getCommonData(locale) {
  // found in all pages (layout data)
  const { db } = await connectToDatabase();
  const common = await db.collection("common").find({ lang: locale }).toArray();
  const data = await JSON.parse(JSON.stringify(common[0]));
  //   await console.log(data);
  return data;
}
