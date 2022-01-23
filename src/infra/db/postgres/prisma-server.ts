import { IHttpService } from '@/infra/contracts'
import { PrismaClient } from '@prisma/client'

export class PrismaServer implements IHttpService {
  connectAny() {
    throw new Error('Method not implemented.')
  }

  connectPrisma() {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }

    return global.prisma
  }
}
