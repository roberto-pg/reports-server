import { LoadReportsByUserUseCase } from '@/domain/protocols/report'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { ReportViewModel } from '@/presentation/view-models'
import { serverSuccess, serverError } from '@/presentation/helpers'

type ReportsByUser = {
  userId: string
}

export class LoadReportsByUserController implements Controller {
  constructor(private readonly loadUseCase: LoadReportsByUserUseCase) {}

  async handle(
    request: ReportsByUser
  ): Promise<HttpResponse<ReportViewModel[]>> {
    try {
      const reports = await this.loadUseCase.load(request.userId)
      return serverSuccess(ReportViewModel.mapCollection(reports))
    } catch (error) {
      return serverError(error)
    }
  }
}
