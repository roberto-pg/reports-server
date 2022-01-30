import { UserModel } from '@/data/models'

export interface UserRepository {
  addUser: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<UserModel>
  checkEmailExists: (email: string) => Promise<Boolean>
  checkCpfExists: (cpf: string) => Promise<Boolean>
  loadPassword: (cpf: string) => Promise<string>
  authenticateUser: (cpf: string, password: string) => Promise<UserModel>
  loadUsers: () => Promise<UserModel[]>
}
