import { Express, Router } from 'express'
import { readdirSync } from 'fs'
// import cors from 'cors'

// export const setupRoutes = (app: Express): void => {
export default (app: Express): void => {
  const router = Router()
  // app.use(cors())
  // app.use(express.json())
  app.use('/api', router)
  // eslint-disable-next-line node/no-path-concat
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    // eslint-disable-next-line prettier/prettier
    (await import(`../routes/${fileName}`)).default(router)
  })
}
