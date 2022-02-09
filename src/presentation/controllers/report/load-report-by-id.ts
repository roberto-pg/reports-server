import { LoadReportByIdUseCase } from '@/domain/protocols/report'
import { CustomError } from '@/presentation/errors'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { ReportViewModel } from '@/presentation/view-models'

type ReportById = {
  reportId: string
}

export class LoadReportByIdController implements Controller {
  constructor(private readonly reportByIdUseCase: LoadReportByIdUseCase) {}

  async handle(request: ReportById): Promise<HttpResponse<ReportViewModel>> {
    try {
      if (!request.reportId) {
        throw new CustomError('Informe o ID do relatório')
      }

      const result = await this.reportByIdUseCase.load(request.reportId)
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
