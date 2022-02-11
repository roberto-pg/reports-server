import { customException } from '@/data/errors'
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
      if (!request.id) {
        throw customException('Informe o ID do relatório')
      }

      if (!request.initial) {
        throw customException('Informe o título da imagem inicial')
      }

      if (!request.final) {
        throw customException('Informe o título da imagem final')
      }

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
