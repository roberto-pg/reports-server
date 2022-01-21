import { User } from '@/domain/user/entities'
import { IAddUser } from '@/domain/user/usecases'
import { IAddUserRepository } from '@/data/user/contracts'

export class AddUserImpl implements IAddUser {
  private _repository: IAddUserRepository
  constructor(readonly repository: IAddUserRepository) {
    this._repository = repository
  }

  async add(): Promise<User> {
    return this._repository.add()
  }
}
