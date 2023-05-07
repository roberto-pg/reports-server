import { HttpResponse } from '@/presentation/protocols'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
