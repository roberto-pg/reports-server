import { User } from '@/domain/entities'
import { AddUserUseCase } from '@/domain/protocols'
import { AddUserRepository, EmailValidator } from '@/data/protocols'
import { UseCaseError } from '@/data/errors'

export class AddUserUseCaseImpl implements AddUserUseCase {
  constructor(
    private readonly repository: AddUserRepository,
    private readonly emailValidate: EmailValidator
  ) {}

  async add(
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<User> {
    const validEmail = this.emailValidate.isValid(email)

    if (!validEmail) {
      throw new UseCaseError('Informe um email válido')
    }

    const user = await this.repository.add(name, email, cpf, password)
    return user
  }
}
