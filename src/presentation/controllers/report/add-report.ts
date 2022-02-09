import { AddReportUseCase } from '@/domain/protocols/report'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverSuccess, serverError } from '@/presentation/helpers'
import { ReportViewModel } from '@/presentation/view-models'
import { env } from '@/main/config/env'

type AddReportRequest = {
  userId: string
  initialDescription: string
  imageUrl: string
  startedAt: string
}

export class AddReportController implements Controller {
  constructor(private readonly addReport: AddReportUseCase) {}

  async handle(
    request: AddReportRequest
  ): Promise<HttpResponse<ReportViewModel>> {
    const initialImage = env.dirImage + request.imageUrl
    try {
      const report = await this.addReport.add(
        request.userId,
        request.initialDescription,
        initialImage,
        request.startedAt
      )
      return serverSuccess(ReportViewModel.map(report))
    } catch (error) {
      return serverError(error)
    }
  }
}
