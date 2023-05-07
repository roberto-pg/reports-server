import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    // eslint-disable-next-line prettier/prettier
    (await import(`../routes/${fileName}`)).default(router)
  })
}

// export default (app: Express): void => {
//   const router = Router()
//   app.use('/api', router)
//   readdirSync(`${__dirname}/../routes`).map(async (fileName) => (await import(`../routes/${fileName}`)).default(router))
// }
