import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { RegisterAndSendEmailController } from '@/web-controllers/register-user-controller'

export const makeRegisterUserController = (): RegisterAndSendEmailController => {
  const mongodbUserRepository = new MongodbUserRepository()
  const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
  const registerUserController = new RegisterAndSendEmailController(registerUserOnMailingListUseCase)
  return registerUserController
}
