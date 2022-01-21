import { UserModel } from '@/data/user/models'

export interface IAddUserRepository {
  add: () => Promise<UserModel>
}
