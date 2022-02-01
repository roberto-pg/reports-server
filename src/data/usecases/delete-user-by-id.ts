import { DeleteUserByIdUseCase } from '@/domain/protocols'
import { UserRepository } from '@/data/protocols/users'

export class DeleteUserByIdUseCaseImpl implements DeleteUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  async delete(id: string): Promise<string> {
    const result = await this.repository.deleteUserById(id)
    return result
  }
}
