import { bodyParser } from '@/main/config/middleware/body-parser'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
}
