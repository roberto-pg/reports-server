import { AddReportUseCase } from '@/domain/protocols/report'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverSuccess, serverError } from '@/presentation/helpers'
import { ReportViewModel } from '@/presentation/view-models'
import { env } from '@/main/config/env'

type AddReportRequest = {
  userId: string
  initialDescription: string
  initialImage: string
  startedAt: string
}

export class AddReportController implements Controller {
  constructor(private readonly addReport: AddReportUseCase) {}

  async handle(
    request: AddReportRequest
  ): Promise<HttpResponse<ReportViewModel>> {
    const imageUrl = env.dirImage + request.initialImage
    try {
      const report = await this.addReport.add(
        request.userId,
        request.initialDescription,
        imageUrl,
        request.startedAt
      )
      return serverSuccess(ReportViewModel.map(report))
    } catch (error) {
      return serverError(error)
    }
  }
}
