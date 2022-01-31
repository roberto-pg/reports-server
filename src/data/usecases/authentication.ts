import { AuthenticationUseCase } from '@/domain/protocols'
import { UserRepository } from '@/data/protocols'
import { UserModel } from '@/data/models'
import { CpfValidator } from '../protocols/cpf'
import { UseCaseError } from '@/data/errors'
import { setUserCache } from '@/infra/db/redis'
import { HashComparer, Encrypter } from '@/data/protocols/cryptography'

export class AuthenticationUseCaseImpl implements AuthenticationUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly cpfValidate: CpfValidator,
    private readonly passwordCompare: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth(cpf: string, password: string): Promise<UserModel> {
    const validCPF = this.cpfValidate.isValidCPF(cpf)

    if (!validCPF) {
      throw new UseCaseError('Informe um CPF válido')
    }

    const cpfExists = await this.repository.checkCpfExists(cpf)

    if (!cpfExists) {
      throw new UseCaseError('CPF não cadastrado')
    }

    const dbPassword = await this.repository.loadPassword(cpf)

    const passwordCheck = await this.passwordCompare.compare(
      password,
      dbPassword
    )

    if (!passwordCheck) {
      throw new UseCaseError('Senha inválida')
    }

    const user = await this.repository.authenticateUser(cpf)

    const token = await this.encrypter.encrypt(user.id)

    setUserCache(user.id)

    const serializedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      password: undefined,
      token: token
    }

    return serializedUser
  }
}
