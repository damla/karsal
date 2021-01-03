import { connectToDatabase } from "../../util/mongodb";
import { ContactModel } from "../../interfaces/index";

export async function getContactData(lang: string) {
  // data found in about us page

  const { db } = await connectToDatabase();
  const [common]: Array<ContactModel> = await db.collection("contact").find({ lang }).toArray();
  const data: ContactModel = await JSON.parse(JSON.stringify(common));

  return data;
}
