import express from 'express'
require('dotenv').config()

const app = express()

app.use(express.json())

app.listen(process.env.port, () =>
  console.log(`Server started at Port ${process.env.port}`)
)
