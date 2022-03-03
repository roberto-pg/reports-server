import { LoadReportsByFinishedUseCaseImpl } from '@/data/usecases/report'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { LoadReportsByFinishedController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'

export const loadReportsByFinishedController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const finishedUseCase = new LoadReportsByFinishedUseCaseImpl(repository)

  return new LoadReportsByFinishedController(finishedUseCase)
}
