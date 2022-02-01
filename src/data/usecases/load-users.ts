import { LoadUsersUseCase } from '@/domain/protocols'
import { UserModel } from '@/data/models'
import { UserRepository } from '@/data/protocols/users'

export class LoadUsersUseCaseImpl implements LoadUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async load(): Promise<UserModel[]> {
    const users = await this.repository.loadUsers()

    const serializedUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        password: undefined
      }
    })

    return serializedUsers
  }
}
