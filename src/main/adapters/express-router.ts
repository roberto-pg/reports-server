import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const requestBody = {
      ...(request.body || {}),
      ...(request.params || {}),
      userId: request.userId,
      token: request.headers.authorization
    }

    const httpResponse = await controller.handle(requestBody)
    response.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
