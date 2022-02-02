import { Controller, HttpResponse } from '@/presentation/protocols'
import { UserViewModel } from '@/presentation/view-models'
import { AddUserUseCase } from '@/domain/protocols/user'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { CustomError } from '@/presentation/errors'

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
        throw new CustomError('Informe o nome')
      }

      if (!request.email) {
        throw new CustomError('Informe o email')
      }

      if (!request.cpf) {
        throw new CustomError('Informe o CPF')
      }

      if (!request.password) {
        throw new CustomError('Informe a senha')
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
