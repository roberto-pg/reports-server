import { Controller, HttpResponse } from '@/presentation/protocols'
import { UpdatePasswordUseCase } from '@/domain/protocols/user'
import { serverSuccess, serverError } from '@/presentation/helpers'
import { customException } from '@/data/errors'

type UpdatePasswordRequest = {
  id: string
  oldPassword: string
  newPassword: string
}

export class UpdatePasswordController implements Controller {
  constructor(private readonly updateUseCase: UpdatePasswordUseCase) {}

  async handle(request: UpdatePasswordRequest): Promise<HttpResponse<string>> {
    try {
      if (!request.id) {
        throw customException('Informe o ID do usuário')
      }

      if (!request.oldPassword) {
        throw customException('Informe a senha atual')
      }

      if (!request.newPassword) {
        throw customException('Informe a nova senha')
      }

      const result = await this.updateUseCase.update(request.id, request.oldPassword, request.newPassword)
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
