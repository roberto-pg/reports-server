import { User } from '@/domain/entities'

export interface AuthenticationUseCase {
  auth: (cpf: string, password: string) => Promise<User>
}
