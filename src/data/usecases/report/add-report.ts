import { ReportRepository } from '@/data/protocols/report'
import { Report } from '@/domain/entities'
import { AddReportUseCase } from '@/domain/protocols/report'

export class AddReportUseCaseImpl implements AddReportUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}
  async add(userId: string, initialDescription: string, initialImage: string, startedAt: string): Promise<Report> {
    const report = await this.reportRepository.addReport(userId, initialDescription, initialImage, startedAt)
    return report
  }
}
