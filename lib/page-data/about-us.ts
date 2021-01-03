import { connectToDatabase } from '../../util/mongodb'
import { AboutUsModel } from '../../interfaces/index'

export async function getAboutUsData (lang: string): Promise<AboutUsModel> {
  // data found in about us page

  const { db } = await connectToDatabase()
  const [common]: AboutUsModel[] = await db.collection('about-us').find({ lang }).toArray()
  const data: AboutUsModel = await JSON.parse(JSON.stringify(common))

  return data
}
