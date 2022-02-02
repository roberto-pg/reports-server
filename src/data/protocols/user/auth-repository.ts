import { UserModel } from '@/data/models'

export interface AuthRepository {
  authenticateUser: (cpf: string) => Promise<UserModel>
  checkCpfExists: (cpf: string) => Promise<Boolean>
  checkEmailExists: (email: string) => Promise<Boolean>
  loadPassword: (cpf: string) => Promise<string>
  loadPasswordById: (id: string) => Promise<string>
}
