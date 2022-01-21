import { User } from '@/domain/user/entities'

export interface IAddUser {
  add: () => Promise<User>
}
