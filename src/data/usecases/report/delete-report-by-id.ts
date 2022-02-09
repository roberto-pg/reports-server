import { UseCaseError } from '@/data/errors'
import { ReportRepository } from '@/data/protocols/report'
import { DeleteReportByIdUseCase } from '@/domain/protocols/report'
// import { unlinkSync } from 'fs'

export class DeleteReportByIdUseCaseImpl implements DeleteReportByIdUseCase {
  constructor(private readonly repository: ReportRepository) {}

  async delete(id: string, initial: string, final: string): Promise<string> {
    const report = this.repository.loadReportById(id)

    if (!report) {
      throw new UseCaseError('Relatório não encontrado')
    }

    const result = await this.repository.deleteReportById(id, initial, final)
    return result
  }
}
