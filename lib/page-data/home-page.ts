import { connectToDatabase } from "../../util/mongodb";
import { HomePageModel } from "../../interfaces/index";

export async function getHomePageData(lang: string) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common]: Array<HomePageModel> = await db.collection("home-page").find({ lang }).toArray();
  const data: HomePageModel = await JSON.parse(JSON.stringify(common));

  return data;
}
