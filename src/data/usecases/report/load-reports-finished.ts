import { ReportModel } from '@/data/models'
import { ReportRepository } from '@/data/protocols/report'
import { LoadReportsFinishedUseCase } from '@/domain/protocols/report'

export class LoadReportsFinishedUseCaseImpl
  implements LoadReportsFinishedUseCase
{
  constructor(private readonly repository: ReportRepository) {}

  async load(userId: string, finished: boolean): Promise<ReportModel[]> {
    const reports = await this.repository.loadReportsFinished(userId, finished)
    return reports
  }
}
