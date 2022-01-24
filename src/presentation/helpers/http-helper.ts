// import { UnauthorizedError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols'

// export const badRequest = (error: Error): HttpResponse => ({
//   statusCode: 400,
//   data: error.message
// })

// export const forbidden = (error: Error): HttpResponse => ({
//   statusCode: 403,
//   data: error.message
// })

// export const unauthorized = (): HttpResponse => ({
//   statusCode: 401,
//   data: new UnauthorizedError()
// })

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message
})

export const serverSuccess = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})

// export const noContent = (): HttpResponse => ({
//   statusCode: 204,
//   data: null
// })
