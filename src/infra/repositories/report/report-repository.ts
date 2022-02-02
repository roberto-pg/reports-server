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
}
