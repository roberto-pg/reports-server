import { LoadReportsByUserUseCaseImpl } from '@/data/usecases/report'
import { LoadReportsByUserController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'

export const loadReportsByUserController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const loadUseCase = new LoadReportsByUserUseCaseImpl(repository)

  return new LoadReportsByUserController(loadUseCase)
}
