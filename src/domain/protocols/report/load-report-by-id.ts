import { Report } from '@/domain/entities'

export interface LoadReportByIdUseCase {
  load: (reportId: string) => Promise<Report>
}
