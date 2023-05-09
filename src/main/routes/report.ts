import { Router } from 'express'
import { protectedRoute } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import {
  addReportController,
  loadReportByIdController,
  loadReportsByUserController,
  loadReportsByFinishedController,
  updateReportController,
  deleteReportByIdController
} from '@/main/factories/report'
import multer from 'multer'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multerConfig = require('../middlewares/multer')

export default (router: Router): void => {
  router.post(
    '/start-report',
    protectedRoute,
    adaptRoute(addReportController()),
    multer(multerConfig).single('imageUrl')
  )

  router.patch(
    '/close-report/:id',
    protectedRoute,
    adaptRoute(updateReportController()),
    multer(multerConfig).single('imageUrl')
  )

  router.get('/all-reports-by-user', protectedRoute, adaptRoute(loadReportsByUserController()))

  router.get('/report-by-id/:reportId', protectedRoute, adaptRoute(loadReportByIdController()))

  router.get('/reports-by-finished/:finished', protectedRoute, adaptRoute(loadReportsByFinishedController()))

  router.delete('/delete-report', protectedRoute, adaptRoute(deleteReportByIdController()))
}
