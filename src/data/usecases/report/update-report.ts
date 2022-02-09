import { ReportRepository } from '@/data/protocols/report'
import { UpdateReportUseCase } from '@/domain/protocols/report'

export class UpdateReportUseCaseImpl implements UpdateReportUseCase {
  constructor(private readonly repository: ReportRepository) {}

  async update(
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ): Promise<string> {
    const result = await this.repository.update(
      id,
      finalDescription,
      finalImage,
      stopedAt,
      finished
    )
    return result
  }
}
