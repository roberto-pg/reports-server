import { User } from '@/domain/entities'

export interface LoadUsersUseCase {
  load: () => Promise<User[]>
}
