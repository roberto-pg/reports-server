import { Router } from 'express'
import { addUserController, authenticationController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { protectedRoute } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/user-add', protectedRoute, adaptRoute(addUserController()))
  router.post('/auth-user', adaptRoute(authenticationController()))
}
