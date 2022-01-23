import { User } from '@/domain/entities'
import { IAddUser } from '@/domain/usecases'
import { IAddUserRepository } from '@/data/contracts'

export class AddUserImpl implements IAddUser {
  constructor(private readonly repository: IAddUserRepository) {}

  async add(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<User> {
    const user = await this.repository.add(name, email, cpf, password)
    return user
  }
}
