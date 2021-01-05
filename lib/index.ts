import { connectToDatabase } from '../util/mongodb'
// import { CommonModel, AboutUsModel, ContactModel, CatalogModel, FactoryModel } from '../interfaces/index'

// interface Props {
//   CommonModel?: CommonModel
//   AboutUsModel?: AboutUsModel
//   ContactModel?: ContactModel
//   CatalogModel?: CatalogModel
//   FactoryModel?: FactoryModel
// }

export async function getData (page: string, lang: string): Promise<any> {
  const { db } = await connectToDatabase()
  const [obj]: object[] = await db.collection(page).find({ lang }).toArray()
  const data: object = await JSON.parse(JSON.stringify(obj))

  return data
}
