import { ReportModel } from '@/data/models'
import { ReportRepository } from '@/data/protocols/report'
import { LoadReportsByFinishedUseCase } from '@/domain/protocols/report'

export class LoadReportsByFinishedUseCaseImpl
  implements LoadReportsByFinishedUseCase
{
  constructor(private readonly repository: ReportRepository) {}

  async load(userId: string, finished: string): Promise<ReportModel[]> {
    const reports = await this.repository.loadReportsByFinished(
      userId,
      finished
    )
    return reports
  }
}
