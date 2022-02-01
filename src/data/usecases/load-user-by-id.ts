import { UserModel } from '@/data/models'
import { LoadUserByIdUseCase } from '@/domain/protocols'
import { UserRepository } from '@/data/protocols/users'

export class LoadUserByIdUseCaseImpl implements LoadUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  async load(userId: string): Promise<UserModel> {
    const user = await this.repository.loadUserById(userId)
    user.password = undefined
    return user
  }
}
