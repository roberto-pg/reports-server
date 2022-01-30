import { LoadUsersController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { LoadUsersUseCaseImpl } from '@/data/usecases'
import { UserRepositoryImpl } from '@/infra/repositories'
import { PrismaServer } from '@/infra/db/postgres'

export const loadUsersController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const loadUsers = new LoadUsersUseCaseImpl(repository)

  return new LoadUsersController(loadUsers)
}
