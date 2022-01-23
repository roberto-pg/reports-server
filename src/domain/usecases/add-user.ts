import { User } from '@/domain/entities'

export interface IAddUser {
  add: (
    name: string,
    email: string,
    cpf: string,
    password: string
  ) => Promise<User>
}
