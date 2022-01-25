import { AddUserUseCaseImpl } from '@/data/usecases/add-user'
import { PrismaServer } from '@/infra/db/postgres'
import { UserRepositoryImpl } from '@/infra/repositories'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers'
import { EmailValidatorImpl, CpfValidatorImpl } from '@/validation/validators'
import { HasherImpl } from '@/infra/cryptography'

export const addUserController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new UserRepositoryImpl(prisma)
  const emailValidator = new EmailValidatorImpl()
  const cpfValidator = new CpfValidatorImpl()
  const hasher = new HasherImpl()
  const userAdd = new AddUserUseCaseImpl(
    repository,
    emailValidator,
    cpfValidator,
    hasher
  )

  return new AddUserController(userAdd)
}
