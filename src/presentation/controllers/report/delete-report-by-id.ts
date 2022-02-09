import { DeleteReportByIdUseCaseImpl } from '@/data/usecases/report'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

type DeleteRequest = {
  id: string
  initial: string
  final: string
}

export class DeleteReportByIdController implements Controller {
  constructor(private readonly deleteUseCase: DeleteReportByIdUseCaseImpl) {}

  async handle(request: DeleteRequest): Promise<HttpResponse<string>> {
    try {
      const result = await this.deleteUseCase.delete(
        request.id,
        request.initial,
        request.final
      )
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
