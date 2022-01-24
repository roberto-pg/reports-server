import { UserModel } from '@/data/models'

export interface AddUserRepository {
  add: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<UserModel>
}
