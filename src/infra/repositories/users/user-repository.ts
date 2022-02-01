import { UserRepository } from '@/data/protocols/users'
import { UserModel } from '@/data/models'
import { HttpService } from '@/infra/protocols'

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly prismaServer: HttpService) {}
  loadPassword: (cpf: string) => Promise<string>
  loadPasswordById: (id: string) => Promise<string>
  checkCpfExists: (cpf: string) => Promise<Boolean>
  checkEmailExists: (email: string) => Promise<Boolean>

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

  async loadUsers(): Promise<UserModel[]> {
    const users = await this.prismaServer.connectPrisma().user.findMany()
    return users
  }

  async loadUserById(userId: string): Promise<UserModel> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        id: userId
      }
    })

    return user
  }

  async updatePassword(id: string, newPassword: string): Promise<string> {
    const user = await this.prismaServer.connectPrisma().user.update({
      where: {
        id
      },
      data: {
        password: newPassword
      }
    })

    return user.id
  }

  async deleteUserById(id: string): Promise<string> {
    const user = await this.prismaServer.connectPrisma().user.delete({
      where: {
        id
      }
    })

    return user.id
  }
}
