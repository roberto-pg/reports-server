import { HttpResponse } from '@/presentation/protocols'

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serverSuccess = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})
