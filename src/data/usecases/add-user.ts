import { User } from '@/domain/entities'
import { AddUserUseCase } from '@/domain/protocols'
import { UserRepository, EmailValidator, CpfValidator } from '@/data/protocols'
import { UseCaseError } from '@/data/errors'
import { Hasher } from '@/data/protocols/cryptography'

export class AddUserUseCaseImpl implements AddUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly emailValidate: EmailValidator,
    private readonly cpfValidate: CpfValidator,
    private readonly hasher: Hasher
  ) {}

  async add(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<User> {
    const validEmail = this.emailValidate.isValidEmail(email)

    if (!validEmail) {
      throw new UseCaseError('Informe um email válido')
    }

    const emailExists = await this.repository.checkEmailExists(email)

    if (emailExists) {
      throw new UseCaseError('O email já existe')
    }

    const validCPF = this.cpfValidate.isValidCPF(cpf)

    if (!validCPF) {
      throw new UseCaseError('Informe um CPF válido')
    }

    if (password.length < 6) {
      throw new UseCaseError('A senha tem menos de 6 dígitos')
    }

    const hashPassword = await this.hasher.hash(password)

    const user = await this.repository.addUser(name, email, cpf, hashPassword)

    user.password = undefined

    return user
  }
}
