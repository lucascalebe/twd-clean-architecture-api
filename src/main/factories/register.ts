import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { RegisterUserController } from '@/web-controllers/register-user-controller'

export const makeRegisterUserController = (): RegisterUserController => {
  const inMemoryUserRepository = new InMemoryUserRepository([])
  const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(inMemoryUserRepository)
  const registerUserController = new RegisterUserController(registerUserOnMailingListUseCase)
  return registerUserController
}
