import { LoadReportByIdUseCaseImpl } from '@/data/usecases/report'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { LoadReportByIdController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'

export const loadReportByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const reportByIdUseCase = new LoadReportByIdUseCaseImpl(repository)

  return new LoadReportByIdController(reportByIdUseCase)
}
