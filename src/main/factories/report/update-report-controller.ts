import { UpdateReportUseCaseImpl } from '@/data/usecases/report'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { UpdateReportController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'

export const updateReportController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const updateUseCase = new UpdateReportUseCaseImpl(repository)

  return new UpdateReportController(updateUseCase)
}
