import { Router } from 'express'
import { protectedRoute } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import { addReportController } from '@/main/factories/report'
import multer from 'multer'
const multerConfig = require('../middlewares/multer')

export default (router: Router): void => {
  router.post(
    '/report-add',
    multer(multerConfig).single('initialImage'),
    protectedRoute,
    adaptRoute(addReportController())
  )
}
