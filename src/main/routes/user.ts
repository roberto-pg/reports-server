import { Router } from 'express'
import { addUserController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'

export default (router: Router): void => {
  router.post('/user-add', adaptRoute(addUserController()))
}
