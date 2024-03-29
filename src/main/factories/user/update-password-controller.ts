import { UpdatePasswordController } from '@/presentation/controllers/user'
import { Controller } from '@/presentation/protocols'
import { UpdatePasswordUseCaseImpl } from '@/data/usecases/user'
import { AuthRepositoryImpl, UserRepositoryImpl } from '@/infra/repositories/user'
import { PrismaServer } from '@/infra/db/postgres'
import { BcryptAdapter } from '@/infra/cryptography'

export const updatePasswordController = (): Controller => {
  const prisma = new PrismaServer()
  const userRepository = new UserRepositoryImpl(prisma)
  const authRepository = new AuthRepositoryImpl(prisma)
  const passwordCompare = new BcryptAdapter()
  const updatePassword = new UpdatePasswordUseCaseImpl(userRepository, authRepository, passwordCompare, passwordCompare)

  return new UpdatePasswordController(updatePassword)
}
