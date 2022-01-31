import { UpdatePasswordController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { UpdatePasswordUseCaseImpl } from '@/data/usecases'
import { UserRepositoryImpl } from '@/infra/repositories'
import { PrismaServer } from '@/infra/db/postgres'
import { BcryptAdapter } from '@/infra/cryptography'

export const updatePasswordController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const passwordCompare = new BcryptAdapter()
  const updatePassword = new UpdatePasswordUseCaseImpl(
    repository,
    passwordCompare,
    passwordCompare
  )

  return new UpdatePasswordController(updatePassword)
}
