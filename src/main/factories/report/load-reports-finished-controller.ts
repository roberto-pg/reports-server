import { LoadReportsFinishedUseCaseImpl } from '@/data/usecases/report'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { LoadReportsFinishedController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'

export const loadReportsFinishedController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const finishedUseCase = new LoadReportsFinishedUseCaseImpl(repository)

  return new LoadReportsFinishedController(finishedUseCase)
}
