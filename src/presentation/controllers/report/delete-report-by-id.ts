import { customException } from '@/data/errors'
import { DeleteReportByIdUseCaseImpl } from '@/data/usecases/report'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

type DeleteRequest = {
  id: string
  initialImage: string
  finalImage: string
}

export class DeleteReportByIdController implements Controller {
  constructor(private readonly deleteUseCase: DeleteReportByIdUseCaseImpl) {}

  async handle(request: DeleteRequest): Promise<HttpResponse<string>> {
    try {
      if (!request.id) {
        throw customException('Informe o ID do relatório')
      }

      if (!request.initialImage) {
        throw customException('Informe o título da imagem inicial')
      }

      const result = await this.deleteUseCase.delete(request.id, request.initialImage, request.finalImage)
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
