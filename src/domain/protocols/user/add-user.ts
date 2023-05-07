import { User } from '@/domain/entities'

export interface AddUserUseCase {
  add: (name: string, email: string, cpf: string, password: string) => Promise<User>
}
