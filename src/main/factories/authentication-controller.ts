import { Controller } from '@/presentation/protocols'
import { AuthenticationController } from '@/presentation/controllers'
import { AuthenticationUseCaseImpl } from '@/data/usecases'
import {
  AuthRepositoryImpl,
  UserRepositoryImpl
} from '@/infra/repositories/users'
import { PrismaServer } from '@/infra/db/postgres'
import { CpfValidatorImpl } from '@/validation/validators'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'

export const authenticationController = (): Controller => {
  const prisma = new PrismaServer()
  const cpfValidator = new CpfValidatorImpl()
  const passwordCompare = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter()
  const userRepository = new UserRepositoryImpl(prisma)
  const authRepository = new AuthRepositoryImpl(prisma)
  const authUser = new AuthenticationUseCaseImpl(
    userRepository,
    authRepository,
    cpfValidator,
    passwordCompare,
    jwtAdapter
  )

  return new AuthenticationController(authUser)
}
