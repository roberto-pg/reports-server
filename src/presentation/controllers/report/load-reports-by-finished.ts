import { LoadReportsByFinishedUseCase } from '@/domain/protocols/report'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { ReportViewModel } from '@/presentation/view-models'

type FinishedReports = {
  userId: string
  finished: string
}

export class LoadReportsByFinishedController implements Controller {
  constructor(private readonly finishedUseCase: LoadReportsByFinishedUseCase) {}

  async handle(
    request: FinishedReports
  ): Promise<HttpResponse<ReportViewModel[]>> {
    try {
      const reports = await this.finishedUseCase.load(
        request.userId,
        request.finished
      )
      return serverSuccess(ReportViewModel.mapCollection(reports))
    } catch (error) {
      return serverError(error)
    }
  }
}
