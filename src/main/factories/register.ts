import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { RegisterUserController } from '@/web-controllers/register-user-controller'

export const makeRegisterUserController = (): RegisterUserController => {
  const mongodbUserRepository = new MongodbUserRepository()
  const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
  const registerUserController = new RegisterUserController(registerUserOnMailingListUseCase)
  return registerUserController
}
