import { UserModel } from '@/data/models'

export interface UserRepository {
  addUser: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<UserModel>
  loadUsers: () => Promise<UserModel[]>
  loadUserById: (userId: string) => Promise<UserModel | null>
  deleteUserById: (id: string) => Promise<string>
  updatePassword: (id: string, newPassword: string) => Promise<string>
}
