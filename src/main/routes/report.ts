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
const multerConfig = require('../middlewares/multer')

export default (router: Router): void => {
  router.post(
    '/start-report',
    multer(multerConfig).single('imageUrl'),
    protectedRoute,
    adaptRoute(addReportController())
  )

  router.get(
    '/all-reports-by-user',
    protectedRoute,
    adaptRoute(loadReportsByUserController())
  )

  router.patch(
    '/close-report/:id',
    multer(multerConfig).single('imageUrl'),
    protectedRoute,
    adaptRoute(updateReportController())
  )

  router.get(
    '/report-by-id/:reportId',
    protectedRoute,
    adaptRoute(loadReportByIdController())
  )

  router.get(
    '/reports-by-finished/:finished',
    protectedRoute,
    adaptRoute(loadReportsByFinishedController())
  )

  router.delete(
    '/delete-report',
    protectedRoute,
    adaptRoute(deleteReportByIdController())
  )
}
