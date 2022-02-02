import { DeleteUserByIdController } from '@/presentation/controllers/user'
import { Controller } from '@/presentation/protocols'
import { DeleteUserByIdUseCaseImpl } from '@/data/usecases/user'
import { UserRepositoryImpl } from '@/infra/repositories/user'
import { PrismaServer } from '@/infra/db/postgres'

export const deleteUserByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const deleteUser = new DeleteUserByIdUseCaseImpl(repository)

  return new DeleteUserByIdController(deleteUser)
}
