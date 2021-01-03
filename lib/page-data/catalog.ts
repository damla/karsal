import { connectToDatabase } from '../../util/mongodb'
import { CatalogModel } from '../../interfaces/index'

export async function getCatalogData (lang: string): Promise<CatalogModel> {
  // data found in catalog page

  const { db } = await connectToDatabase()
  const [common]: CatalogModel[] = await db
    .collection('catalog')
    .find({ lang })
    .toArray()
  const data: CatalogModel = await JSON.parse(JSON.stringify(common))

  return data
}
