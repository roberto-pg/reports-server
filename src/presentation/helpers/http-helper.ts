import { HttpResponse } from '@/presentation/protocols'

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message
})

export const serverSuccess = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})
