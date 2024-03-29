import { UserModel } from '@/data/models'
import { AuthRepository } from '@/data/protocols/user'
import { HttpService } from '@/infra/protocols'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async authenticateUser(cpf: string): Promise<UserModel | null> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        cpf
      }
    })

    return user
  }

  async checkCpfExists(cpf: string): Promise<boolean> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        cpf: cpf
      }
    })
    if (user) {
      return true
    } else {
      return false
    }
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        email: email
      }
    })
    if (user) {
      return true
    } else {
      return false
    }
  }

  async loadPassword(cpf: string): Promise<string> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        cpf: cpf
      },
      select: {
        password: true
      }
    })
    return user?.password ?? ''
  }

  async loadPasswordById(id: string): Promise<string> {
    const user = await this.prismaServer.connectPrisma().user.findUnique({
      where: {
        id: id
      },
      select: {
        password: true
      }
    })
    return user?.password ?? ''
  }
}
