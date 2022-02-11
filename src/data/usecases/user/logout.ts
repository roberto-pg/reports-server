import { LogoutUseCase } from '@/domain/protocols/user'
import { setBlackList, deleteUserCache } from '@/infra/db/redis'
import { errorMessage } from '@/data/errors'

export class LogoutUseCaseImpl implements LogoutUseCase {
  async logout(userId: string, token: string): Promise<string> {
    try {
      Promise.all([setBlackList(token, userId), deleteUserCache(userId)])
      return 'Logout realizado'
    } catch (error) {
      return errorMessage('Falha no logout')
    }
  }
}
