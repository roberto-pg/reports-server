import { Controller, HttpResponse } from '@/presentation/protocols'
import { UserViewModel } from '@/presentation/view-models'
import { LoadUsersUseCase } from '@/domain/protocols'
import { serverSuccess, serverError } from '@/presentation/helpers'

export class LoadUsersController implements Controller {
  constructor(private readonly loadUsersUseCase: LoadUsersUseCase) {}

  async handle(): Promise<HttpResponse<UserViewModel[]>> {
    try {
      const users = await this.loadUsersUseCase.load()
      return serverSuccess(users)
    } catch (error) {
      return serverError(error)
    }
  }
}
