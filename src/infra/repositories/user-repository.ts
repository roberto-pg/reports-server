import { UserRepository } from '@/data/protocols'
import { UserModel } from '@/data/models/user'
import { HttpService } from '@/infra/protocols'

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async addUser(
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

  async checkEmailExists(email: string): Promise<Boolean> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        email: email
      }
    })
    if (user) {
      return true
    }
  }
}
