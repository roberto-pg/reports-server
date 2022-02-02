import { ReportModel } from '@/data/models'

export interface ReportRepository {
  addReport: (
    userId: string,
    initialDescription: string,
    initialImage: string,
    startedAt: string
  ) => Promise<ReportModel>
}
