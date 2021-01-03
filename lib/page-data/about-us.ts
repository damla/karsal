import { connectToDatabase } from "../../util/mongodb";
import { AboutUs } from "../../interfaces/index";

export async function getAboutUsData(lang: string) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common] = await db.collection("about-us").find({ lang }).toArray();
  const data: AboutUs = await JSON.parse(JSON.stringify(common));

  return data;
}
