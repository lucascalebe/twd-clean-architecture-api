import { adptRoute } from '@/main/config/adapters/'
import { Router } from 'express'
import { makeRegisterUserController } from '@/main/factories/'

export default (router: Router): void => {
  router.post('/register', adptRoute(makeRegisterUserController()))
}
