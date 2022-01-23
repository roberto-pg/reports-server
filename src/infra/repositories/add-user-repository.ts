import { IAddUserRepository } from '@/data/contracts/add-user-repository'
import { UserModel } from '@/data/models/user'
import { IHttpService } from '@/infra/contracts'

export class AddUserRepositoryImpl implements IAddUserRepository {
  constructor(private readonly prismaServer: IHttpService) {}

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
