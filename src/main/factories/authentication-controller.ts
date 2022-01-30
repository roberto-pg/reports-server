import { Controller } from '@/presentation/protocols'
import { AuthenticationController } from '@/presentation/controllers'
import { AuthenticationUseCaseImpl } from '@/data/usecases'
import { UserRepositoryImpl } from '@/infra/repositories'
import { PrismaServer } from '@/infra/db/postgres'
import { CpfValidatorImpl } from '@/validation/validators'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'

export const authenticationController = (): Controller => {
  const prisma = new PrismaServer()
  const cpfValidator = new CpfValidatorImpl()
  const passwordCompare = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter()
  const repository = new UserRepositoryImpl(prisma)
  const authUser = new AuthenticationUseCaseImpl(
    repository,
    cpfValidator,
    passwordCompare,
    jwtAdapter,
    jwtAdapter
  )

  return new AuthenticationController(authUser)
}
