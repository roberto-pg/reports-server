import {
  Controller,
  HttpResponse,
  serverSuccess,
  serverError
} from '@/presentation/contracts'
import { User } from '@/presentation/view-models'
import { IAddUser } from '@/domain/usecases'

type TypeRequest = {
  name: string
  email: string
  cpf: string
  password: string
}

export class AddUserController implements Controller {
  constructor(private readonly addUser: IAddUser) {}

  async handle(request: TypeRequest): Promise<HttpResponse<User>> {
    try {
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
