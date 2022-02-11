import { DeleteUserByIdUseCase } from '@/domain/protocols/user'
import { UserRepository } from '@/data/protocols/user'
import { customException } from '@/data/errors'

export class DeleteUserByIdUseCaseImpl implements DeleteUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  async delete(id: string): Promise<string> {
    const user = await this.repository.loadUserById(id)

    if (!user) {
      throw customException('Usuário não encontrado')
    }

    const result = await this.repository.deleteUserById(id)
    return result
  }
}
