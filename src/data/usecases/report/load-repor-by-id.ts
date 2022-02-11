import { ReportModel } from '@/data/models'
import { ReportRepository } from '@/data/protocols/report'
import { LoadReportByIdUseCase } from '@/domain/protocols/report'
import { customException } from '@/data/errors'

export class LoadReportByIdUseCaseImpl implements LoadReportByIdUseCase {
  constructor(private readonly repository: ReportRepository) {}

  async load(reportId: string): Promise<ReportModel> {
    const report = await this.repository.loadReportById(reportId)

    if (!report) {
      throw customException('Relatório não encontrado')
    }

    return report
  }
}
