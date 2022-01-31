import { UpdatePasswordUseCase } from '@/domain/protocols'
import { UserRepository } from '@/data/protocols'
import { HashComparer, Hasher } from '@/data/protocols/cryptography'
import { UseCaseError } from '@/data/errors'

export class UpdatePasswordUseCaseImpl implements UpdatePasswordUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordCompare: HashComparer,
    private readonly hasher: Hasher
  ) {}

  async update(
    id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<string> {
    if (newPassword.length < 6) {
      throw new UseCaseError('A nova senha tem menos de 6 dígitos')
    }

    const dbPassword = await this.repository.loadPasswordById(id)

    const passwordCheck = await this.passwordCompare.compare(
      oldPassword,
      dbPassword
    )

    if (!passwordCheck) {
      throw new UseCaseError('A senha atual está incorreta')
    }

    const hashPassword = await this.hasher.hash(newPassword)

    const result = await this.repository.updatePassword(id, hashPassword)
    return result
  }
}
