import { ReportRepository } from '@/data/protocols/report'
import { UpdateReportUseCase } from '@/domain/protocols/report'
import { env } from '@/main/config/env'
import { unlink } from 'fs'

export class UpdateReportUseCaseImpl implements UpdateReportUseCase {
  constructor(private readonly repository: ReportRepository) {}

  async update(
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ): Promise<string> {
    const report = await this.repository.loadReportById(id)

    if (report?.finished === true) {
      const previousFinalImage = report?.final_image?.split('/')
      if (previousFinalImage)
        unlink(env.imageStorage + previousFinalImage[4], (error) => {
          if (error) console.log(error)
        })
    }

    const result = await this.repository.update(id, finalDescription, finalImage, stopedAt, finished)
    return result
  }
}
