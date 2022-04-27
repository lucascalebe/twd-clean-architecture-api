import { HttpRequest } from '@/web-controllers/ports'
import { Request, Response } from 'express'
import { RegisterAndSendEmailController } from '@/web-controllers/'

export const adptRoute = (controller: RegisterAndSendEmailController) => {
  return async (req: Request, res: Response) => {
    const HttpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(HttpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
