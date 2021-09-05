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

export function getFactoryImage (section: string): string[] {
  let locations: any[] = []

  const sections = ['orme', 'boyama', 'kalite-kontrol-ve-lab', 'depo-ve-sevkiyat']

  const data = fs.readdirSync(`public/assets/factory-images/${sections.indexOf(section)}/`)

  data.forEach(file => {
    file = file.replace('.jpg', '')
    locations.push(parseInt(file))
  })

  locations = locations.sort((a, b) => (a - b))
  locations.forEach(location => { location.toString() })

  return locations
}
