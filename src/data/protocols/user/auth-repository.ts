import { UserModel } from '@/data/models'

export interface AuthRepository {
  authenticateUser: (cpf: string) => Promise<UserModel | null>
  checkCpfExists: (cpf: string) => Promise<boolean>
  checkEmailExists: (email: string) => Promise<boolean>
  loadPassword: (cpf: string) => Promise<string>
  loadPasswordById: (id: string) => Promise<string>
}
