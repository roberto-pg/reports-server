import { PrismaClient } from '@prisma/client'

export interface IHttpService {
  connectPrisma(): PrismaClient
}
