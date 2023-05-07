import { verifyBlackListToken } from '@/infra/db/redis'
import { env } from '@/main/config/env'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  userId: string
}

export async function protectedRoute(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      errorCode: 'Um token é requerido'
    })
  }

  const [, token] = authToken.split(' ')

  const disconnected = await verifyBlackListToken(token)

  if (disconnected === 1) {
    return response.status(401).send({ error: 'This token is blacklisted' })
  }

  try {
    const { userId } = verify(token, env.secretKey ?? '') as IPayload
    request.userId = userId

    return next()
  } catch (error) {
    return response.status(401).json('Token expirado')
  }
}
