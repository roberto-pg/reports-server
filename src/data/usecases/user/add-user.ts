import { User } from '@/domain/entities'
import { AddUserUseCase } from '@/domain/protocols/user'
import { AuthRepository, UserRepository } from '@/data/protocols/user'
import { Hasher } from '@/data/protocols/cryptography'
import { CpfValidator, EmailValidator } from '@/data/protocols/validator'
import { customException } from '@/data/errors'

export class AddUserUseCaseImpl implements AddUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authRepository: AuthRepository,
    private readonly emailValidate: EmailValidator,
    private readonly cpfValidate: CpfValidator,
    private readonly hasher: Hasher
  ) {}

  async add(name: string, email: string, cpf: string, password: string): Promise<User> {
    const validEmail = this.emailValidate.isValidEmail(email)

    if (!validEmail) {
      throw customException('Email inválido')
    }

    const emailExists = await this.authRepository.checkEmailExists(email)

    if (emailExists) {
      throw customException('O email já existe')
    }

    const validCPF = this.cpfValidate.isValidCPF(cpf)

    if (!validCPF) {
      throw customException('CPF inválido')
    }

    const cpfExists = await this.authRepository.checkCpfExists(cpf)

    if (cpfExists) {
      throw customException('O CPF já existe')
    }

    if (password.length < 6) {
      throw customException('A senha não pode ter menos de 6 dígitos')
    }

    const hashPassword = await this.hasher.hash(password)

    const user = await this.userRepository.addUser(name, email, cpf, hashPassword)

    user.password = undefined

    return user
  }
}
