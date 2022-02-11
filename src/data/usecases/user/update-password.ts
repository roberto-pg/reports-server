import { UpdatePasswordUseCase } from '@/domain/protocols/user'
import { AuthRepository, UserRepository } from '@/data/protocols/user'
import { HashComparer, Hasher } from '@/data/protocols/cryptography'
import { customException } from '@/data/errors'

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
    const user = await this.userRepository.loadUserById(id)

    if (!user) {
      throw customException('Usuário não encontrado')
    }

    const dbPassword = await this.authRepository.loadPasswordById(id)

    const passwordCheck = await this.passwordCompare.compare(
      oldPassword,
      dbPassword
    )

    if (!passwordCheck) {
      throw customException('Senha atual não confere')
    }

    if (newPassword.length < 6) {
      throw customException('A senha não pode ter menos de 6 dígitos')
    }

    const hashPassword = await this.hasher.hash(newPassword)

    const result = await this.userRepository.updatePassword(id, hashPassword)
    return result
  }
}
