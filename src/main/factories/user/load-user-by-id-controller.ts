import { Controller } from '@/presentation/protocols'
import { LoadUserByIdController } from '@/presentation/controllers/user'
import { LoadUserByIdUseCaseImpl } from '@/data/usecases/user'
import { UserRepositoryImpl } from '@/infra/repositories/user'
import { PrismaServer } from '@/infra/db/postgres'

export const loadUserByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const userIdUseCase = new LoadUserByIdUseCaseImpl(repository)

  return new LoadUserByIdController(userIdUseCase)
}
