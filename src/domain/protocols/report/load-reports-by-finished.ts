import { Report } from '@/domain/entities'

export interface LoadReportsByFinishedUseCase {
  load: (userId: string, finished: boolean) => Promise<Report[]>
}
