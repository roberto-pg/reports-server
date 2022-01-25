import { UserModel } from '@/data/models'

export interface UserRepository {
  addUser: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<UserModel>
  checkEmailExists: (email: string) => Promise<Boolean>
}
