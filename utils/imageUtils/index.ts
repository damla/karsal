import fs from 'fs'

export function getBase64Values (sections: string[]): string[] {
  const base64Values: string[] = []

  sections.forEach((item) => {
    const val: string = fs.readFileSync(`public/assets/low-quality-images/${item}.jpg`, 'base64')
    const res = `data:image/png;base64,${val}`
    base64Values.push(res)
  })

  return base64Values
}
