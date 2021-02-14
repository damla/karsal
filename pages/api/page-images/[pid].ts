import type { NextApiRequest, NextApiResponse } from 'next'
// import fs from 'fs'

// export default ({ query: { pid } }: NextApiRequest, res: NextApiResponse): void => {
//   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//   const val: string = fs.readFileSync(`public/assets/low-quality-images/${pid}`, 'base64')

//   res.status(200).json({ pid: val })
//   res.end()
// }
export default ({ query: { pid } }: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: ['Hello ', pid] })
  res.end()
}
