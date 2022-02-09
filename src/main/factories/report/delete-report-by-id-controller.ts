import { DeleteReportByIdUseCaseImpl } from '@/data/usecases/report'
import { PrismaServer } from '@/infra/db/postgres'
import { ReportRepositoryImpl } from '@/infra/repositories/report'
import { DeleteReportByIdController } from '@/presentation/controllers/report'
import { Controller } from '@/presentation/protocols'

export const deleteReportByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new ReportRepositoryImpl(prisma)
  const deleteUseCase = new DeleteReportByIdUseCaseImpl(repository)

  return new DeleteReportByIdController(deleteUseCase)
}
