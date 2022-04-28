import { adptRoute } from '@/main/adapters'
import { Router } from 'express'
import { makeRegisterAndSendEmailController } from '@/main/factories/'

export default (router: Router): void => {
  router.post('/register', adptRoute(makeRegisterAndSendEmailController()))
}
