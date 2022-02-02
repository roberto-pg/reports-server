import { AddUserUseCaseImpl } from '@/data/usecases/user'
import { PrismaServer } from '@/infra/db/postgres'
import {
  AuthRepositoryImpl,
  UserRepositoryImpl
} from '@/infra/repositories/user'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers/user'
import { EmailValidatorImpl, CpfValidatorImpl } from '@/validation/validators'
import { BcryptAdapter } from '@/infra/cryptography'

export const addUserController = (): Controller => {
  const prisma = new PrismaServer()
  const userRepository = new UserRepositoryImpl(prisma)
  const authRepository = new AuthRepositoryImpl(prisma)
  const emailValidator = new EmailValidatorImpl()
  const cpfValidator = new CpfValidatorImpl()
  const hasher = new BcryptAdapter()
  const userAdd = new AddUserUseCaseImpl(
    userRepository,
    authRepository,
    emailValidator,
    cpfValidator,
    hasher
  )

  return new AddUserController(userAdd)
}
