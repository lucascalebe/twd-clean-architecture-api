import { NodemailerEmailService } from '@/external/mail-services/nodemailer-email-service'
import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { SendEmail } from '@/usecases/send-email'
import { RegisterAndSendEmailController } from '@/web-controllers/register-user-controller'
import { getEmailOptions } from '@/main/config'
import { RegisterAndSendEmail } from '@/usecases/register-and-send-email'

export const makeRegisterAndSendEmailController = (): RegisterAndSendEmailController => {
  const mongodbUserRepository = new MongodbUserRepository()
  const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
  const emailService = new NodemailerEmailService()
  const sendEmailUseCase = new SendEmail(getEmailOptions(), emailService)
  const registerAndSensEmailUseCase = new RegisterAndSendEmail(registerUserOnMailingListUseCase, sendEmailUseCase)
  const registerUserController = new RegisterAndSendEmailController(registerAndSensEmailUseCase)
  return registerUserController
}
