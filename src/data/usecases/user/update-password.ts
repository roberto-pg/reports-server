import { UpdatePasswordUseCase } from '@/domain/protocols/user'
import { AuthRepository, UserRepository } from '@/data/protocols/user'
import { HashComparer, Hasher } from '@/data/protocols/cryptography'
import { errorMessage } from '@/data/errors'

export class UpdatePasswordUseCaseImpl implements UpdatePasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authRepository: AuthRepository,
    private readonly passwordCompare: HashComparer,
    private readonly hasher: Hasher
  ) {}

  async update(
    id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<string> {
    if (newPassword.length < 6) {
      return errorMessage('A senha não pode ter menos de 6 dígitos')
    }

    const dbPassword = await this.authRepository.loadPasswordById(id)

    const passwordCheck = await this.passwordCompare.compare(
      oldPassword,
      dbPassword
    )

    if (!passwordCheck) {
      return errorMessage('Senha atual não confere')
    }

    const hashPassword = await this.hasher.hash(newPassword)

    const result = await this.userRepository.updatePassword(id, hashPassword)
    return result
  }
}
