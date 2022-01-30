import { AddUserUseCaseImpl } from '@/data/usecases'
import { PrismaServer } from '@/infra/db/postgres'
import { UserRepositoryImpl } from '@/infra/repositories'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers'
import { EmailValidatorImpl, CpfValidatorImpl } from '@/validation/validators'
import { BcryptAdapter } from '@/infra/cryptography'

export const addUserController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const emailValidator = new EmailValidatorImpl()
  const cpfValidator = new CpfValidatorImpl()
  const hasher = new BcryptAdapter()
  const userAdd = new AddUserUseCaseImpl(
    repository,
    emailValidator,
    cpfValidator,
    hasher
  )

  return new AddUserController(userAdd)
}
