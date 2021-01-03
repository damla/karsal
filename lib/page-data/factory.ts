import { connectToDatabase } from "../../util/mongodb";
import { FactoryModel } from "../../interfaces/index";

export async function getFactoryData(lang: string) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common]: Array<FactoryModel> = await db.collection("factory").find({ lang }).toArray();
  const data: FactoryModel = await JSON.parse(JSON.stringify(common));

  return data;
}
