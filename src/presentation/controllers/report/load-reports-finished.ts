import { LoadReportsFinishedUseCase } from '@/domain/protocols/report'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { ReportViewModel } from '@/presentation/view-models'

type FinishedReports = {
  userId: string
}

export class LoadReportsFinishedController implements Controller {
  constructor(private readonly finishedUseCase: LoadReportsFinishedUseCase) {}

  async handle(
    request: FinishedReports
  ): Promise<HttpResponse<ReportViewModel[]>> {
    try {
      const finished = true

      const reports = await this.finishedUseCase.load(request.userId, finished)
      return serverSuccess(ReportViewModel.mapCollection(reports))
    } catch (error) {
      return serverError(error)
    }
  }
}
