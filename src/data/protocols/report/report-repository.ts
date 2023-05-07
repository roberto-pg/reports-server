import { ReportModel } from '@/data/models'

export interface ReportRepository {
  addReport: (
    userId: string,
    initialDescription: string,
    initialImage: string,
    startedAt: string
  ) => Promise<ReportModel>
  loadReports: (userId: string) => Promise<ReportModel[]>
  update: (
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ) => Promise<string>
  loadReportById: (reportId: string) => Promise<ReportModel | null>
  loadReportsByFinished: (userId: string, finished: string) => Promise<ReportModel[]>
  deleteReportById: (id: string) => Promise<string>
}
