import { Controller } from '@/presentation/protocols'
import { LogoutController } from '@/presentation/controllers'
import { LogoutUseCaseImpl } from '@/data/usecases'

export const logoutController = (): Controller => {
  const logoutUseCase = new LogoutUseCaseImpl()

  return new LogoutController(logoutUseCase)
}
