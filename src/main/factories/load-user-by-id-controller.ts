import { Controller } from '@/presentation/protocols'
import { LoadUserByIdController } from '@/presentation/controllers'
import { LoadUserByIdUseCaseImpl } from '@/data/usecases'
import { UserRepositoryImpl } from '@/infra/repositories/users'
import { PrismaServer } from '@/infra/db/postgres'

export const loadUserByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const userIdUseCase = new LoadUserByIdUseCaseImpl(repository)

  return new LoadUserByIdController(userIdUseCase)
}
