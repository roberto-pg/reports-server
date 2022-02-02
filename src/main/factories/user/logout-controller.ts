import { Controller } from '@/presentation/protocols'
import { LogoutController } from '@/presentation/controllers/user'
import { LogoutUseCaseImpl } from '@/data/usecases/user'

export const logoutController = (): Controller => {
  const logoutUseCase = new LogoutUseCaseImpl()

  return new LogoutController(logoutUseCase)
}
