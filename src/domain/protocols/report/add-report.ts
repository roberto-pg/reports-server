import { Report } from '@/domain/entities'

export interface AddReportUseCase {
  add: (
    userId: string,
    initialDescription: string,
    initialImage: string,
    startedAt: string
  ) => Promise<Report>
}
