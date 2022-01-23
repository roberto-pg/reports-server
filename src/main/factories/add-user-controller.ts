import { AddUserImpl } from '@/data/usecases/add-user'
import { PrismaServer } from '@/infra/db/postgres'
import { AddUserRepositoryImpl } from '@/infra/repositories'
import { Controller } from '@/presentation/contracts'
import { AddUserController } from '@/presentation/controllers'

export const addUserController = (): Controller => {
  const prisma = new PrismaServer()
  const repository = new AddUserRepositoryImpl(prisma)
  const userAdd = new AddUserImpl(repository)

  return new AddUserController(userAdd)
}
