import { Controller, HttpResponse } from '@/presentation/protocols'
import { DeleteUserByIdUseCase } from '@/domain/protocols/user'
import { serverSuccess, serverError } from '@/presentation/helpers'

type DeleteRequest = {
  id: string
}

export class DeleteUserByIdController implements Controller {
  constructor(private readonly deleteUser: DeleteUserByIdUseCase) {}

  async handle(request: DeleteRequest): Promise<HttpResponse<string>> {
    try {
      const response = await this.deleteUser.delete(request.id)
      return serverSuccess(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
