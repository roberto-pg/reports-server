import { Controller, HttpResponse } from '@/presentation/protocols'
import { UserViewModel } from '@/presentation/view-models'
import { AddUserUseCase } from '@/domain/protocols/user'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { errorMessage } from '@/data/errors'

type AddUserRequest = {
  name: string
  email: string
  cpf: string
  password: string
}

export class AddUserController implements Controller {
  constructor(private readonly addUser: AddUserUseCase) {}

  async handle(request: AddUserRequest): Promise<HttpResponse<UserViewModel>> {
    try {
      if (!request.name) {
        return errorMessage('Informe o nome')
      }

      if (!request.email) {
        return errorMessage('Informe o email')
      }

      if (!request.cpf) {
        return errorMessage('Informe o CPF')
      }

      if (!request.password) {
        return errorMessage('Informe a senha')
      }

      const user = await this.addUser.add(
        request.name,
        request.email,
        request.cpf,
        request.password
      )

      return serverSuccess(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
