import { UserModel } from '@/data/models'

export interface IAddUserRepository {
  add: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<UserModel>
}
