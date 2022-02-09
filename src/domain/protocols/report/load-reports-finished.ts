import { Report } from '@/domain/entities'

export interface LoadReportsFinishedUseCase {
  load: (userId: string, finished: boolean) => Promise<Report[]>
}
