import { AddUserUseCaseImpl } from '@/data/usecases/add-user'
import { PrismaServer } from '@/infra/db/postgres'
import { AddUserRepositoryImpl } from '@/infra/repositories'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers'
import { EmailValidatorImpl } from '@/validation/validators'

export const addUserController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new AddUserRepositoryImpl(prisma)
  const validator = new EmailValidatorImpl()
  const userAdd = new AddUserUseCaseImpl(repository, validator)

  return new AddUserController(userAdd)
}
