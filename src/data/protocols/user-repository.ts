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
  loadPasswordById: (id: string) => Promise<string>
  authenticateUser: (cpf: string) => Promise<UserModel>
  loadUsers: () => Promise<UserModel[]>
  loadUserById: (userId: string) => Promise<UserModel>
  deleteUserById: (id: string) => Promise<string>
  updatePassword: (id: string, newPassword: string) => Promise<string>
}
