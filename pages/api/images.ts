import express from 'express'
import fs from 'fs'
const app = express()

app.get('/api/images', (req, res) => {
  const val = fs.readFileSync('public/assets/low-quality-images/section-1.jpg', 'base64')

  res.json({
    section_1: val
  })

  res.end()
})

export default app
