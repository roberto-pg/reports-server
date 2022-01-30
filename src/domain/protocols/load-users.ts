import { User } from '@/domain/entities'

export interface LoadUsers {
  load: () => Promise<User[]>
}
