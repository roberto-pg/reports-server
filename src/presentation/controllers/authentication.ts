import { AuthenticationUseCase } from '@/domain/protocols'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { UserViewModel } from '@/presentation/view-models'
import { serverSuccess, serverError } from '@/presentation/helpers'
import { CustomError } from '@/presentation/errors'

type AuthRequest = {
  cpf: string
  password: string
}

export class AuthenticationController implements Controller {
  constructor(private readonly authentication: AuthenticationUseCase) {}

  async handle(request: AuthRequest): Promise<HttpResponse<UserViewModel>> {
    try {
      if (!request.cpf) {
        throw new CustomError('Informe o CPF')
      }

      if (!request.password) {
        throw new CustomError('Informe a senha')
      }

      const user = await this.authentication.auth(request.cpf, request.password)
      return serverSuccess(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
