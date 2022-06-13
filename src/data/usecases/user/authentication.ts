import { AuthenticationUseCase } from '@/domain/protocols/user'
import { AuthRepository, UserRepository } from '@/data/protocols/user'
import { UserModel } from '@/data/models'
import { setUserCache } from '@/infra/db/redis'
import { HashComparer, Encrypter } from '@/data/protocols/cryptography'
import { CpfValidator } from '@/data/protocols/validator'
import { customException } from '@/data/errors'

export class AuthenticationUseCaseImpl implements AuthenticationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authRepository: AuthRepository,
    private readonly cpfValidate: CpfValidator,
    private readonly passwordCompare: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth(cpf: string, password: string): Promise<UserModel> {
    const validCPF = this.cpfValidate.isValidCPF(cpf)

    if (!validCPF) {
      throw customException('CPF inválido')
    }

    const cpfExists = await this.authRepository.checkCpfExists(cpf)

    if (!cpfExists) {
      throw customException('CPF não cadastrado')
    }

    const dbPassword = await this.authRepository.loadPassword(cpf)

    const passwordCheck = await this.passwordCompare.compare(
      password,
      dbPassword
    )

    if (!passwordCheck) {
      throw customException('Senha inválida')
    }

    const user = await this.authRepository.authenticateUser(cpf)

    const token = await this.encrypter.encrypt(user.id)

    setUserCache(user.id)

    const serializedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      token: token,
    }

    return serializedUser
  }
}
