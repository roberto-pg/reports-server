import { Router } from 'express'
import { protectedRoute } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import {
  addReportController,
  loadReportByIdController,
  loadReportsByUserController,
  loadReportsFinishedController,
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
    '/close-report',
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
    '/finished-reports',
    protectedRoute,
    adaptRoute(loadReportsFinishedController())
  )

  router.delete(
    '/delete-report',
    protectedRoute,
    adaptRoute(deleteReportByIdController())
  )
}
