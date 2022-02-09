import { Report } from '@/domain/entities'

export interface LoadReportsByUserUseCase {
  load: (userId: string) => Promise<Report[]>
}
