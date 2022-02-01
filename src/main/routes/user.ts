import { Router } from 'express'
import {
  addUserController,
  authenticationController,
  loadUsersController,
  loadUserByIdController,
  deleteUserByIdController,
  updatePasswordController,
  logoutController
} from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { protectedRoute } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/user-add', protectedRoute, adaptRoute(addUserController()))
  router.post('/auth-user', adaptRoute(authenticationController()))
  router.get('/users', protectedRoute, adaptRoute(loadUsersController()))
  router.get(
    '/user-by-id',
    protectedRoute,
    adaptRoute(loadUserByIdController())
  )
  router.delete(
    '/delete-user/:id',
    protectedRoute,
    adaptRoute(deleteUserByIdController())
  )
  router.patch(
    '/change-password',
    protectedRoute,
    adaptRoute(updatePasswordController())
  )
  router.post('/logout', protectedRoute, adaptRoute(logoutController()))
}
