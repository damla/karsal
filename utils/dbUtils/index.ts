import { connectToDatabase } from './mongodb'

export async function getData<T> (page: string, lang: string): Promise<T> {
  const { db } = await connectToDatabase()
  const [obj]: T[] = await db.collection(page).find({ lang }).toArray()
  const data: T = await JSON.parse(JSON.stringify(obj))
  return data
}
