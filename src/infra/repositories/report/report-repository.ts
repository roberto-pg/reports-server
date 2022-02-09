import { ReportModel } from '@/data/models'
import { ReportRepository } from '@/data/protocols/report'
import { Report } from '@/domain/entities'
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

  async loadReports(userId: string): Promise<Report[]> {
    const result = await this.prismaServer.connectPrisma().report.findMany({
      where: {
        user_id: userId
      }
    })
    return result
  }

  async update(
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ): Promise<string> {
    const result = await this.prismaServer.connectPrisma().report.update({
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

    return result.id
  }

  async loadReportById(reportId: string): Promise<Report> {
    const result = await this.prismaServer.connectPrisma().report.findUnique({
      where: {
        id: reportId
      }
    })

    return result
  }
}
