import { serverSuccess, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { LogoutUseCase } from '@/domain/protocols/user'

type UserIdRequest = {
  userId: string
  token: string
}

export class LogoutController implements Controller {
  constructor(private readonly logoutUseCase: LogoutUseCase) {}

  async handle(request: UserIdRequest): Promise<HttpResponse<string>> {
    const token = request.token.split(' ')[1]

    try {
      const result = await this.logoutUseCase.logout(request.userId, token)
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
