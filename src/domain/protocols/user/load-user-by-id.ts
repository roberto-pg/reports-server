import { User } from '@/domain/entities'

export interface LoadUserByIdUseCase {
  load: (userId: string) => Promise<User>
}
