import { connectToDatabase } from "../util/mongodb";
import { Common } from "../interfaces/index";

export async function getCommonData( lang: string ) {
  // data found in all pages (layout data)

  const { db } = await connectToDatabase();
  const [common] = await db.collection("common").find({ lang }).toArray();
  const data: Common = await JSON.parse(JSON.stringify(common));

  return data;
}

