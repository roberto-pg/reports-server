import { AddReportController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'
import { AddReportUseCaseImpl } from '@/data/usecases/report'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { PrismaServer } from '@/infra/db/postgres'

export const addReportController = (): Controller => {
  const prisma = new PrismaServer()
  const reportRepository = new ReportRepositoryImpl(prisma)
  const addReport = new AddReportUseCaseImpl(reportRepository)

  return new AddReportController(addReport)
}
