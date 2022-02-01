import { LogoutUseCase } from '@/domain/protocols'
import { setBlackList, deleteUserCache } from '@/infra/db/redis'
import { UseCaseError } from '@/data/errors'

export class LogoutUseCaseImpl implements LogoutUseCase {
  async logout(userId: string, token: string): Promise<string> {
    try {
      Promise.all([setBlackList(token, userId), deleteUserCache(userId)])
      return 'Tudo bem'
    } catch (error) {
      throw new UseCaseError(error)
    }
  }
}
