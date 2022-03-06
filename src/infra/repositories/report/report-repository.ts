import { ReportModel } from '@/data/models'
import { ReportRepository } from '@/data/protocols/report'
import { HttpService } from '@/infra/protocols'

export class ReportRepositoryImpl implements ReportRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async addReport(
    userId: string,
    initialDescription: string,
    initialImage: string,
    startedAt: string
  ): Promise<ReportModel> {
    const report = await this.prismaServer.connectPrisma().report.create({
      data: {
        user_id: userId,
        initial_description: initialDescription,
        initial_image: initialImage,
        started_at: new Date(startedAt)
      }
    })

    return report
  }

  async loadReports(userId: string): Promise<ReportModel[]> {
    const reports = await this.prismaServer.connectPrisma().report.findMany({
      where: {
        user_id: userId,
        finished: true
      }
    })
    return reports
  }

  async update(
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ): Promise<string> {
    const report = await this.prismaServer.connectPrisma().report.update({
      data: {
        final_description: finalDescription,
        final_image: finalImage,
        stoped_at: stopedAt,
        finished: finished
      },
      where: {
        id
      }
    })

    return report.id
  }

  async loadReportById(reportId: string): Promise<ReportModel> {
    const report = await this.prismaServer.connectPrisma().report.findUnique({
      where: {
        id: reportId
      }
    })

    return report
  }

  async loadReportsByFinished(
    userId: string,
    finished: string
  ): Promise<ReportModel[]> {
    const reports = await this.prismaServer.connectPrisma().report.findMany({
      where: {
        user_id: userId,
        finished: finished === 'true'
      }
    })

    return reports
  }

  async deleteReportById(id: string): Promise<string> {
    const result = await this.prismaServer.connectPrisma().report.delete({
      where: {
        id
      }
    })

    return result.id
  }
}
