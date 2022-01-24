import { AddUserRepository } from '@/data/protocols/add-user-repository'
import { UserModel } from '@/data/models/user'
import { HttpService } from '@/infra/protocols'

export class AddUserRepositoryImpl implements AddUserRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async add(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<UserModel> {
    const user = await this.prismaServer.connectPrisma().user.create({
      data: {
        name,
        email,
        cpf,
        password
      }
    })

    return user
  }
}
